import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
    return(
        <>
            <div>
                <main id="home-ctr">
                    <h1 id="home-title">abraham flores</h1>
                    <h3 id="position-title">fullstack developer</h3>
                    <p id="home-bio">I am a firm believer in solutions through software development, 
                    recently diving into the world of Artificial Intelligence solutions. 
                    With my experience in dynamic start-up environments, adaptability, 
                    and the enjoyment of learning new languages, tools, processes, I
                     am enthusiastically seeking new challenges to meet these wants and leverage my passions. 
                     If you want to get to know me better, visit 
                     my <NavLink to='/about' id="about-bio-link"> about </NavLink> page! </p>
                </main>
            </div>
            <footer>
                <Footer />
            </footer>
        </>
    )
};

export default Home;