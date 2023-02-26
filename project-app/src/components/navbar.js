import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className='bg-gray-800'>
            <div className='max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    <div className='flex-shrink-0'>
                        <Link to="/" className='font-impact-regular'> MAKEDIE </Link>            
                    </div>
                    <div className='hidden md:block'>
                        <div className='ml-10 flex items-baseline space-x-4'>
                            <Link to="/gaming" className='font-rubik text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'> Gaming </Link>
                            <Link to="/news" className='font-rubik text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'> News </Link>
                            <Link to="/hardware" className='font-rubik text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'> Hardware </Link>
                            <Link to="/anime" className='font-rubik text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'> Anime </Link>
                            <Link to="/meta" className='font-rubik text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'> Meta </Link>
                        </div>
                    </div>       
                </div>
            </div>
        </nav>
    )
};

export default Navbar;