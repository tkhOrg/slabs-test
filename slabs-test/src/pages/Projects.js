import React from 'react';
import {Link} from 'react-router-dom';
import {Grid, Cell } from 'react-foundation';

import './Projects.css'


const Projects = () => {

    return (
        <>
            <div className='project-wrapper'>
            <Grid className="display" id="projects-main">
                <Cell small={12} large={12}className="model-container">
                <h1>PROJECTS</h1>
                <div className='project-links'>
                    <Link to={'/projects/1'} className='links projects-link'>LNQ</Link>
                    <Link to={'/projects/2'} className='links projects-link'>LightField</Link>
                </div>
                </Cell>
            </Grid>
            </div>
        </>
    )
};

export default Projects;