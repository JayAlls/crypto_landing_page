'use clients'
import styles from './HeroSection.module.scss';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Bienvenue sur le <span>Token</span> du Futur</h1>
        <p className={styles.subtitle}>Découvrez un monde de possibilités avec notre crypto-monnaie révolutionnaire.</p>
      </div>
      <div className={styles.imageWrapper}>
      <img src="/C.png" alt="Logo" />
      </div>
    </section>
  );
};

export default HeroSection;
