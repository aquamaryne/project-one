import React from "react";


const Navbar = () => {
    return(
        <div>
            <a style = {{ marginLeft: '40px', color: 'white' }} className="space" href="./gaming"> Games </a>
            <a style = {{ marginLeft: '40px', color: 'white' }} className="space" href="./news">  News  </a>
            <a style = {{ marginLeft: '40px', color: 'white' }} className="space" href="./anime"> Anime </a>
            <a style = {{ marginLeft: '40px', color: 'white' }} className="space" href="./hardware"> Hardware </a>
            <a style = {{ marginLeft: '40px', color: 'white' }} className="space" href="./topone"> Top 100 </a>
        </div>
    );
};

export default Navbar;