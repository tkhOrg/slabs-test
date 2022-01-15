import React from 'react';
import {Link} from 'react-router-dom';
import {Grid, Cell } from 'react-foundation';
import Card from '../components/Card';
import LnqLogo from "../images/LNQ_logo.png";
import LightField from "../images/A.45.jpg";
import './Projects.css'


const Projects = () => {

    return (
        <>
            <div className='project-wrapper'>
            <Grid className="display" id="projects-main">
                <Cell small={12} large={12}className="model-container">
                <h1>PROJECTS</h1>
                <div className='project-links'>
                    <Grid className='link-grid'>
                        <Link to='/projects/1'>
                            <span className="card" style={{"display": "block"}}>
                                <Card
                                    key="the wearable internet."
                                    hexa='#0155fd'
                                    title='LNQ.'
                                    description="the wearable internet."
                                    image={LnqLogo}
                                />
                            </span>
                        </Link>
                        <Link to='/projects/2'>
                            <span className="card" style={{"display": "block"}}>
                                <Card
                                    key="see, touch, and experience."
                                    hexa="#000000"
                                    title="LightField"
                                    description="see, touch, and experience."
                                    image={LightField}
                                />
                            </span>
                        </Link>
                    </Grid>
                </div>
                </Cell>
            </Grid>
            </div>
        </>
    )
};

export default Projects;