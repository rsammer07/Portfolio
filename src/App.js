import { NavLink, Link, Route, Routes } from 'react-router-dom';
import styled from "styled-components";
import './App.css';
import Projects from './Projects';
import Skills from './Skills';
import Intro from './Intro';
import BasicButtonExample from './DropDownButton';


// const NavUnlisted = styled.ul`
//   text-decoration: none;
//   `;

const linkStyle = {
  textDecoration: 'none'
}


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
        <Link to="/"><img className='logo' src={require('./Images/logo.jpg')} alt="logo"/></Link>
        <nav className="navbar">
        <NavLink activeclassname="active" to="/projects" style={linkStyle}><h3 className="text-link">Projects</h3></NavLink>
        <NavLink activeclassname="active" to="/skills" style={linkStyle}><h3 className="text-link">Skills</h3></NavLink>
        <div className='collapsible'>
          <BasicButtonExample />
        </div>
        </nav>
      </header>
      <main>
        {routes}
      </main>
      <footer>
      <p>© 2024 Ryan Sammer</p>
      </footer>
    </div>
  );
}

export default App;
