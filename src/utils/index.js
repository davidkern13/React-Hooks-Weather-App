import moment from 'moment';


/* MOMENT */

export const itemData = date => {
    return moment(date, "YYYY-MM-DD HH:mm:ss")
}


/*
* Parse json
* @param object
*/
export const jsonParseData = (data) => {
    return JSON.parse(data);
}

/*
* Stringify json
* @param object
*/
export const jsonStringify = (data) => {
    return JSON.stringify(data);
}

