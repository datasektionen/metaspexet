import React from 'react';
import * as styles from '../styles/navbar.module.css';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const Navbar = () => {
    return (
        <nav className={styles.links}>
            <Link className={styles.logo} to="/">
                <StaticImage
                    className={styles.logo}
                    src="../../assets/images/logo/logga-svart.png"
                    placeholder="blurred"
                    alt="metaspexet"
                    layout="constrained"
                />
            </Link>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/">test3</Link>
        </nav>
    );
};

export default Navbar;
