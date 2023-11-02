import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/path-to-your-logo.png" alt="Logo" className={styles.logo} /> 
      <button className={styles.ctaButton}>Rejoignez-nous</button>
    </header>
  );
};

export default Header;
