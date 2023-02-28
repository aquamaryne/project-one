import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './searchBar';
import DarkMode from './DarkMode/darkswitch';

const Navbar = () => {
    return(
        <nav className='flexx items-center justify-between flex-wrap bg-gray-800 p-6'>
            <div className='flex items-center flex-shrink-0 text-white mr-6'>
                <span className='font-bebas text-7xl tracking-tight ml-40 mr-52'>
                    <Link to="/"> MAKEDEATH </Link> 
                </span>
                <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
                    <div className='text-sm lg:flex-grow '>
                        <Link to="/DarkSouls" className="font-rubik block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4 text-xl"> DarkSouls </Link>
                        <Link to="/DarkSoulsII" className='font-rubik block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4 text-xl'> Dark Souls II </Link>
                        <Link to="/DarkSoulsIII" className='font-rubik block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4 text-xl'> Dark Souls III </Link>
                        <Link to="/Bloodborne" className='font-rubik block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4 text-xl'> Bloodborne </Link>
                        <Link to="/EldenRing" className='font-rubik block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4 text-xl'> Elden Ring </Link> 
                    </div>
                    <div className='mt-4 lg:mt-0 mr-10'>
                        <DarkMode />
                    </div>
                    <div className='mt-4 lg:mt-0'>
                        <SearchBar />
                    </div>
                </div>
            </div>  
        </nav>
    )
};

export default Navbar;