import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="layout debug">
            <Header />
            <main className="content debug">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
