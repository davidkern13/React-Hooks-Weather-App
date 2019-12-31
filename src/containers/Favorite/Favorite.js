import React, {Suspense, lazy, useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './style.scss';
import FavoriteComp from '../../components/Favorite';

import LoadingSpinner from '../../library/loading';
import {FAVORITE_PAGE} from '../../enum/locations';

import { updateFavorite } from '../../store/favorite/action';
import { currentconditions } from '../../library/accuweather';
import {jsonParseData} from "../../utils";
import {getLocalStorageData} from "../../local-db/localstorage";
import { CurrentWeatherCelsius } from '../../store/current-weather/action';

const LayoutContent = lazy(() => import('../../layout'));

const Favorite = () => {

    const store_favorite = useSelector(state => state);
    const dispatch = useDispatch();

    const [favorite, setFavorite] = useState([]);
    const [metric, setMetric] = useState(true);

    useEffect( () => {
        let { currentWeather : { celsius = true }, favorite : { items } } = store_favorite;
        setFavorite(items);
        setMetric(celsius);
    }, [store_favorite]);

    useEffect(() => {

        /*
        * asyncFunc - Called after mounted jsx, create new updated city data then feched for updated store
        */
        const asyncFunc = async () => {
            let favArray = jsonParseData(getLocalStorageData('favorite')) || [],
                newFavArray = [],
                cities = [];
            let newData = favArray.map(async (item, id) => {
                cities.push({key:item.key, CityData: item.CityData, img : item.img});
                const response = await fetch(currentconditions(item.key || item.data.key));
                return await response.json();
            });

            let asyncData = await newData;

            Promise.all(asyncData)
                .then((item) => {
                    item.map( (item, idx) => {
                        let objPos = cities[idx];
                        newFavArray.push( Object.assign({}, item[0], objPos))
                    });
                })
                .catch((e) => {
                    console.log(e);
                })
                .finally(function() {
                    if(newFavArray.length > 0) dispatch(updateFavorite(newFavArray));
                });

            return true;
        };

        asyncFunc();
    }, []);

    const handleCelsius = _ =>{
        dispatch(CurrentWeatherCelsius(!metric));
    }

    return (
        <>
            <Suspense fallback={<LoadingSpinner />}>
                <LayoutContent>
                    <div className={'favorite'}>
                        <div className={'title-container'}>
                            <h1>{FAVORITE_PAGE}</h1>
                        </div>
                        <div className={'gb-container flex'}>
                            {
                                favorite && favorite.map((item,i) => {
                                   return (
                                       <div key={item.CityData.selecity.LocalizedName} className={'container-wrap'}>
                                           <FavoriteComp
                                               item={item}
                                               metric={metric}
                                               onClickCelsius={handleCelsius}
                                           />
                                       </div>

                                   )
                                })
                            }

                        </div>
                    </div>
                </LayoutContent>
            </Suspense>
        </>
    );
}

export default Favorite;