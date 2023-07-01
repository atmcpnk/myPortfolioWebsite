import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';

// entry point for all component routes 

const Main = () => {
    return (
        <>
            <div id='nav-bar-ctr'>
                <nav id='nav-bar'>
                    {/* add NavLinks here for Home Page, services, About us, etc.. */}
                    <NavLink to='/'>
                    <h1>abraham flores</h1>
                    </NavLink>
                </nav>
                {/* add routes here for each of the above */}
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </div>
        </>
    );
};

export default Main;