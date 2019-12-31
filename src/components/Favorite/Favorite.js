import React from "react";
import propTypes from 'prop-types';

import {weatherIcon} from "../../library/accuweather";
import moment from 'moment';

const Favorite = ({ item, metric, onClickCelsius }) => {

    return (
        <>
            <div className={'wrap'}>
                <div className={'weather-gradient'}>
                    <div className={'content'} style={{
                        backgroundImage: "linear-gradient( 135deg, rgb(114, 237, 242, 0.8) 10%, rgb(81, 81, 229, 0.9) 100%),url(" + item.img +")",
                    }}>

                        <div>
                            <p className={'city'}>{item.CityData.selecity.LocalizedName}</p>
                        </div>
                        <div className={'row'}>
                            <p className={'temperature'}>{metric ? parseInt(item.Temperature.Metric.Value) : parseInt(item.Temperature.Imperial.Value)}</p>
                            <span className={metric ? 'active-symbol' : 'non'} onClick={() => onClickCelsius()}>{item.Temperature.Metric.Unit}</span>
                            <span>|</span>
                            <span className={!metric ? 'active-symbol' : 'non'} onClick={() => onClickCelsius()}>{item.Temperature.Imperial.Unit}</span>
                            <img src={weatherIcon(item.WeatherIcon)} alt={'weather icon'}/>
                        </div>

                        <div>
                            <p className={'day'}>{moment(Date.now()).format('dddd')}, {moment(Date.now()).format('DD/MM/YY, HH:MM')}</p>
                        </div>

                        <div className={'other'}>
                            { item.WeatherText &&
                            <p><span>Weather: </span>{item.WeatherText}</p>
                            }

                            { item.PrecipitationType &&
                            <p><span>Precipitation: </span>{item.PrecipitationType}</p>
                            }
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}


Favorite.propTypes = {
    item: propTypes.object,
    metric: propTypes.bool,
    onClickCelsius: propTypes.func,
}

export default Favorite;