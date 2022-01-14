import React from 'react';
import {Grid, Cell } from 'react-foundation';
import iddris_sandu from '../images/iddris_sandu.png'

import './Home.css'

const Home = () => {
    return (
        <div className='home-wrapper'>
            <Grid className="display">
                <Cell small={6} large={7}>
                    <img src={iddris_sandu}/>
                </Cell>
                <Cell small={4} large={5} className='home-info'>
                    <h1>EMPOWER YOUR IDEAS.</h1>
                    <h3>The tech incubator building tools for the metaverse.</h3>
                </Cell>
            </Grid>
            {/* scroll to see */}
        </div>
    )
};

export default Home;