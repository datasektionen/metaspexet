import React from 'react';
import * as styles from '../styles/footer.module.css';
import datalogo from '../../assets/images/data-logo.png';
import medialogo from '../../assets/images/media-logo.png';
import spexlogo from '../../assets/images/logga-vit.png';

const Footer = () => {
    return (
        <footer>
            <div className={styles.logosMargin}>
                <div>
                    <img src={datalogo} />
                </div>

                <div>
                    <img src={spexlogo} />
                </div>

                <div>
                    <img src={medialogo} />
                </div>
            </div>

            <div>
                <p className={styles.contactEmail}>
                    <b>Kontakt</b> <br />
                    <a href="mailto:direqtionen@metaspexet.se" >
                        <div className={styles.mailText}>direqtionen@metaspexet.se</div>
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
