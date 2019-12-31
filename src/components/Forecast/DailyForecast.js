import React from "react";
import propTypes from 'prop-types';

import {weatherIcon} from "../../library/accuweather";
import { itemData } from '../../utils';

const DailyForecastComp = ({ daily, metric }) =>{

    return (
        <>
            <div className={'daily-wrap'}>
                <div className={'title-wrap title-wrap-top'}><p>Week forecast</p></div>
                <ul>
                    {
                        daily.DailyForecasts !== undefined && daily.DailyForecasts.map((item, idx) => {

                            let dt = itemData(item.Date),
                                temperature = parseInt(item.Temperature.Maximum.Value) || 0;

                            return (
                                <li key={idx}>
                                    <div className={'other-info'}>
                                        <p className={'day'}>{dt.format('dddd')}</p>
                                        <p className={'date'}>{dt.format('DD.MM.YY')}</p>
                                        <img src={weatherIcon(item.Temperature.Maximum.UnitType)} alt={'weather icon'}/>
                                        <p className={'temp'}>
                                            { metric ? parseInt(temperature) : parseInt(temperature * 9 / 5 + 32) }
                                            <span> {item.Temperature.Maximum.Unit}</span>
                                        </p>
                                    </div>
                                </li>
                            )})
                    }
                </ul>
            </div>
            <div className={'title-wrap title-wrap-bottom'}>
                <p>*Prediction: {daily.Headline ? daily.Headline.Text : ''}</p>
            </div>
        </>
    );
}

DailyForecastComp.propTypes = {
    daily: propTypes.any,
    metric: propTypes.bool,
}

export default DailyForecastComp;