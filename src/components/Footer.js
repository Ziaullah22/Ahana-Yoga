import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import './Footer.css'; // Import the CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    {/* First Column */}
                    <div className="column">
                        <img src="\images\logo-3.png.webp" alt="Logo" className="logo" />
                        <p>Ahana Yoga offers a serene escape from the daily grind.</p>
                        <p><FaPhone color='#f65d5d' fontSize={20} /> Phone: (965) 436 3274</p>
                        <p><FaEnvelope color='#f65d5d' fontSize={20} /> Email: <a href="mailto:ahana.yoga@gmail.com" className="link">ahana.yoga@gmail.com</a></p>
                        <p><FaMapMarkerAlt color='#f65d5d'fontSize={20} /> Map: 184 Main Collins Street</p>
                    </div>

                    {/* Second Column */}
                    <div className="column">
                        <h3 className="heading">COMPANY</h3>
                        <ul className="list">
                            <li><a href="#" className="link">Online Education</a></li>
                            <li><a href="#" className="link">Gallery</a></li>
                            <li><a href="#" className="link">Special Issues</a></li>
                            <li><a href="#" className="link">Privacy Policy</a></li>
                            <li><a href="#" className="link">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Third Column */}
                    <div className="column">
                        <h3 className="heading">ABOUT US</h3>
                        <ul className="list">
                            <li><a href="#" className="link">Our Vision</a></li>
                            <li><a href="#" className="link">Our Mission</a></li>
                            <li><a href="#" className="link">Meet The Team</a></li>
                            <li><a href="#" className="link">Introduce</a></li>
                            <li><a href="#" className="link">Customer Service</a></li>
                        </ul>
                    </div>

                    {/* Fourth Column */}
                    <div className="column">
                        <h3 className="heading">OPEN TIME</h3>
                        <p><FaClock color='#f65d5d'fontSize={20} /> Mon - Fri: 6:30am - 07:45pm</p>
                        <p><FaClock color='#f65d5d' fontSize={20} /> Sat - Sun: 8:30am - 05:45pm</p>
                        <div className="email-signup">
                            <input type="email" placeholder="Your Email" className="email-input" />
                            <button className="email-button">Subscribe</button>
                        </div>
                    </div>
                </div>

                {/* Copyright Row */}
                <div className="bottom-row">
                    <div className="social-media">
                        <a href="#" className="icon"><FaFacebookF /></a>
                        <a href="#" className="icon"><FaTwitter /></a>
                        <a href="#" className="icon"><FaLinkedinIn /></a>
                        <a href="#" className="icon"><FaInstagram /></a>
                    </div>
                    <p className="copy-right">Copyright ©2024 All rights reserved | This template is made with <a href="#" className="link">by Colorlib</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
