import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">HADER CORTES</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link className="nav-link" to="/portfolio">Portfolio</Link>
                <Link className="nav-link" to="/resume">Resume</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
            </div>
        </div>
    </nav>
    );
};

export default Header;