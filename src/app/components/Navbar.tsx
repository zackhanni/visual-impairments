"use client"

import Link from "next/link"
import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 100){
            setColor(true);
        } else {
            setColor(false);
        }
    };

    // window.addEventListener("scroll", changeColor);

    return (
        <div className="nav-header">
            <Link href="/">
                <h1>Visual Impairment Simulator</h1>
            </Link>
            <div className="nav-menu">
                <ul className={ click ? "nav-menu active" : "nav-menu"}>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/">Contact</Link>
                    </li>
                    <li>
                        <Link href="/">Try it out!</Link>
                    </li>
                </ul>
            </div>

            <div className="hamburger" onClick={handleClick}>
            { click ? (
            <FaTimes size={20} style={{ color: "white" }} />
            ) : (
            <FaBars size={20} style={{ color: "white" }} />
            )}

        </div>


        </div>

    )

}

export default Navbar