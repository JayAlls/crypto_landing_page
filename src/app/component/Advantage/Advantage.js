// components/Advantages.js
import styles from './Advantage.module.scss';

const Advantages = () => {
  return (
    <section className={styles.tokenAdvantages}>
      <div className={styles.container}>
        <h2 className={styles.title}>Avantages du ChainToken</h2>
        <div className={styles.advantagesGrid}>
          {/* Vous pouvez répéter AdvantageItem pour chaque avantage */}
          <AdvantageItem
            icon="/icons/securite.png"
            title="Sécurité"
            description="Transactions sécurisées et cryptées pour garantir la confidentialité."
          />
          <AdvantageItem
            icon="/icons/speed.png"
            title="Vitesse"
            description="Transferts rapides et efficaces à l'échelle mondiale."
          />
          <AdvantageItem
            icon="/icons/gas.png"
            title="Frais Réduits"
            description="Frais de transaction minimes par rapport aux systèmes traditionnels."
          />
          <AdvantageItem
            icon="/icons/recompense.png"
            title="Récompenses"
            description="Programme de fidélité et récompenses pour les détenteurs de tokens."
          />
        </div>
      </div>
    </section>
  );
};

const AdvantageItem = ({ icon, title, description }) => {
  return (
    <div className={styles.advantageItem}>
      <img src={icon} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Advantages;
