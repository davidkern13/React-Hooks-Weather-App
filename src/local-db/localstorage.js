import { jsonStringify } from '../utils'

/*
* Set to localstorage selected item
* @param string
* @param object
*/
export const setLocalStorageData = (key, data) => {
    //set new local data
    localStorage.setItem(key, jsonStringify(data));
}


/*
* Get localstorage data by key
* @param string
* @return data
*/
export const getLocalStorageData = (key) => {
    return localStorage.getItem(key)
}


export const clearDb = _ => {
    return localStorage.clear();
}