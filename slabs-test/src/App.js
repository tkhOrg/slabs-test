import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from './components/Welcome';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Client from "./components/Client";
import Agent from "./components/Agent";
import Project from "./pages/Project";

const App = () => {
  const [clicked, setClicked] = useState(false);
  
  const enterClick = () => {
    setClicked(!clicked)
    console.log(clicked);
  }

  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={(
            <>
            {clicked ? (
              <>
                <Home/>
                <Client/>
              </>
            ) :
              <Welcome enterClick={enterClick}/>
            }
            </>
          )}>
          </Route>
          <Route path="/projects" element={(<>
            <Projects />
            <Client/>
          </>)}></Route>
          <Route path="/projects/:projectId" element={(<>
            <Project />
            <Client/>
          </>)}></Route>
          <Route path="/agent" element={<Agent/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
      {/* Email Modal */}
    </div>
  );
}

export default App;
