import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';

import './style.scss';
import DailyForecastComp from '../../components/Forecast';


const DailyForecast = () => {

    const store_content = useSelector(state => state);

    const [daily, setDaily] = useState([]);
    const [metric, setMetric] = useState(true);

    useEffect( () => {
        //store
        let { daily : { forecast },  currentWeather : { celsius = true } } = store_content;
        setDaily(forecast[0] || forecast);
        setMetric(celsius);

    }, [store_content]);

    return (
        <div className={'daily-container'}>
           <DailyForecastComp
               daily={daily && daily.length === 0 ? {} : daily}
               metric={metric}
           />
        </div>
    )
}

export default DailyForecast