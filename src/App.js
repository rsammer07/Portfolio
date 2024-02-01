import { NavLink, Link, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

function App() {
  let routes = [
    
  ]
  return (
    <div className="App">
      <header>
        <img className='logo' src={require('./Images/logo.jpg')} alt="logo"/>
        <nav className="navbar">

        </nav>
      </header>
      <body>
        <div className='introduction'>
          <div className='title'>
          <h1>Ryan Sammer</h1>
          <h1>Full Stack Developer</h1>
          </div>
          <img className='portrait' src={require('./Images/headshot.jpg')} alt="portrait"/>
        </div>
      </body>
      <footer>
      <p>© 2024 Ryan Sammer</p>
      </footer>
    </div>
  );
}

export default App;
