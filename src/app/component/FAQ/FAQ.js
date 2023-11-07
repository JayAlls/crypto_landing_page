import React, { useState } from 'react';
import styles from './FAQ.module.scss';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: 'Quelle est la vision de notre projet blockchain ?',
      answer: 'Notre vision est de révolutionner la façon dont les transactions numériques sont effectuées à travers une plateforme sécurisée, transparente et décentralisée.',
    },
    {
      question: 'Comment notre token peut-il être utilisé ?',
      answer: 'Notre token peut être utilisé pour effectuer des transactions, participer à la gouvernance de la plateforme et accéder à des services exclusifs.',
    },
    {
      question: 'Quelles sont les mesures de sécurité prises pour protéger les investisseurs ?',
      answer: 'Nous utilisons la cryptographie de pointe et un modèle de consensus robuste pour assurer la sécurité et la fiabilité de notre plateforme.',
    },
    // Ajoutez plus de questions et réponses si nécessaire
  ];

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqSection}>
      <h2>FAQ</h2>
      <div className={styles.faqContainer}>
        {faqData.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <div className={styles.faqQuestion} onClick={() => toggleFAQ(index)}>
              {faq.question}
            </div>
            <div className={`${styles.faqAnswer} ${activeIndex === index ? styles.active : styles.desactive}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
