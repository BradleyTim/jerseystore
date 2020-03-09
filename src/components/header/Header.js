import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
    return (
        <header className="sticky">
            <nav className="nav-bar">
                <h2 className="brand">
                    <Link className="title-link" to="/">Season Stock</Link>
                </h2>
                <ul className="menu">
                    <li className="menu-item">
                        <Link className="menu-item-link" to="/">Home</Link>
                    </li>
                    <li className="menu-item">
                        <Link className="menu-item-link" to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
