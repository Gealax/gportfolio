import React from 'react';
import "./index.css";
import Home from "./routes/Home";
import Skills from "./routes/Skills";
import Contact from "./routes/Contact";
import Project from './routes/Project';
import {Route,Routes} from "react-router-dom";

function App() {
    return (
        <>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/project" element={<Project/>}/>
              <Route path="/skills" element={<Skills/>}/>
              <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </>
    )
}
export default App;