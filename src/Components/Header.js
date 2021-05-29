import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="/">HADER CORTES</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <Link class="nav-link" to="/contact">Contact</Link>
                <Link class="nav-link" to="/portfolio">Portfolio</Link>
                <Link class="nav-link" to="/resume">Resume</Link>
            </div>
        </div>
    </nav>
    );
};

export default Header;