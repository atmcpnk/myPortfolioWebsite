import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Footer from './Footer';

const Projects = () => {
    return (
        <>
            <div id='projects-ctr'>
                <h1 id='projects-title'>projects 👨‍💻</h1>
                <div id='project-card'>
                    <a href='https://github.com/atmcpnk/myPortfolioWebsite' target="_blank" id='project-1-link'>
                    <h2 id='project-1-title'>my portfolio site!</h2></a>
                    <p id='project-1-description'>this site was built by me utilizing a react framework.  </p>
                </div>
                <div id='project-card'>
                    <a href='https://github.com/orgs/Infinite-Worlds-FSA/repositories' target="_blank" id='project-2-link'>
                    <h2 id='project-2-title'>infinite worlds</h2></a>
                    <p id='project-2-description'>infinite worlds is a side scrolling platformer game, similar to those we grew up with from the mid 1990's. built using phaser.js, this project was exceptionally challenging. As a team we worked together to make this idea come to life. splitting the project into four parts I was in charge of creating and designing the scenes before and after the main game, these are the title scene, loading screen, controller scene, game over, and credit scenes.</p>
                </div>
                <div id='project-card'>
                    <a href='https://github.com/orgs/GraceShopper-Team-GraceBuster/repositories' target="_blank" id='project-3-link'>
                    <h2 id='project-3-title'>gracebuster e-commerce</h2></a>
                    <p id='project-3-description'>"gracebuster" is a fullstack e-commerce site. Here we allow users to pick their favorite classic moview, add them to their cart or guest cart and checkout. Working with three other software engineering students, I was tasked with the front-end development, this includes file structuring, routing, component creation, and styling. Built in React.js and CSS to utilize reusable components and screen responsiveness respectively. </p>
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </>
    )
};

export default Projects;