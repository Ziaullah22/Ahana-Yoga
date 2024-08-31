import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    const closeSearch = () => {
        setIsSearchOpen(false);
    };

    const toggleSideMenu = () => {
        setIsSideMenuOpen(!isSideMenuOpen);
    };

    const closeSideMenu = () => {
        setIsSideMenuOpen(false);
    };

    return (
        <div className='Navbar-body'>
            <nav className="navbar">
                <div className="logo">
                    <img src="\images\logo.png.webp" alt="Website Logo" />
                </div>
                <ul className="nav-buttons">
                    <li><a href="/">HOME</a></li>
                    <li><a href="/about">ABOUT</a></li>
                    <li>
                        <a href="/classes">CLASSES</a>
                        <ul className="dropdown-menu">
                            <li><a href="/classes">Our Classes</a></li>
                            <li><a href="/classes">Classes details</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="/trainers">TRAINERS</a>
                        <ul className="dropdown-menu">
                            <li><a href="/trainers">Our Trainers</a></li>
                            <li><a href="/trainers">Trainers details</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="/event">EVENTS</a>
                        <ul className="dropdown-menu">
                            <li><a href="/event">Our Event</a></li>
                            <li><a href="/event">Events details</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="/blog">BLOG</a>
                        <ul className="dropdown-menu">
                            <li><a href="/blog">Our Blogs</a></li>
                            <li><a href="/blog">Blogs details</a></li>
                        </ul>
                    </li>
                    <li><a href="/contact">CONTACTS</a></li>
                </ul>
                <div className="icons">
                    <div className="search-icon" onClick={toggleSearch}>
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                    <div className="bars-icon" onClick={toggleSideMenu}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>
            </nav>
            {isSearchOpen && (
                <div className="search-layer">
                    <div className="close-icon" onClick={closeSearch}>
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                    <input type="text" placeholder="Search..." className="search-input" />
                </div>
            )}
            <div className={`side-layer ${isSideMenuOpen ? 'open' : ''}`}>
                <div className="close-icon" onClick={closeSideMenu}>
                    <FontAwesomeIcon icon={faTimes} />
                </div>
                <div className="side-logo">
                    <img src="\images\logo-2.png.webp" alt="Website Logo" />
                </div>
                <div className="side-info">
                    <p>Ahana is a leading platform for innovative solutions and exceptional services.</p>
                </div>
                <div className="side-gallery">
                    <div className="row">
                        <div className="column">
                            <div className="image-container">
                                <img src="\images\1.jpg.webp" alt="Gallery Image 1" />
                                <div className="overlay">
                                    <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
                                    <p>Ahana.yoga</p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="image-container">
                                <img src="\images\2.jpg.webp" alt="Gallery Image 2" />
                                <div className="overlay">
                                    <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
                                    <p>Ahana.yoga</p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="image-container">
                                <img src="\images\3.jpg.webp" alt="Gallery Image 3" />
                                <div className="overlay">
                                    <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
                                    <p>Ahana.yoga</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column">
                            <div className="image-container">
                                <img src="\images\4.jpg.webp" alt="Gallery Image 4" />
                                <div className="overlay">
                                    <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
                                    <p>Ahana.yoga</p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="image-container">
                                <img src="\images\5.jpg.webp" alt="Gallery Image 5" />
                                <div className="overlay">
                                    <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
                                    <p>Ahana.yoga</p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="image-container">
                                <img src="\images\6.jpg.webp" alt="Gallery Image 6" />
                                <div className="overlay">
                                    <FontAwesomeIcon icon={faInstagram} className="instagram-icon" />
                                    <p>Ahana.yoga</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="email-container">
                    <input type="text" placeholder="Your Email" className="email-input" />
                    <FontAwesomeIcon icon={faTelegram} className="telegram-icon" />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
