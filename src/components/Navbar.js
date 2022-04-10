import React from 'react';
import * as styles from '../styles/navbar.module.css';
import { Link } from 'gatsby';

const Navbar = () => {
    return (
        <nav className={styles.links}>
            <h1>Hello world from navbar</h1>
            <Link to="/">Home</Link>
            <Link to="/about/index-about">About</Link>
            <Link to="/">test3</Link>
        </nav>
    );
};

export default Navbar;
