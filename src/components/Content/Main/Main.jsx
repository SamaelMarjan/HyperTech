import React from "react";
 
import './main.css';
import Body from '../Body/Body';
import Sidebar from '../Sidebar/Sidebar';
 
export default function Main () {
    return (
        <>
            <div className="main">
                <Body />
                <Sidebar />
            </div>
        </>
    );
}
