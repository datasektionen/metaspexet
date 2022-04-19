import React from 'react';
import * as styles from '../styles/navbar.module.css';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Container, DropdownButton, Navbar, Dropdown } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <Navbar bg="dark shadow p-3">
            <Container>
                <Navbar.Brand href="/">
                    <StaticImage
                        className={styles.logo}
                        src="../../assets/images/logga-vit.png"
                        placeholder="blurred"
                        alt="METAspexet"
                        layout="constrained"
                    />
                </Navbar.Brand>

                <Link to="/">Årets spex</Link>

                <DropdownButton
                    variant="dark"
                    id="dropdown-basic-button"
                    title="Tidigare spex"
                >
                    <Dropdown.Item href="#/action-1">
                        METAspexet 2015:
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                        METAspexet 2016:
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                        METAspexet 2017:
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-4">
                        METAspexet 2018:
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-5">
                        METAspexet 2019:
                    </Dropdown.Item>
                </DropdownButton>

                <Link to="/">Om METAspexet</Link>
                <Link to="/about">Grupperna</Link>

                <div></div>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
