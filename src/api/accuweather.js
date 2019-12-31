export const callAccuweatherApi = url => {
    return fetch(url)
        .then(response => response.json())
        .then(json => {
             return json;
        })
        .catch( error => {
            return false;
        });
}