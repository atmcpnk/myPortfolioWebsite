import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
    return(
        <>
            <div>
                <main>
                    <h1 id="home-title">abraham flores</h1>
                    <h3>fullstack developer</h3>
                    {/* <p>short bio on myself</p> */}
                </main>
            </div>
            <footer>
                <Footer />
            </footer>
        </>
    )
};

export default Home;