'use clients'
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="C.png" alt="Logo" className={styles.logo} /> 
      <button className={styles.ctaButton}>Rejoignez-nous</button>
    </header>
  );
};

export default Header;
