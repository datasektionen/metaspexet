import React from 'react';
import * as styles from '../styles/footer.module.css';

const Footer = () => {
    return (
        <footer>
            <p className={styles.footerExample}>KONTAKT: <a href="mailto:direqtionen@metaspexet.se">direqtionen@metaspexet.se</a></p>
            <h2 className={styles.copy}>METAspexet 2022 &copy;</h2>
            <div className={styles.footerimg}><img className={styles.imgpad} src="http://placehold.jp/150x150.png"/> <img className={styles.imgpad} src="http://placehold.jp/150x150.png"/></div>
        </footer>
    );
};

export default Footer;
