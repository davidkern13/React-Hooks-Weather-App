import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { initialStore } from "./store/index";

import * as serviceWorker from './serviceWorker';

import App from "./App";

import { item } from './json/selected-item';
import {searchQuery, selectedWeaterItem} from "./store/search/action";

const store = initialStore();

//dispatch default city from default value
store.dispatch(searchQuery(item.LocalizedName));
store.dispatch(selectedWeaterItem(item));

console.log('process.env.API_URL', process.env);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

serviceWorker.unregister();