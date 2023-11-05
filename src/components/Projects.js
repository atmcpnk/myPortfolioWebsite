import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Footer from './Footer';

const Projects = () => {
    return (
        <>
            <div id='projects-ctr'>
                <h1 id='projects-title'>projects 👨‍💻</h1>
                <div id='project-card'>
                    <a href='https://lafw.net/' target="_blank" id='project-1-link'>
                    <h2 id='project-1-title'>LA Fashion Week Site</h2></a>
                    <p id='project-1-description'>A Fullstack site build for N4xtExperiences, owners of LA Fashion Week. Built using a Wordpress backend, and Elementor, HTML, CSS Front-end for a fast deployable, responsive and quick site. Working with teams cross functionally in social media marketing, project management, and business operations. On this team I was tasked with designing, building, and deploying the site, meeting strict deadlines with specific features such as a blog area, video blog area, content features of creatives at the event, and improving SEO performance. After designing and building this i moved into the maintenence and care role for the site and ensuring that all is working as expected. </p>
                </div>
                <div id='project-card'>
                    <a href='https://github.com/atmcpnk/myPortfolioWebsite' target="_blank" id='project-2-link'>
                    <h2 id='project-2-title'>my portfolio site!</h2></a>
                    <p id='project-2-description'>this site was built by me utilizing a react framework.  </p>
                </div>
                <div id='project-card'>
                    <a href='https://github.com/orgs/Infinite-Worlds-FSA/repositories' target="_blank" id='project-3-link'>
                    <h2 id='project-3-title'>infinite worlds</h2></a>
                    <p id='project-3-description'>infinite worlds is a side scrolling platformer game, similar to those we grew up with from the mid 1990's. built using phaser.js, this project was exceptionally challenging. As a team we worked together to make this idea come to life. splitting the project into four parts I was in charge of creating and designing the scenes before and after the main game, these are the title scene, loading screen, controller scene, game over, and credit scenes.</p>
                </div>
                <div id='project-card'>
                    <a href='https://github.com/orgs/GraceShopper-Team-GraceBuster/repositories' target="_blank" id='project-4-link'>
                    <h2 id='project-4-title'>gracebuster e-commerce</h2></a>
                    <p id='project-4-description'>"gracebuster" is a fullstack e-commerce site. Here we allow users to pick their favorite classic moview, add them to their cart or guest cart and checkout. Working with three other software engineering students, I was tasked with the front-end development, this includes file structuring, routing, component creation, and styling. Built in React.js and CSS to utilize reusable components and screen responsiveness respectively. </p>
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </>
    )
};

export default Projects;