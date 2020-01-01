const keyError = '';
const key = '';

export const geoposition = (lat, long) => {
    return 'https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=' + key + '&q=' + lat + '%2C' + long
}

export const currentconditions = city => {
    return 'https://dataservice.accuweather.com/currentconditions/v1/' + city + '?apikey=' + key + '&language=en-us&details=true'
}

export const daily = city => {
    return 'https://dataservice.accuweather.com/forecasts/v1/daily/5day/' + city + '?apikey=' + key + '&language=en-us&details=true&metric=true'
}

export const autocomplete = query => {
    return 'https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=' + key + '&q=' + query
}

export const weatherIcon = id => {
    return 'https://developer.accuweather.com/sites/default/files/' + (parseInt(id) < 10 ? '0'+id : id) + '-s.png';
}
