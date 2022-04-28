import React from 'react';
import Layout from '../components/Layout';
import * as styles from '../styles/index.module.css';
import { Button, Container, Card } from 'react-bootstrap';
import webm from '../../assets/videos/teaser.webm';
import mp4 from '../../assets/videos/teaser.mp4';
import { Link } from 'gatsby';
import poster from '../../assets/images/vastfronten-orange.jpg';
const info = [
    {
        date: 'Lördag 21/5 18:00 (Premiär)',
        link: 'https://fb.me/e/2iSu1o1xx',
    },
    {
        date: 'Söndag 22/5 13:00 (Matinén)',
        link: 'https://fb.me/e/bh4jJ7Ba1',
    },
    {
        date: 'Söndag 22/5 18:00 (Slasque)',
        link: 'https://fb.me/e/2jdiwpXps',
    },
];

const placeholder = poster;

// add attributes to video: autoPlay muted loop
// order: ogg, webm, mp4

const Home = () => {
    return (
        <Layout className={styles.background}>
            <div className={styles.background}>
                <div className={styles.videoContainer}>
                    <video
                        playsInline
                        autoPlay
                        muted
                        loop
                        width="100%"
                        poster={placeholder}
                    >
                        <source src={webm}></source>
                        <source src={mp4}></source>
                    </video>
                </div>
                <div className={styles.biljett}>
                    <div className="d-grid gap-2 m-2">
                        <Button
                            href="https://metaspexet.confetti.events"
                            className="mx-5"
                            variant="success"
                            size="lg"
                        >
                            Skaffa biljetter till årets föreställningar
                        </Button>
                    </div>
                </div>
                <Container fluid className={styles.cardTopMargin}>
                    <h3 class="text-center">
                        Kom och titta på våra föreställningar på Playhouse
                        Teater:
                    </h3>
                    <div className={styles.cardPos}>
                        {info.map((elem) => {
                            return (
                                <Card className={styles.background}>
                                    <div className={styles.background}>
                                        <Card.Body className={styles.card}>
                                            <Card.Text
                                                className={styles.dateMargin}
                                            >
                                                {elem.date}
                                            </Card.Text>
                                            <Link to={elem.link}>
                                                <Button className={styles.button}>
                                                    Till eventet
                                                </Button>
                                            </Link>
                                        </Card.Body>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </Container>
                <Container>
                    <section className={styles.textContainer}>
                        <div className={styles.textContainerRow}>
                            <h2 className={styles.title}>
                                PÅ VÄSTFRONTEN INTET SPEX
                            </h2>
                            <h4 className={styles.small}>ELLER</h4>
                            <h3 className={styles.middle}>
                                ANDRA SIDAN ÄR NI KLARA?
                            </h3>
                        </div>

                        <p>
                            Spexet tar oss till första världskriget, där två
                            sidor möts. Mer info kommer snart! Biljetterna
                            släpps den 28:e april så håll utkik!
                        </p>
                        <p>
                            Metaspexet är en en samproduktion av Datasektionen
                            och Sektionen för Medieteknik på KTH. Ett spex är en
                            teaterföreställning med inslag av improvisation och
                            musikal.
                        </p>
                    </section>
                </Container>
            </div>
        </Layout>
    );
};

export default Home;
