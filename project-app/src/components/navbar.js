import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className='navbar'>
            <Link to="/" className='logo'> MAKEDIE</Link>
            <div>
                <Link to="/gaming" className='nav-link'> Gaming </Link>
                <Link to="/news" className='nav-link'> News </Link>
                <Link to="/hardware" className='nav-link'> Hardware </Link>
                <Link to="/anime" className='nav-link'> Anime </Link>
                <Link to="/meta" className='nav-link'> Meta </Link>
            </div>
        </nav>
    )
};

export default Navbar;