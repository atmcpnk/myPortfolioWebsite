import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Footer from './Footer';

const Projects = () => {
    return (
        <>
            <div>
                <h1>projects 👨‍💻</h1>
                <div>
                    <h2>my portfolio site!</h2>
                    <p>this site was built by me utilizing a react framework.  </p>
                </div>
                <div>
                    <h2>infinite worlds</h2>
                    <p>infinite worlds is a side scrolling platformer game, similar to those we grew up with from the mid 1990's. built using phaser.js, this project was exceptionally challenging. As a team we worked together to make this idea come to life. splitting the project into four parts I was in charge of creating and designing the scenes before and after the main game, these are the title scene, loading screen, controller scene, game over, and credit scenes.</p>
                </div>
                <div>
                    <h2>gracebuster e-commerce</h2>
                    <p>project 3 description</p>
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </>
    )
};

export default Projects;