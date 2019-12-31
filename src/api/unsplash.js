import { toJson } from 'unsplash-js';
import { unsplashLib } from '../library/unsplash/index';


export const callUnsplashApi = query => {

    return unsplashLib().search.photos(query + ' city', 1, 1, { orientation: "landscape" })
        .then(toJson)
        .then(json => {
            return json;
        })
        .catch( err => {
            return err;
        });

}