import React from "react";

import './header.css';

import {FaFacebookF, FaLinkedinIn, FaGithub, FaTwitter} from 'react-icons/fa';

export default function Header () {
    return (
        <>
            <div className="header">
                <div className="header__logo">
                    <h1>HyperTech Learning Sol.</h1>
                </div>
                <div className="header__social">
                    <FaFacebookF />
                    <FaLinkedinIn />
                    <FaGithub />
                    <FaTwitter />
                </div>
            </div>
        </>
    );
}
