import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

const Home = () => {
    return(
        <>
            <div>
                <main>
                    <h1 id="home-title">hello 👋</h1>
                    {/* selfie / headshot here offset to the side, maybe place this in a div */}
                    <h3>welcome to my site</h3>
                </main>
            </div>
        </>
    )
};

export default Home;