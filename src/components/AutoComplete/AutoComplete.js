import React from "react";
import propTypes from 'prop-types';

import './style.scss';
import LoadingSpinner from '../../library/loading';

const AutoComplete = ({ query, data, onClickItem }) =>{

    return (
        <div className={'autocomplete-container'}>
            <div className={'wrap-title'}><p>Autocomplete</p></div>
            <ul>
                {
                    data.length > 0
                    ?
                    data && data.map((item, idx) => {
                    return (
                        <li key={idx} onClick={() => onClickItem(item)}>
                            <p>{item.LocalizedName} <span>{item.Country.LocalizedName}</span></p>
                        </li>
                    )})
                    :
                   <LoadingSpinner />
                }
            </ul>
        </div>
    );
}

AutoComplete.propTypes = {
    query: propTypes.string,
    data: propTypes.array,
    onClickItem: propTypes.func,
}

export default AutoComplete;