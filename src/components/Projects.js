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
                    <p>This site was built by me utilizing a react framework.  </p>
                </div>
                <div>
                    <h2>project 2</h2>
                    <p>project 2 description</p>
                </div>
                <div>
                    <h2>project 3</h2>
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