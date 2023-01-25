import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div>
            <li id="one">
                <Link to="/gaming"> Games </Link>
            </li>
            <li d="two">
                <Link to="/hardware"> Hardware </Link>
            </li>
            <li d="three">
                <Link to="/news"> News </Link>
            </li>
            <li d="four">
                <Link to="/anime"> Anime </Link>
            </li>
            <li d="five">
                <Link to="/meta"> Meta </Link>
            </li>
        </div>
    )
};

export default Navbar;