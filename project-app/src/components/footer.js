import React from 'react'
import instagramLogo from './instagram.png';
import twitterLogo from './twitter.png';
import githubLogo from './github.png'
const Footer = () => {
    const year = new Date().getFullYear();
    
    return (
        <footer>
            <ul>
                <li>
                    <a href='https://github.com'>
                        <img src={githubLogo} alt='GitHub'></img> 
                    </a>
                </li>
                <li>
                    <a href='https://instagram.com'> 
                       <img src={instagramLogo} alt='Instagtam'></img> 
                    </a>
                </li>
                <li>
                    <a href='https://twitter.com'>
                        <img src={twitterLogo} alt='Twitter'></img>
                    </a>
                </li>
            </ul> 
            { year } 
        </footer>
    )
}

export default Footer;