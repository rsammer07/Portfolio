import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link, Route, Routes } from 'react-router-dom';
import BasicButtonExample from './DropDownButton';


function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="">
      <Container>
        <Navbar.Brand href="#"> <Link to="/"><img className='logo' src={require('./Images/logo.jpg')} alt="logo"/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <NavLink className="mx-1"  to="/projects"><button class="btn-custom"> Projects </button></NavLink>
            <NavLink className="mx-1" to="/skills"> <button class="btn-custom"> Skills </button> </NavLink>
            <NavLink className="mx-1">
            <div className='collapsible'>
                <BasicButtonExample />
            </div>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;