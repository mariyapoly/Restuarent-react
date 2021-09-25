import React from 'react';
import './Header.css';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container">
                <a className="navbar-brand" href="/home">
                    <img src={logo} alt="site-logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">about us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">menu</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">blog</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;