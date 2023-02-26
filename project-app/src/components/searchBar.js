import React, { useState } from 'react';

function SearchBar({ onSearch }){
    const [searchTerm, setSearchTerm] = useState('');

    const hanldeChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const hanldeSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    return(
        <form onSubmit={hanldeSubmit}>
            <input
                type="text"
                placeholder='Search...'
                value={searchTerm}
                onChange={hanldeChange} 
            />
            <button type='submit'> Search </button>
        </form>
    );
};

export default SearchBar;