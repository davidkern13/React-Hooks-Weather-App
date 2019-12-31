import React from 'react'

import {BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../containers/Main';
import Favorite from '../containers/Favorite';

function CustomRoute(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path={"/favorite"} component={Favorite}/>
            </Switch>
        </BrowserRouter>
    )
}
export default CustomRoute;