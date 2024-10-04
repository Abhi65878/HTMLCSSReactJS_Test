import React from 'react';
import './Main.css';
import MainImage from '/src/assets/MainImage.jpg'
const Main = () => {
    return (
        <section className="hero">
            <div className="overlay">
                <h1>The largest community of photo enthusiasts</h1>
                <button className="cta-button">Join Today</button>
            </div>
        </section>
    );
};

export default Main;
