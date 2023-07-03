import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
    return(
        <>
            <div>
                <main>
                    <h1 id="home-title">hello 👋</h1>
                    {/* selfie / headshot here offset to the side, maybe place this in a div */}
                    <h3>welcome to my site</h3>
                    <p>short bio on myself</p>
                </main>
            </div>
            <footer>
                <Footer />
            </footer>
        </>
    )
};

export default Home;