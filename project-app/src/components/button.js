import React from 'react';

function buttonForm(){
    const handleClick = () => {
        window.open('/register', '_blank');
    };

    return(
        <button onClick={handleClick}> Login </button>
    )
}

export default buttonForm;