import React, { Suspense, useState } from 'react';
import {Grid, Cell } from 'react-foundation';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import slabs3D from '../models/slabs.fbx';
import EmailModal from'../components/EmailModal';

import './Home.css';
function Model (){
    const fbx = useLoader(FBXLoader, slabs3D)
    return <primitive object={fbx}/>
}

const Home = () => {
    const [showModal, setShowModal] = useState(true);

  const openModal = () => {
    setShowModal(prev => !prev)
  }
    return (
        <div className='home-wrapper'>
            {showModal ? <EmailModal setShowModal={setShowModal}/>
            : null}
            <Grid className="display">
                <Cell small={12} large={12} className="model-container">
                    <Canvas pixelRatio={[1, 1]} camera={{ position: [0, 0, 400], fov: 35, zoom: 1.3, near: 1, far: 1000 }}>
                        <directionalLight position={[10, 10, 5]} intensity={1.5} />
                        <ambientLight intensity={0.5} />
                        <Suspense fallback={null}>
                            <Model position-y={-0.5} scale={[0.2, 0.2, 0.2]} />
                        </Suspense>
                        <OrbitControls autoRotate enableZoom={false}/>
                    </Canvas>
                </Cell>
                <Cell small={12} large={12} className='home-info'>
                    <h1>EMPOWER YOUR IDEAS.</h1>
                    <h5>the tech incubator building tools for the metaverse.</h5>
                </Cell>
            </Grid>
        </div>
    )
};

export default Home;