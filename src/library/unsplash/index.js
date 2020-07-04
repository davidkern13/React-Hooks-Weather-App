import Unsplash from 'unsplash-js';

export const unsplashLib = _ => {

    var instance = null;

    if(!instance){
        instance = new Unsplash({ accessKey: 'key' });
    }

    return instance;
}
