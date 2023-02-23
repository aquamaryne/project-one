import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/gaming"> Games </Link>
                </li>
                <li>
                    <Link to="/hardware"> Hardware </Link>
                </li>
                <li>
                    <Link to="/news"> News </Link>
                </li>
                <li>
                    <Link to="/anime"> Anime </Link>
                </li>
                <li>
                    <Link to="/meta"> Meta </Link>
                </li>
            </ul>
        </nav>
        <Outlet />
        </>
    )
};

export default Navbar;