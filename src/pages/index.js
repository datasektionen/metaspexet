import React from 'react';
import Layout from '../components/Layout';
import * as styles from '../styles/index.module.css';
import { StaticImage } from 'gatsby-plugin-image';

const Home = () => {
    return (
        <Layout>
            <h1>På Västfronten Intet Spex</h1>
            <StaticImage src="https://placekitten.com/800/600" alt="A kitten" />
            <p>Beskrivning på spexet.</p>
            <section></section>
        </Layout>
    );
};

export default Home;
