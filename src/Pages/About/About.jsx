import React from "react";
 
import './about.css';

import {FaReact} from 'react-icons/fa';
import Body from "../../components/Content/Body/Body";
 
export default function About () {
    return (
        <>
        <div className="about">
            <div className="about__logo">
                <FaReact className="react" />
                <h1>React</h1>
            </div>
            <div className="about__text">
                <h2>What is React?</h2>
                <p>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.</p>
                
                <div className="about__button">
                    <div className="about__button-g">
                        <p>Get Started</p>
                    </div>
                    <div className="about__button-h">
                        <p>Take a tutorial</p>
                    </div>
                </div>
            </div>
            <Body />
        </div>
        <div className="about__card">
        </div>
        </>
    );
}
