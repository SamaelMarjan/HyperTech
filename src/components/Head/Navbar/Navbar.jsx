import React from "react";
import { Link } from "react-router-dom";

import './navbar.css';
 
export default function Navbar () {
    return (
        <>
            <div className="nav">
                <div className="nav__links">
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                            <Link to='/guide'>Learning Guide</Link>
                            <Link to='/projects'>Projects</Link>
                            <Link to='/templates'>Templates</Link>
                            <Link to='/tools'>Tools</Link>
                        </li>
                    </ul>
                </div>
                <div className="nav__social">
                    <p>Facebook</p>
                    <p>Linkedin</p>
                    <p>Github</p>
                    <p>Twitter</p>
                </div>
            </div>
        </>
    );
}
