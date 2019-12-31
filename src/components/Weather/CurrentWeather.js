import React from "react";
import propTypes from 'prop-types';

import {bgItemCity} from '../../enum/backgrounds';
import {weatherIcon} from '../../library/accuweather';
import moment from 'moment';
const CurrentWeather = ({ bg, city, cityImg, weather, metric, onClickCelsius, onClickFavorite }) => {

    let cityImage = cityImg.results && Object.values(cityImg.results)[0],
        imgUrl = cityImg.length !== 0 ? cityImage.urls.regular : bgItemCity;

    return (
        <>
            <div className={'current-weather-wrap'}>
                <div className={'row'}>
                    <div className={'container-city-img'}>
                        <img src={imgUrl} alt={city}/>
                    </div>
                    <div className={'flex'}>
                        <div className={'title'}>
                            <h1>{city || `Tel Aviv`}</h1>
                            <div className={'sub-title'}>
                                <div className={'temperature'}>
                                    <p>
                                        {metric ? parseInt(weather.Temperature.Metric.Value) : parseInt(weather.Temperature.Imperial.Value)}
                                        <span className={metric ? 'active-symbol' : 'non'} onClick={() => onClickCelsius()}>{weather.Temperature.Metric.Unit}</span>
                                        <span>|</span>
                                        <span className={!metric ? 'active-symbol' : 'non'} onClick={() => onClickCelsius()}>{weather.Temperature.Imperial.Unit}</span>
                                    </p>
                                    <img src={weatherIcon(weather.WeatherIcon)} alt={'weather icon'}/>
                                </div>
                            </div>
                        </div>
                        <div className={'wrap-info'}>
                            <p className={'day'}>{moment(Date.now()).format('dddd')}, {moment(Date.now()).format('DD/MM/YY, HH:MM')}</p>

                            { weather.WeatherText &&
                                <p><span>Weather: </span>{weather.WeatherText}</p>
                            }

                            { weather.PrecipitationType &&
                                <p>, <span>Precipitation: </span>{weather.PrecipitationType}</p>
                            }

                        </div>
                    </div>
                    <div className="fill-remaining-space"></div>
                    <div className={'container-favorite'}>
                        <button onClick={() => onClickFavorite(weather, imgUrl)}>Add to Favorite</button>
                    </div>
                </div>
            </div>
        </>
    )
}

CurrentWeather.propTypes  = {
    bg: propTypes.object,
    city: propTypes.string,
    cityImg: propTypes.any,
    metric: propTypes.bool,
    onClickCelsius: propTypes.func,
    onClickFavorite: propTypes.func,
}

export default CurrentWeather;