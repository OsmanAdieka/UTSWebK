import React from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skill from "./Pages/Skill";
import Hobby from "./Pages/Hobby";
 
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/About" element={<About />}/>
                <Route path="/Hobby" element={<Hobby />} />
                <Route path="/Skill" element={<Skill />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}
 
export default App;