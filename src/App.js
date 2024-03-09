import { NavLink, Link, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Projects from './Projects';
import Skills from './Skills';
import Intro from './Intro';
import Contact from './Contact';
import Collapsible from './Dropdown';
import BasicButtonExample from './DropDownButton';

function App() {
  let routes = (
    <Routes>
    <Route path='/' element={< Intro />}/>
    <Route path="/projects" element={<Projects />}/>
    <Route path="/skills" element={<Skills />}/>
    <Route path="/contact" element={<Contact />}/>
    </Routes>
  )


  return (
    <div className="App">
      <header>
        <Link to="/"><img className='logo' src={require('./Images/logo.jpg')} alt="logo"/></Link>
        <nav className="navbar">
        <NavLink activeclassname="active" to="/projects"><h3 className="text-link">Projects</h3></NavLink>
        <NavLink activeclassname="active" to="/skills"><h3 className="text-link">Skills</h3></NavLink>
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
