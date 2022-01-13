import React from 'react';
import arrow from '../images/arrow.png'

const Welcome = ({enterClick}) => {
    return (
        <>
            <div className="welcome">
                <div id="welcome-wrapper" onClick={() => {enterClick(true)}}>
                    <div id="s">
                        <span>spatial</span>
                    </div>
                    <div id="labs">LABS</div>

                    <p>Enter <img src={arrow} alt="arrow"/></p>
                </div>
            </div>
        </>
    )
};

export default Welcome;
