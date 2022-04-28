import React from 'react';
import { Container } from 'react-bootstrap';
import Layout from '../components/Layout';
import * as styles from '../styles/spexet.module.css';

const Spexet = () => {
    return (
        <Layout>
            <Container className={styles.childrenMargins}>
                <h1>Om föreställningen</h1>
                <p>
                    Ett världsomspännande krig. Två sidor. Miljontals liv på
                    spel. Genom en stor del av Frankrike, Tyskland och Belgien
                    har Västfronten bildats, ett dödläge av arméer som försöker
                    att avancera in mot varandra men till ingen nytta. På en
                    liten del av fronten finner vi soldater från bägge sidor som
                    börjar tröttna på kriget och den fruktansvärda tillvaro de
                    befinner sig i. Samtidigt håller generaler för bägge sidor
                    på att mynta nya planer för hur de ska ta kriget till nästa
                    nivå. Allt ställs på sin spets när ett knallrött plan
                    kraschlandar i ingenmanslandet mellan de två sidornas läger.
                    Vem är överlevaren och vad bär han på för avgörande
                    information?
                </p>
                <p>
                    METAspexet berättar en historia om politiska intriger,
                    kamratskap och de tokigheter som kan hända när två sidor
                    möts och lär sig om varandras likheter... Och olikheter.
                </p>
                <p>
                    2022 års METAspex,{' '}
                    <b>
                        På västfronten intet spex eller andra sidan, är ni
                        klara?
                    </b>{' '}
                    spelas upp på Playhouse Teater den 21:a och 22:a maj. Den
                    sista föreställningen, som kallas Slasque, skiljer sig från
                    de andra två föreställningarna i och med en gammal tradition
                    om att skoja med varandra mellan spexgrupperna under själva
                    föreställningen. Om ni endast tittar på den så får ni vara
                    beredda på att den blir något utöver det vanliga!
                </p>
            </Container>
        </Layout>
    );
};

export default Spexet;
