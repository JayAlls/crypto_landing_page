import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        <a href="#!" className={styles.socialLink}>Twitter</a>
        <a href="#!" className={styles.socialLink}>Facebook</a>
        <a href="#!" className={styles.socialLink}>LinkedIn</a>
        <a href="#!" className={styles.socialLink}>GitHub</a>
        <a href="#!" className={styles.socialLink}>Telegram</a>
      </div>
      <div className={styles.copyRight}>
        © 2023 ChaintToken - JayS. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
