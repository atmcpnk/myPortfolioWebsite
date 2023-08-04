import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Footer from './Footer';

const About = () => {
    return (
        <>
            <div>
                <div>
                    <h1>about me</h1>
                    <p>short bio on my experiences</p>
                </div>
                {/* picture here either below or to the right of the paragraph */}
                <div>
                    <h1>other than coding</h1>
                    <p>short bio on my hobbies</p>
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default About;