import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './style.scss';

import { CurrentWeatherCelsius } from '../../store/current-weather/action';
import { setToFavorite } from '../../store/favorite/action';
import DailyForecastComp from '../../components/Weather';
import Modal from '../../library/modal';
import ModalComp from '../../components/Modal';

const CurrentWeather = () => {

    const store_content = useSelector(state => state);
    const dispatch = useDispatch();

    const [weather, setWeather] = useState([]);
    const [selecity, setSelecity] = useState([]);
    const [metric, setMetric] = useState(true);
    const [bg, setBg] = useState(true);
    const [cityImg, setCityImg] = useState(true);
    const [isModalOpen, toggleModal] = useState(false);

    useEffect( () => {

        //store
        let { currentWeather : { data = [], celsius = true, error }, unsplash, search : { selectedItem } } = store_content;

        setWeather(data[0] || data);
        setMetric(celsius);
        setBg(unsplash);
        setSelecity(selectedItem);

        toggleModal(!error);

        if(unsplash){
            setCityImg(unsplash);
        }

    }, [store_content]);

    const handleCelsius = _ =>{
        dispatch(CurrentWeatherCelsius(!metric));
    }

    const toggleModalClick = e => {
        toggleModal(e);
    }

    /*
     * handleCheckFavorite - check item if favorited
     */
    const handleCheckFavorite = (e, imgUrl) => {
        let obj = {CityData : {selecity}},
            favObject = Object.assign({}, e,  obj, {key : selecity.Key}, { img : imgUrl} );

        dispatch(setToFavorite(favObject));
    }

    return (
        <>
            {isModalOpen &&
                <Modal isOpen={isModalOpen} >
                    <ModalComp showHideModal={toggleModalClick}/>
                </Modal>
            }

             <div className={'weather-container'}>
                 {weather.length !== 0 &&
                   <DailyForecastComp
                       bg={bg}
                       city={selecity.hasOwnProperty('LocalizedName') ? selecity.LocalizedName : 'City'}
                       cityImg={cityImg.hasOwnProperty("data") ? cityImg.data : false}
                       weather={weather}
                       metric={metric}
                       onClickCelsius={handleCelsius}
                       onClickFavorite={handleCheckFavorite}
                   />
                 }

                 <div className={'other-days-weather-wrap'}>

                 </div>
             </div>
        </>
    )
}

export default CurrentWeather;