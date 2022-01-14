import React, { Suspense, useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Cell } from 'react-foundation';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, ContactShadows, useGLTF } from "@react-three/drei";
import iddrisAura from '../models/iddrisaura.glb';
import lightfieldImage from '../images/lightfield.jpeg';

import './Projects.css';
function Model (props){
    const { nodes, materials } = useGLTF(iddrisAura)
    const ref = useRef()
    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        ref.current.rotation.z = 0 - (1 + Math.sin(t / 1.5)) / 20
        ref.current.rotation.x = Math.cos(t / 4) / 6
        ref.current.rotation.y = Math.sin(t / 4) / 6
        ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
      })
    return(
    <group ref={ref} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Beard_5.geometry}
        material={nodes.Beard_5.material}
        position={[0.21, -64.46, -16.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Eyebrows_1.geometry}
        material={nodes.Eyebrows_1.material}
        position={[-0.17, 34.15, 19.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Nose_1.geometry}
        material={nodes.Nose_1.material}
        position={[-0.17, -5.56, 27.12]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Retopo_Null_2.geometry}
        material={nodes.Retopo_Null_2.material}
        position={[-0.17, -29.2, 19.3]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Regular.geometry}
        material={nodes.Regular.material}
        position={[-0.16, 22.87, -46.83]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mouth_1.geometry}
        material={nodes.Mouth_1.material}
        position={[-0.22, -44.98, 13.3]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Eyes_1.geometry}
        material={nodes.Eyes_1.material}
        position={[-0.17, 14.44, 19.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hair_16.geometry}
        material={nodes.Hair_16.material}
        position={[0.87, 72.74, -34.52]}
      />
    </group>
  )
}

useGLTF.preload(iddrisAura);

const Project = () => {
  const { projectId } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [myProject, setMyProject] = useState([]);

    useEffect(() => {
        (async() => {
            setIsLoaded(false);
            const response = await fetch(`/projects/${projectId}`);
            const project = await response.json();
            setMyProject(project.project)
            setIsLoaded(true);
        })();
    }, [])
    return (
        <div className='project-wrapper'>
            <Grid className="display">
                {(projectId == 1) ?
                  (
                    <Cell small={12} large={6} className="model-container">
                      <Canvas pixelRatio={[1, 1]} camera={{ position: [0, 0, 50], fov: 35, zoom: 1.0, near: 1, far: 1000 }}>
                          <directionalLight position={[10, 10, 5]} intensity={1.5} />
                          <ambientLight intensity={0.5} />
                          <Suspense fallback={null}>
                              <Model scale={[0.1, 0.1, 0.1]} />
                          </Suspense>
                          <OrbitControls enableZoom={false}/>
                      </Canvas>
                    </Cell>
                  )
                :
                  (
                  <Cell small={12} large={6} className="model-container">
                      <img src={lightfieldImage}></img>
                    </Cell>
                  )
                }      
                <Cell small={12} large={6} className='project-info'>
                    <h1>{myProject.name}</h1>
                    <h3>THE WEARABLE INTERNET.</h3>
                    <div className='project-links'>
                        <a href='https://thewearableinternet.com/' className='links'>link</a>
                        <a href='https://thewearableinternet.com/' className='links'>discord</a>
                    </div>
                </Cell>
            </Grid>
        </div>
    )
};

export default Project;