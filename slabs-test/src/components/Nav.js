import React from 'react';

const Nav = () => {
    return (
        <>
        <nav>
            <div className='left-links'>
                <a href='/' id='logo-link' className='links'>sLABS</a>
            </div>
            <div className='right-links'>
                <a href='/media' className='links'>MEDIA</a>
                <a href='/about' className='links'>ABOUT</a>
                <a href='/projects' className='links'>PROJECTS</a>
                <a href='/connect' className='links'>CONNECT</a>
            </div>
        </nav>
        </>
    )
};

export default Nav;