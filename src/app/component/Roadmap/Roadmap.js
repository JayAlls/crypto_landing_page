'use client'
import React from 'react';
import styles from './Roadmap.module.scss';

const Roadmap = () => {
  const roadmapStages = [
    {
      title: 'Q1 2023',
      content: 'Lancement de la plateforme et premières adoptions.',
    },
    {
      title: 'Q2 2023',
      content: 'Introduction des fonctionnalités de staking.',
    },
    {
      title: 'Q3 2023',
      content: 'Mise en place de partenariats stratégiques.',
    },
    {
      title: 'Q4 2023',
      content: 'Expansion internationale et nouvelles mises à jour.',
    },
  ];

  return (
    <div className={styles.roadmap}>
      <h2>Roadmap du Projet ChainToken</h2>
      <div className={styles.timeline}>
        {roadmapStages.map((stage, index) => (
          <div key={index} className={styles.stage}>
            <div className={styles.stageContent}>
              <h3>{stage.title}</h3>
              <p>{stage.content}</p>
            </div>
            <div className={styles.stageConnector}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
