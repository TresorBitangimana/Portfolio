
import './App.css'

import Home from './Home/Home';
import Projects from "./Projects/Projects"
import About from './About/About';
import Contacts from './Contacts/Contacts';


import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {

  return (
    <Router >

      <nav className="navagation" id="navagation">
        <div className="logo-container" id="logo-container">
          <h1 className="logo" id="logo">Tresor bitangimana</h1>
        </div>
        <div className="navagation-paths">
          <Link className="paths" to="/">Home</Link>
          <Link className="paths" to="/Projects/Projects">Projects</Link>
          <Link className="paths" to="/About/About">About</Link>
        </div>
        <div className="contacts-container" id="contacts-container">
            <Contacts />
        </div>
      </nav>


      <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/Projects/Projects" element={<Projects />}>Projects</Route>
        <Route path="/About/About" element={<About />}>About</Route>
      </Routes>
    </Router>
  )
}

export default App
