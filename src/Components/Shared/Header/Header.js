import React, { useState } from 'react';
import './Header.css';
import logo from '../../Images/game.png';
import user from '../../Images/user.jpg';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [active, setActive] = useState(false);

    const toggleMenu = () => {
        if (active) {
            setActive(false)
        } else {
            setActive(true)
        }
    }


    return (
        <div>

            {/*--------- Desktop View Nav --------------*/}

            <Navbar className='navbar web-c' variant="dark" fixed="top" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/"><img className='navbar-logo' src={logo} alt="" /> SELFTOP</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        />
                        <div className='action'>
                            <div className='profile' onClick={toggleMenu}>
                                <img src={user} alt="" />
                            </div>
                            <div style={{ borderRadius: '10px' }} className={active ? 'active' : 'menu'}>
                                <img style={{ width: '80px', borderRadius: '50%' }} src={user} alt="" />
                                <p>Nur Alom Islam</p>
                                <h6>User ID: ST-001</h6>
                                <NavLink to='/' className='view-profile-btn'>View Profile</NavLink>
                                <hr style={{ margin: '13px 0 0 0' }} />
                                <ul>
                                    <li><NavLink className='profile-nav' to="/"><i className="bi bi-wallet2"></i>My Wallet</NavLink></li>
                                    <li><NavLink className='profile-nav' to="/"><i className="bi bi-card-checklist"></i>My Order</NavLink></li>
                                    <li><NavLink className='profile-nav' to="/"><i className="bi bi-clock-history"></i>History</NavLink></li>
                                    <li><NavLink className='profile-nav' to="/"><i className="bi bi-box-arrow-right"></i>Logout</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/*------------ Mobile View Nav -------------------*/}

            <Navbar className='navbar web-m' variant="dark" fixed="top" expand="lg">
                <Container style={{ padding: '0px 21px' }} fluid>
                    <Navbar.Brand href="/"><img className='navbar-logo' src={logo} alt="" /> SELFTOP</Navbar.Brand>
                    <div style={{ fontSize: '25px' }}>
                        <i className="fa-solid fa-bag-shopping"></i>
                    </div>
                </Container>
            </Navbar>

            {/*----------- Mobile View Bottom Nav ---------------*/}

            <Navbar className='navbar web-m' variant="dark" fixed="bottom" expand="lg">
                <div className='navbar-bottom'>
                    <ul>
                        <li><i className="fa-solid fa-house"></i><p>Home</p></li>
                        <li><i className="fa-solid fa-gift"></i><p>Offers</p></li>
                        <li><i className="fa-solid fa-bolt-lightning"></i><p>TOP-UP</p></li>
                        <li><i className="fa-solid fa-user"></i><p>Account</p></li>
                    </ul>
                </div>
            </Navbar>
        </div>
    );
};

export default Header;