import React from 'react';
import Layout from '../components/Layout';
import * as styles from '../styles/index.module.css';
import { StaticImage } from 'gatsby-plugin-image';

const Home = () => {
    return (
        <Layout style={styles.test}>
            <h1 className={styles.testing}>På Västfronten Intet Spex</h1>
            <h4>eller</h4>
            <h3>Teater med Soldater</h3>

            {/* <StaticImage
                src="https://www.historyonthenet.com/wp-content/uploads/2014/11/450223-M-0000R-001.jpg"
                alt="ww2 placeholder image"
            /> */}

            <StaticImage
                src="../../assets/images/temp-bg.jpg"
                alt="ww2 placeholder image"
            />
            <p>
                Första världskriget rasar för fullt. Det sägs att allt är
                tillåtet i krig och kärlek. Och det här är fan krig för hela
                slanten.
            </p>
            <p>
                Metaspexet är en en samproduktion av Datasektionen och Sektionen
                för Medieteknik på KTH. Ett spex är en teaterföreställning med
                inslag av improvisation av musikal.
            </p>
            <p>
                På Västfronten Intet Spex har föreställningar den n:te och m:te
                majuari.
            </p>
            <section></section>
        </Layout>
    );
};

export default Home;
