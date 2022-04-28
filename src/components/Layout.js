import React from 'react';
import Header from './Header';
import Footer from './Footer';
import * as styles from '../styles/layout.module.css';

const Layout = ({ children }) => {
    return (
        <div className={styles.background}>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
