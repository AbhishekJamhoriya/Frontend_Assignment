

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'

function Navbar() {


    return (
        <nav className='nav'>
            <ul>
                <li>
                    <a href="/">Form</a>
                </li>
                <li>
                    <a href="/Random_Number">Random_Number</a>
                </li>
                <li>
                    <a href="/Odd_Even">Odd_Even</a>
                </li>
                <li>
                    <a href="/fruit">Fruit</a>
                </li>
                <li>
                    <a href="/Toggle_Text">Toggle_Text</a>
                </li>
                <li>
                    <a href="/Image_Gallary">Image_Gallary</a>
                </li>
                <li>
                    <a href="/Background_Color_Change">Background_Color
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
