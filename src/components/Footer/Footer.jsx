import React from "react";

import {Link} from 'react-router-dom';

import './footer.css';
 
export default function Footer () {
    return (
        <>
            <div className="footer">
                <div>
                    <p>©2022 HyperTech Learning Sol.</p>
                </div>
                <div className="footer__link">
                    <Link to='/archive'>Archive</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/order'>Order</Link>
                </div>
            </div>
        </>
    );
}
