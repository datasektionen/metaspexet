import React from 'react';
import Layout from '../components/Layout';
import * as styles from '../styles/about.module.css';

const About = () => {
    return (
        <Layout>
            <div className={styles.alignRow}>
                <h1>Om METAspexet</h1>
                <p>
                    METAspexet är ett spex (en teateruppsättning) gjord i
                    samarbete mellan Datasektionen och Medieteknik på KTH. Vi
                    består av ett stort antal grupper som tillsammans gör en sak
                    på ett bra sätt och med hjälp av varandra har vi till slut
                    en föreställning att presentera! Är du med i Datasektionen
                    eller Sektionen för Medieteknik är du välkommen att söka
                    spexet när vi rekryterar varje höst!
                </p>
            </div>
        </Layout>
    );
};

export default About;
