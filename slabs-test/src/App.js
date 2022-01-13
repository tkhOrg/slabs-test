import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from './components/Welcome';
import Nav from './components/Nav';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Client from "./components/Client";
import Agent from "./components/Agent";

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
            {clicked ? <Home/> :
              <Welcome enterClick={enterClick}/>
            }
            </>
          )}>
          </Route>
          <Route path="/projects" element={<Projects />}></Route>
        <Route path="/agent" element={<Agent/>} />
        </Routes>
      </BrowserRouter>
      <Client />
      {/* Email Modal */}
      {/* {Beautiful 3D HOME} */}
      {/* Footer */}
    </div>
  );
}

export default App;
