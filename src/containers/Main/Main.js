import React, { Suspense, lazy } from 'react';

import LoadingSpinner from '../../library/loading';

const Search = lazy(() => import('../Search'));
const CurrentWeather = lazy(() => import('../../containers/Weather'));
const DailyForecast = lazy(() => import('../../containers/Forecast'));
const LayoutContent = lazy(() => import('../../layout'));

const Main = () => {

    return (
        <>
            <Suspense fallback={<LoadingSpinner />}>
                <LayoutContent>
                    <Search />
                    <CurrentWeather />
                    <DailyForecast />
                </LayoutContent>
            </Suspense>
        </>
    );
}

export default Main;