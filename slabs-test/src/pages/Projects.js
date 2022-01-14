import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {Grid, Cell } from 'react-foundation';

import './Projects.css'


const Projects = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        (async() => {
            setIsLoaded(false);
            const response = await fetch(`/projects`);
            const projectsList = await response.json();
            setProjects(projectsList.projects)
            setIsLoaded(true);
        })();
    }, [])

    return (
        <>
            <div className='project-wrapper'>
            <Grid className="display" id="projects-main">
                <Cell small={12} large={12}className="model-container">
                <h1>PROJECTS</h1>
                <div className='project-links'>
                    {projects.map(p => (
                        <Link to={`/projects/${p.id}`}>{p.name}</Link>
                    ))}
                </div>
                </Cell>
            </Grid>
            </div>
        </>
    )
};

export default Projects;