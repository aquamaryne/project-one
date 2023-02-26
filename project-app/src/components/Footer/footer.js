import React from 'react'
import instagramLogo from './instagram.png';
import twitterLogo from './twitter.png';
import githubLogo from './github.png';

const Footer = () => {

    return (
        <footer className='bg-gray-800 text-white'>
            <div className='container mx-auto flex justify-between items-center py-6'>
                <ul className='flex items-center'>
                    <li className='mr-6'>
                        <a href='https://github.com'>
                            <img src={githubLogo} alt='GitHub' className='h-8 w-8'></img> 
                        </a>
                    </li>
                    <li className='mr-6'>
                        <a href='https://instagram.com'> 
                            <img src={instagramLogo} alt='Instagtam' className='h-8 w-8'></img> 
                        </a>
                    </li>
                    <li className='mr-6'>
                        <a href='https://twitter.com'>
                            <img src={twitterLogo} alt='Twitter' className='h-8 w-8'></img>
                        </a>
                    </li>
               </ul> 
            </div>
        </footer>
    )
}

export default Footer;