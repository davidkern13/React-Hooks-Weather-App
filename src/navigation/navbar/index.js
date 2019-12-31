import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

import Swicher from '../../library/swicher';

function Navigation(){

    const [activeTab, setActiveTab] = useState('home');
    const nav_items = ['home', 'favorite'];

    return (
        <nav className={'navigation'}>
            <ul>
                <Swicher isChecked={false} />
            </ul>
            <div className="fill-remaining-space"></div>
            <ul>
                {nav_items.map(item =>
                    <li key={item} className={activeTab === item ? 'active' : ''} onClick={() => setActiveTab(item)}>
                        <Link to={item === 'home' ? '/' : item}>
                            {item}
                        </Link>
                    </li>)
                }
            </ul>

        </nav>
    )
}

export default Navigation;