import React from 'react';
import Layout from '../components/Layout';
import * as styles from '../styles/index.module.css';
import { Button, Container, Card } from 'react-bootstrap';
import webm from '../../assets/videos/teaser.webm';
import mp4 from '../../assets/videos/teaser.mp4';
import { Link } from 'gatsby';
const info = [
    {
        date: 'Lördag 21/5 kl. 18:00 (Premiär)',
        link: 'https://fb.me/e/2iSu1o1xx',
    },
    {
        date: 'Söndag 22/5 kl. 13:00 (Matinén)',
        link: 'https://fb.me/e/bh4jJ7Ba1',
    },
    {
        date: 'Söndag 22/5 kl. 18:00 (Slasque)',
        link: 'https://fb.me/e/2jdiwpXps',
    },
];

// add attributes to video: autoPlay muted loop
// order: ogg, webm, mp4

const Home = () => {
    return (
        <Layout style={styles.test}>
            <div className={styles.videoContainer}>
                <video autoPlay muted loop width="100%" poster="">
                    <source src={webm}></source>
                    <source src={mp4}></source>
                </video>
            </div>
            <div className={styles.biljett}>
                <div className="d-grid gap-2 m-2">
                    <Button
                        href="https://www.google.com"
                        className="mx-5"
                        variant="success"
                        size="lg"
                    >
                        Skaffa biljetter till årets föreställningar
                    </Button>
                </div>
            </div>
            <Container fluid>
                <h1 class="text-center">
                    Kom och titta på våra föreställningar på Playhouse Teater:
                </h1>
                <div
                    style={{ display: 'flex', justifyContent: 'space-evenly' }}
                >
                    {/* <div style={{ display: 'flex', justifyContent: 'center' }}> */}
                    {info.map((elem) => {
                        return (
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>{elem.date}</Card.Title>
                                    <Card.Text></Card.Text>
                                    <Link to={elem.link}>
                                        <Button variant="primary">
                                            Till eventet
                                        </Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        );
                    })}
                </div>
            </Container>
            <Container>
                <h1 className={styles.testing}>På Västfronten Intet Spex</h1>
                <h4>eller</h4>
                <h3>Andra Sidan Är Ni Klara?</h3>

                <p>
                    Spexet tar oss till första världskriget, där två sidor möts.
                    Mer info kommer snart! Biljetterna släpps den 28:e april så
                    håll utkik!
                </p>
                <p>
                    Metaspexet är en en samproduktion av Datasektionen och
                    Sektionen för Medieteknik på KTH. Ett spex är en
                    teaterföreställning med inslag av improvisation och musikal.
                </p>

                <section></section>
            </Container>
        </Layout>
    );
};

export default Home;
