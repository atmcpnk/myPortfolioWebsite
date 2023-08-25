import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Footer from './Footer';

const About = () => {
    return (
        <>
            <div id='about-ctr'>
                <div id='about-card'>
                    <h1 id='about-title'>about me 📝</h1>
                    <p id='about-bio'>short bio on my experiences</p>
                </div>
                {/* picture here either below or to the right of the paragraph */}
                <div id='hobbies-card'>
                    <h1 id='hobbies-title'>other than coding 🎸</h1>
                    <p id='hobbies-bio'>short bio on my hobbies</p>
                </div>
                <div id='contact-card'>
                    <h1 id='contact-title'>contact me ✉️</h1>
                    <p id='contact-bio'>connect with me on <a href='https://www.linkedin.com/in/abrahamflores1/' target='_blank' rel='noreferrer' id='about-linkedin-link' >LinkedIn</a>!</p>
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default About;