import styles from './HeroSection.module.scss';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Bienvenue sur le Token du Futur</h1>
        <p className={styles.subtitle}>Découvrez un monde de possibilités avec notre crypto-monnaie révolutionnaire.</p>
      </div>
      <div className={styles.imageWrapper}>
        {/* Remplacez 'path-to-your-image.png' par le chemin de votre image ou animation */}
        <Image src="/path-to-your-image.png" alt="Hero Image" width={500} height={300} />
      </div>
    </section>
  );
};

export default HeroSection;
