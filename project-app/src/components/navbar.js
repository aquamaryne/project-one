import React from "react";
// import Gaming from './gaming';
// import News from './news';
// import Score from './score';

const Navbar = () => {
    return(
        <div>
            <a className="space" href="./gaming"> Gaming </a>
            <a className="space" href="./news">  News  </a>
            <a className="space" href="./score">  Score   </a>
        </div>
    );
};

export default Navbar;