import React from 'react';
import Header from './Navbar';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <main className="content"></main>
        </div>
    );
};

export default Layout;
