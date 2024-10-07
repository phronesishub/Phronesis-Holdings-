import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import './HamburgerMenu.css'; // Ensure this CSS file is properly linked

const HamburgerMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState({ products: false, services: false });

    const toggleMenu = () => setMenuOpen(prev => !prev);
    const toggleDropdown = (dropdown) => setDropdownOpen(prev => ({ ...prev, [dropdown]: !prev[dropdown] }));

    return (
        <>
            <FontAwesomeIcon
                icon={faBars}
                className="hamburger-menu"
                onClick={toggleMenu}
            />
            <div className={`hamburger-menu-content ${menuOpen ? 'active' : ''}`}>
                <ul className="nav-menu">
                    <li>
                        <NavLink to="/" activeClassName="active-link" onClick={toggleMenu}>Home</NavLink>
                    </li>
                    <li className="dropdown">
                        <div onClick={() => toggleDropdown('products')}>
                            Products <FontAwesomeIcon icon={faCaretDown} />
                        </div>
                        {dropdownOpen.products && (
                            <ul className="dropdown-content">
                                <li><NavLink to="/metaa" onClick={toggleMenu}>Metaverse</NavLink></li>
                                <li><NavLink to="/cryptoa" onClick={toggleMenu}>Cryptocurrencies</NavLink></li>
                                <li><NavLink to="/aia" onClick={toggleMenu}>Artificial Intelligence</NavLink></li>
                            </ul>
                        )}
                    </li>
                    <li className="dropdown">
                        <div onClick={() => toggleDropdown('services')}>
                            Services <FontAwesomeIcon icon={faCaretDown} />
                        </div>
                        {dropdownOpen.services && (
                            <ul className="dropdown-content">
                                <li><NavLink to="/digital-asset-management" onClick={toggleMenu}>Digital Asset Management</NavLink></li>
                                <li><NavLink to="/advisory-and-consultancy" onClick={toggleMenu}>Advisory & Consultancy</NavLink></li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <NavLink to="/about-us" activeClassName="active-link" onClick={toggleMenu}>About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/henosis" activeClassName="active-link" onClick={toggleMenu}>Henosis Investment Group</NavLink>
                    </li>
                    <li>
                        <button className="btn-login" onClick={toggleMenu}>Get Started</button>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default HamburgerMenu;
