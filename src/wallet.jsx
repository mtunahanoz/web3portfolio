import { AnchorProvider } from '@project-serum/anchor';

export const connectWallet = async (setWallet, fetchData) => {
  try {
    const response = await window.solana.connect();
    setWallet(response.publicKey.toString());
    console.log(response.publicKey.toString())
    fetchData();
  } catch (err) {
    console.error('Wallet connection failed', err);
  }
};

export const getProvider = (connection) => {
  if (window.solana && window.solana.isPhantom) {
    return new AnchorProvider(connection, window.solana, AnchorProvider.defaultOptions());
  } else {
    console.error('Phantom wallet not found. Please install Phantom wallet.');
    return null;
  }
};
