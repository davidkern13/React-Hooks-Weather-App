import React, {useState, useRef, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import './style.scss';
import {themeFeed} from "../../store/theme/action";
import { jsonParseData } from '../../utils';
import { setLocalStorageData, getLocalStorageData } from '../../local-db/localstorage';

const Swicher = ({ isChecked }) => {

    const themeStore = useSelector(state => state.theme);
    const [theme, setTheme] = useState(getLocalStorageData('isDark'));
    const dispatch = useDispatch();
    const swicherRf = useRef(false);

    useEffect( () => {
        let { feed = false } = themeStore,
            newFeed = jsonParseData(feed);

        setTheme(newFeed);

        setThemeBody(newFeed);

        return () => {
            setThemeBody(newFeed);
        }
    }, [themeStore]);

    const handleCelsius = _ =>{
        const tm = !theme;
        setTheme(tm);
        setThemeBody(tm);
        dispatch(themeFeed(tm));
        setLocalStorageData('isDark', tm);
    }

    const setThemeBody = thm => {
        const bodyEl = document.querySelector('body');
        thm ? bodyEl.classList.add('dark') : bodyEl.classList.remove('dark');
    }

    return (
        <div className="switch-container">
            <label>
                <input  type="checkbox"  name={'swicher'} ref={swicherRf} checked={jsonParseData(theme) || false} onChange={ () => handleCelsius() } className={`${ theme ? 'light' : 'dark' } switch`}/>
                <div>
                    <div></div>
                </div>
            </label>
        </div>
    );
}

export default Swicher;
