import React from 'react';
import styles from './Team.module.scss';

const Team = () => {
  const teamMembers = [
    {
      name: 'Alice Dupont',
      role: 'CEO',
      description: 'Spécialiste en blockchain avec plus de 10 ans d’expérience.',
      imageUrl: '/CEO.jpg' // Assurez-vous que cette image existe dans le dossier public/images
    },
    {
      name: 'Bob Martin',
      role: 'CTO',
      description: 'Passionné par la cryptographie et le développement durable.',
      imageUrl: '/CTO.jpg'
    },
    {
      name: 'Charlie Leroy',
      role: 'Lead Developer',
      description: 'Expert en smart contracts et en solutions décentralisées.',
      imageUrl: '/LeadDev.jpg'
    }
    // Ajoutez plus de membres si nécessaire
  ];

  return (
    <div className={styles.teamSection}>
      <h2>Rencontrez notre équipe</h2>
      <div className={styles.teamGrid}>
        {teamMembers.map(member => (
          <div key={member.name} className={styles.teamMember}>
            <img src={member.imageUrl} alt={member.name} className={styles.memberImage} />
            <h3>{member.name}</h3>
            <p className={styles.memberRole}>{member.role}</p>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
