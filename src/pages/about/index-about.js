import React from 'react';
import Layout from '../../components/Layout';
import * as styles from '../../styles/index-about.module.css';

const About = () => {
    const groups = [
        'Squådis',
        'Chefsgruppen',
        'Dirrarna',
        'Ekonomi',
        'Synk',
        'Kören',
        'Bygg',
        'Dans',
        'Rekvisita',
        'Fotofilm',
        'Kostym',
        'Lyrique',
        'Ljud & ljus',
        'Arr',
        'Orquestern',
        'Manus',
        'Sminq',
        'Grafik',
        'Webb',
        'Spexm',
    ];
    return (
        <Layout>
            <div className={styles.indexabout}>
                {groups.map((groups) => (
                    <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/22/Attributed_to_Jacob_Hoefnagel_-_Gustavus_Adolphus%2C_King_of_Sweden_1611-1632_-_Google_Art_Project.jpg" />
                        {groups}
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default About;
