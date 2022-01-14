import React from 'react';

const Nav = () => {
    return (
        <>
        <nav>
            <div className='left-links'>
                <a href='/' id='logo-link' className='links'>sLABS</a>
            </div>
            <div className='right-links'>
                <a href='/projects' className='links'>PROJECTS</a>
            </div>
        </nav>
        </>
    )
};

export default Nav;