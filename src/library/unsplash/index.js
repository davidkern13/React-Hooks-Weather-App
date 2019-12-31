import Unsplash from 'unsplash-js';

export const unsplashLib = _ => {

    var instance = null;

    if(!instance){
        instance = new Unsplash({ accessKey: 'd1e939f23ed64823c2f7106759fa15a9b2414794b88cb59e68859b70f13ec6e5' });
    }

    return instance;
}
