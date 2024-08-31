import React from 'react';
import './NavbarBackground.css';

const NavbarBackground = ({ heading, paragraph }) => {
    return (
        <div className="backgroundStyle">
            <div className="overlayStyle">
                <h1>{heading}</h1>
                <p>{paragraph}</p>
            </div>
        </div>
    );
};

export default NavbarBackground;
