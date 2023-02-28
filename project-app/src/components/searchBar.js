import React, { useState } from 'react';

function SearchBar({ onSearch }){
    const [searchTerm, setSearchTerm] = useState('');

    const hanldeChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const hanldeSubmit = () => {
        onSearch(searchTerm);
    };

    return(
        <form onSubmit={hanldeSubmit} className='flex items-center'>
            <input
                type="text"
                placeholder='Search...'
                value={searchTerm}
                onChange={hanldeChange} 
                className='w-full px-4 py-2 text-gray-900 bg-gray-100 rounded-md focus:ring-2 focus:ring-blue-500 focus:bg-white'
            />
        </form>
    );
};

export default SearchBar;