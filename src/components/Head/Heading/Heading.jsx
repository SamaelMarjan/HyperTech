import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
 
import './heading.css';
 
export default function Heading () {
    return (
        <div className="heading">
            <Header />
            <Navbar />
        </div>
    );
}
