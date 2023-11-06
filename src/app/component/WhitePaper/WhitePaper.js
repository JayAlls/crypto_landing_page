'use client'
import React from 'react'
import styles from './WhitePaper.module.scss';

const WhitePaper = () => {
  return (
        <div className={styles.whitepaper}>
            <h2>Livre Blanc du Projet ChainToken</h2>
            <p>
                Ce livre blanc présente une vue d'ensemble du Projet ChainToken, détaillant notre vision, notre architecture blockchain et les cas d'utilisation de notre token. Les points clés incluent :
                <ul>
                    <li>La problématique que le Projet ChainToken vise à résoudre.</li>
                    <li>Une description de la technologie sous-jacente et de son innovation.</li>
                    <li>Les détails sur la tokenomics, y compris l'offre totale et la stratégie de distribution.</li>
                    <li>La feuille de route du développement et les étapes futures.</li>
                    <li>Les informations sur l'équipe et les conseillers du projet.</li>
                </ul>
            </p>
            <button className={styles.downloadButton} onClick={() => alert("C'est un site d'exemple, pas de livre blanc réelle")}>
                Télécharger le Livre Blanc
            </button>
        </div>
  )
}

export default WhitePaper