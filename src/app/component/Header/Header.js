'use client'
import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import styles from './Header.module.scss';

const Header = () => {
  const [userAddress, setUserAddress] = useState('');

  useEffect(() => {
    return () => {
      setUserAddress("");
    }
  }, [])

  async function connectWallet() {
    if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
      try {
        const web3 = new Web3(window.ethereum);
        // Demande à MetaMask l'autorisation de se connecter
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        if (accounts.length > 0) {
          setUserAddress(accounts[0]);
        }
      } catch (error) {
        console.error('Erreur lors de la connexion :', error);
      }
    } else {
      alert('Veuillez installer MetaMask!');
    }
  }

  const disconnectWallet = () => {
    setUserAddress(''); // Réinitialise l'adresse de l'utilisateur, ce qui "déconnecte" l'utilisateur dans l'UI
  };

  return (
    <header className={styles.header}>
      <img src="/C.png" alt="Logo" className={styles.logo} />
      {userAddress ? (
        <>
          <span>{userAddress.substring(0, 6)}...{userAddress.substring(userAddress.length - 4)}</span>
          <button onClick={disconnectWallet} className={styles.ctaButton}>
              Disconnect Wallet
          </button>
        </>
      ) : (
        <button onClick={connectWallet} className={styles.ctaButton}>
          Connect Wallet
        </button>
      )}
    </header>
  );
};

export default Header;
