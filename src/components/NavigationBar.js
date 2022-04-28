import React from 'react';
import * as styles from '../styles/navbar.module.css';

import { StaticImage } from 'gatsby-plugin-image';
import { Container, Navbar, Nav } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark shadow p-3">
            <Container className={styles.navBrand}>
                <Navbar.Brand href="/">
                    <StaticImage
                        className={styles.logo}
                        src="../../assets/images/logga-vit.png"
                        placeholder="blurred"
                        alt="METAspexet"
                        layout="constrained"
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className={styles.navbarItems}>
                        {/*
                        <Nav.Link to="/">Årets spex</Nav.Link>
                        <NavDropdown
                            id="collapsible-nav-dropdown"
                            title="Tidigare spex"
                            style={{ marginLeft: '20px' }}
                            menuVariant="dark"
                        >
                            <Dropdown.Item href="/past-spex/metaspexet-2015">
                                METAspexet 2015:
                            </Dropdown.Item>
                            <Dropdown.Item href="/past-spex/metaspexet-2016">
                                METAspexet 2016:
                            </Dropdown.Item>
                            <Dropdown.Item href="/past-spex/metaspexet-2017">
                                METAspexet 2017:
                            </Dropdown.Item>
                            <Dropdown.Item href="/past-spex/metaspexet-2018">
                                METAspexet 2018:
                            </Dropdown.Item>
                            <Dropdown.Item href="/past-spex/metaspexet-2019">
                                METAspexet 2019:
                            </Dropdown.Item>
                            <Dropdown.Item href="/past-spex/metaspexet-2020">
                                METAspexet 2020:
                            </Dropdown.Item>
                            <Dropdown.Item href="/past-spex/metaspexet-2021">
                                METAspexet 2021:
                            </Dropdown.Item>
                        </NavDropdown> */}
                        {/* 
                        <Nav.Link href="/groups">Grupperna</Nav.Link> */}
                        {/* <Nav.Link href="/">Programblad</Nav.Link> */}
                        <Nav.Link href="/about">Om METAspexet</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
