import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AutoComplete from '../../components/AutoComplete';

import { searchQuery, selectedWeaterItem } from '../../store/search/action';
import { requestApi } from '../../store/unsplash/action';

import './style.scss';

import { DEFAULT_LOCATION_VALUE, TRENDING, TITLE_SEARCH } from '../../enum/locations';

const Search = () => {
    const store_content = useSelector(state => state);
    const dispatch = useDispatch();

    const [autocomplete, setAutocomplete] = useState(false);
    const [query, setQuery] = useState('');
    const [complete, setComplete] = useState('');

    useEffect( () => {

        //store
        let { autocomplete : { data = []} } = store_content;

        const handleBodyClick = _ => {
            if (complete) setComplete(false);
        }
        //event
        document.addEventListener("click", handleBodyClick);
        setAutocomplete(data);
        return () => {
            document.removeEventListener("click", handleBodyClick);
        };
    }, [store_content]);

    const handleChange = e => {
        const { value } = e.target;

        setQuery(value);
        setComplete(true);
        dispatch(searchQuery(value));
    }

    const handleEnter = e =>{
        if (e.keyCode === 13) dispatch(requestApi());
    }

    const handleCustomSelect = value =>{
        setQuery(value);
        setComplete(true);
        dispatch(searchQuery(value));
    }

    const handleSelectAutoItem = useCallback(val => {
        let { LocalizedName = '' } = val;

        setQuery(LocalizedName);
        setComplete(false);
        dispatch(searchQuery(LocalizedName));
        dispatch(selectedWeaterItem(val));
    }, []);

    return (
      <div className={'search-container'}>
          <div className={'title-container'}>
              <h1>{TITLE_SEARCH}</h1>
          </div>
          <div className={'wrap-locations'}>
              <h4>{TRENDING}:</h4>
              {DEFAULT_LOCATION_VALUE.map( (item, idx) => <span key={idx} onClick={() => handleCustomSelect(item)}>{item}{DEFAULT_LOCATION_VALUE.length-1 !== idx ? ',' : ''}</span>)}
          </div>

          <input
              className="app-input"
              onChange={(e) => handleChange(e)}
              onKeyDown={(e) => handleEnter(e)}
              onClick={() => setComplete(true)}
              value={query}
              placeholder={'Search city'}
          />

          {
              complete
              ?
                  <AutoComplete
                      query={query}
                      data={autocomplete}
                      onClickItem={handleSelectAutoItem}
                  />
              :
                  <></>
          }

      </div>
    );
}

export default Search;