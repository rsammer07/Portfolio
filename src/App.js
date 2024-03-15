import { NavLink, Link, Route, Routes } from 'react-router-dom';
import styled from "styled-components";
import './App.css';
import Projects from './Projects';
import Skills from './Skills';
import Intro from './Intro';
import BasicButtonExample from './DropDownButton';
import NavBarComponent from './NavBarComponent';


function App() {
  let routes = (
    <Routes>
    <Route path='/' element={< Intro />}/>
    <Route path="/projects" element={<Projects />}/>
    <Route path="/skills" element={<Skills />}/>
    </Routes>
  )


  return (
    <div className="App">
      <header>
        {/* <NavUnlisted /> */}
        <NavBarComponent />
      </header>
      <main>
        <div class="container">
          {routes}
        </div>
      </main>
      <footer>
      <p>© 2024 Ryan Sammer</p>
      </footer>
    </div>
  );
}

export default App;
