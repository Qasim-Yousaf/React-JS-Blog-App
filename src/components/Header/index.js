import React from 'react';
import './style.css';

const Header = props => {
    return (
        <header className="header">
            <nav className="headerMenu">

                <a href="#">HOME</a>
                <a href="#">ABOUT US</a>
                <a href="#">CONTACT US </a>

            </nav>
            <div className="soical-media">
                soical Media Icons
            </div>
        </header>
    );
}

export default Header;