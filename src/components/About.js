import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Footer from './Footer';

const About = () => {
    return (
        <>
            <div id='about-ctr'>
                <div id='about-card'>
                    <h1 id='about-title'>about me 📝</h1>
                    <p id='about-bio'>Hello! My name is Abraham Flores, but you can call me Abe! I am based out of Los Angeles, California and am a full-stack software developer. I’ve spent the last few years studying Javascript in depth and working on projects on my own. Some of my favorite technologies to work with currently are Javascript, React.js, CSS, Node.js, Express.js, and postgreSQL to name a few.</p> <p id='about-bio'>

                    My passion for software engineering began several years ago when working at a tech start-up. When working cross-functionally with the engineering team I became enamored with the process of planning, designing, and writing code. Seeing the teams work together to engineer a tool into existence with code was something I found amazing. Since then I’ve gained experience and a growing understanding of PERN fullstack development, creating several projects, which can be found on my <NavLink to='/projects' id="about-bio-link"> projects </NavLink> page. 
                    </p>
                    <img id='single-headshot-img' src='/images/single_headshot.jpeg' alt='Abraham-Flores' />
                </div>
                <div id='hobbies-card'>
                    <h1 id='hobbies-title'>other than coding 🎸</h1>
                    <p id='hobbies-bio'>Outside of my passion for coding and software development, I am a musician and a big fan of bands like Van Halen, Led Zeppelin, blink 182, Turnstile, and many more. I currently play in a band called <a href='https://www.hvnted.com/' target="_blank" rel='noreferrer' id='hvnted-site-link'>Hvnted</a> (pronounced Hunted), I’d describe our sound as an alternative emo-rock with pop-punk roots. Find me on instagram <a href='https://instagram.com/abefloresguitar?igshid=MzRlODBiNWFlZA==' target="_blank" id='hvnted-site-link' rel='noreferrer'>@abefloresguitar</a>, my band <a href='https://www.instagram.com/hvntedband/?hl=en' target="_blank" id="about-bio-link" rel='noreferrer'>@hvntedband</a>, and check out our spotify, <a href='https://open.spotify.com/artist/4l3o69P5YjNNfqCVUsZHTg' target="_blank" id="about-bio-link" rel='noreferrer'>Hvnted</a>!</p> <p id='hobbies-bio'>

                    I’m a practitioner of brazilian jiu-jitsu, it’s an intense sport that requires lots of discipline, patience, understanding, and cardio! I have a history of playing many different sports starting with baseball, running cross-country and track, pole vaulting, and rowing in college. Overall, my favorite sport is brazilian jiu-jitsu, it’s a very humbling experience and there is a very small community where everyone wants to see eachother progress in the sport.</p> <p id='hobbies-bio'>

                    I also like playing games such as Counter Strike, Red Dead Redemption II, and Sid Meier’s Civilization VI to name a few! I jump around genres depending on how I feel, either competitive, relaxed, or strategic. 
                    </p>
                    <img id='shredding-img' src='/images/shredding_pic.jpg' alt='playing-guitar'/>
                </div>
                <img id="band-img" src='/images/band_in_line.jpeg' alt="band-pic"/>
                <div id='contact-card'>
                    <h1 id='contact-title'>contact me ✉️</h1>
                    <p id='contact-bio'>connect with me on <a href='https://www.linkedin.com/in/abrahamflores1/' target='_blank' rel='noreferrer' id='about-linkedin-link' >LinkedIn</a>, and find me on <a href='https://github.com/atmcpnk' target="_blank" rel='noreferrer' id='about-github-link'>GitHub</a>!</p>
                </div>
            </div>
            <footer id='footer-ctr'>
                <Footer />
            </footer>
        </>
    );
};

export default About;