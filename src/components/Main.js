import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';

// entry point for all component routes 

const Main = () => {
    return (
        <>
            <div id='nav-bar-ctr'>
                <nav id='nav-bar'>
                    {/* add NavLinks here for Home Page, services, About us, etc.. */}
                    <NavLink to='/'>
                    <h1>a.f.</h1>
                    </NavLink>
                    <NavLink to='/projects'>projects</NavLink>
                </nav>
                {/* add routes here for each of the above */}
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/projects' element={<Projects />} />
                </Routes>
            </div>
        </>
    );
};

export default Main;