import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './searchBar';
import DarkMode from './DarkMode/darkswitch';

const Navbar = () => {
    return(
        <nav className='flexx items-center justify-between flex-wrap bg-gray-800 p-6 mb-2'>
            <div className='flex items-center flex-shrink-0 text-white mr-6'>
                <span className='font-bebas text-7xl tracking-tight ml-40 mr-52'>
                    <Link to="/"> MAKEDIE </Link> 
                </span>
                <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
                    <div className='text-sm lg:flex-grow '>
                        <Link to="/gaming" className="font-rubik block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4 text-xl"> Gaming </Link>
                        <Link to="/news" className='font-rubik block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4 text-xl'> News </Link>
                        <Link to="/hardware" className='font-rubik block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4 text-xl'> Hardware </Link>
                        <Link to="/anime" className='font-rubik block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4 text-xl'> Anime </Link>
                        <Link to="/meta" className='font-rubik block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4 text-xl'> Meta </Link> 
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