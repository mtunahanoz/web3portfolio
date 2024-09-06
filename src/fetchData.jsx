import { PublicKey, Connection } from '@solana/web3.js';
import { Program } from '@project-serum/anchor';
import { db } from './config';
import idl from "./idl.json";

// Verileri almak için collectionName ve wallet bilgilerini kullanarak
export const fetchCollectionData = async (collectionName, provider, connection, programID, wallet, setData) => {
  if (!provider || !connection) {
    console.error('Provider or connection is not available.');
    return;
  }
  
  console.log('Fetching data for wallet:', wallet);

  try {
    // 'wallet' bir string olmalı ve sorgularda doğru kullanılmalı
    const snapshot = await db.collection(collectionName)
      .where('wallet', '==', wallet)  // Burada wallet'ı doğru türde geçiyoruz
      .get();

    const items = snapshot.docs.map(doc => doc.data());

    const dataList = await Promise.all(
      items.map(async (item) => {
        try {
          // getTransaction yerine getConfirmedTransaction kullanmayı deneyin
          const transactionDetails = await connection.getTransaction(item.txHash, { commitment: 'confirmed' });

          if (!transactionDetails) {
            console.error('Transaction not found for hash:', item.txHash);
            return null;
          }

          const affectedAccounts = transactionDetails.transaction.message.accountKeys;

          const program = new Program(idl, programID, provider);
          const accountDataList = await Promise.all(
            affectedAccounts.map(async (accountPublicKey) => {
              try {
                const accountInfo = await program.account.dataAccount.fetch(new PublicKey(accountPublicKey));
                return { publicKey: accountPublicKey.toString(), data: accountInfo };
              } catch (err) {
                console.error('Failed to fetch account data for key:', accountPublicKey, err);
                return null;
              }
            })
          );

          return {
            txHash: item.txHash,
            wallet: item.wallet,
            accounts: accountDataList.filter(Boolean),
          };
        } catch (err) {
          console.error('Failed to fetch transaction details or account data:', err);
          return null;
        }
      })
    );

    setData(dataList.filter(Boolean));
  } catch (err) {
    console.error('Error fetching data:', err);
  }
};
