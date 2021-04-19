import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { UserContext } from '../../../App';
import './NavBar.css'
import { Link } from "react-router-dom";
import logoImg from '../../../images/logo.png'

const NavBar = () => {
    const [loggedInUser] = useContext(UserContext)
    let isSignedInUser = false;
    if (loggedInUser.name) {
        isSignedInUser = true
    }
    const { photoURL } = loggedInUser
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="nav-bg" variant="dark">
                <Navbar.Brand to="/home" className="mx-3"> <img src={logoImg} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className="mx-md-3 mx-auto text-white nav-btn" to="/home">Home</Link>
                        <Link className="mx-md-3 mx-auto text-white nav-btn" to="/about">About</Link>
                        <Link className="mx-md-3 mx-auto text-white nav-btn" to="/services">Projects</Link>
                        <Link className="mx-md-3 mx-auto text-white nav-btn" to="/dashboard">Dashboard</Link>
                        <Link className="mx-md-3 mx-auto text-white nav-btn" to="/admin">Admin</Link>

                        {
                            isSignedInUser ? <Link className="mx-md-3 mx-auto text-white px-3 " to="/login"><img className="sign-in-image" src={photoURL} alt="" /></Link> :
                                <Link className="mx-md-3 mx-auto text-white px-3 py-1 login" to="/Login">Login</Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;