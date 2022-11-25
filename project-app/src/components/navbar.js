import React from "react";
import './gaming';
import './news';
import './score';

const Navbar = () => {
    return(
        <div>
            <a style = {{ marginLeft: '40px', color: 'white' }} className="space" href="./gaming"> Gaming </a>
            <a style = {{ marginLeft: '40px', color: 'white' }} className="space" href="./news">  TechNews  </a>
            <a style = {{ marginLeft: '40px', color: 'white' }} className="space" href="./score">  Score </a>
        </div>
    );
};

export default Navbar;