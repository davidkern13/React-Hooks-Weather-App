import React, {Suspense, lazy} from 'react';
import './style.scss';

import LoadingSpinner from '../library/loading';
const Navigation = lazy(() => import('../navigation/navbar'));

function LayoutContent(props){

    return (
        <div className={'layout-container'}>
            <Suspense fallback={<LoadingSpinner />}>
                <div className={'main-wrap'}>
                    <Navigation />
                    <div className={'content-container'}>
                        <div className={'component-content'}>
                            {props.children}
                        </div>
                    </div>
                </div>
            </Suspense>
        </div>
    )
}

export default LayoutContent;