import React from "react";

import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Routes, Route, Links} from 'react-router-dom';

import './guide.css';
import About from '../About/About';
 
export default function Guide () {
    return (
        <>
            <div className="guide">
                <div className="guide__b1">
                    <div className="guide__b1-intro">
                        <h1>Tutorial: Intro to React</h1>
                        <p>This tutorial doesn’t assume any existing React knowledge.</p>
                    </div>
                    <div className="guide__b1-intro__t">
                        <h1>Before We Start the Tutorial</h1>
                        <p>We will build a small game during this tutorial. <b>You might be tempted to skip it because you’re not building games — but give it a chance.</b> The techniques you’ll learn in the tutorial are fundamental to building any React app, and mastering it will give you a deep understanding of React.</p>
                    </div>
                </div> 
                <div className="guide__side">
                    <Link to='/'>Before we start the tutorial</Link>
                    <Link to='/'>Before we start the tutorial</Link>
                    <Link to='/'>Before we start the tutorial</Link>
                </div>
            </div>
        </>
    );
}
