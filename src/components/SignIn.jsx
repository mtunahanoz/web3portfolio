import React, { useState } from 'react';
import { Connection, PublicKey, clusterApiUrl, TransactionInstruction, Keypair } from '@solana/web3.js';
import { sendAndConfirmTransaction } from '@solana/web3.js';

function App() {
  const [employer, setEmployer] = useState('');
  const [applicant, setApplicant] = useState('');
  const [details, setDetails] = useState('');

  const sendTransaction = async () => {
    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
    const programId = new PublicKey('<PROGRAM_ID>'); // Deploy ettiğiniz programın ID'sini buraya ekleyin
    const employerPublicKey = new PublicKey(employer);
    const applicantPublicKey = new PublicKey(applicant);

    const instruction = new TransactionInstruction({
      keys: [
        { pubkey: employerPublicKey, isSigner: true, isWritable: false },
        { pubkey: applicantPublicKey, isSigner: false, isWritable: false },
      ],
      programId,
      data: Buffer.from(details),
    });

    const transaction = await connection.getRecentBlockhash()
      .then(({ blockhash }) => {
        return {
          recentBlockhash: blockhash,
          feePayer: employerPublicKey,
          instructions: [instruction],
        };
      });

    const signature = await sendAndConfirmTransaction(
      connection,
      transaction,
      [Keypair.fromSecretKey(new Uint8Array())], // İşverenin private keyini buraya ekleyin
    );

    console.log('Transaction signature', signature);
  };

  return (
    <div>
      <h2>Görüşme Kaydet</h2>
      <input 
        placeholder="İşveren Public Key" 
        value={employer} 
        onChange={e => setEmployer(e.target.value)} 
      />
      <input 
        placeholder="İşe Başvuran Public Key" 
        value={applicant} 
        onChange={e => setApplicant(e.target.value)} 
      />
      <textarea 
        placeholder="Görüşme Detayları" 
        value={details} 
        onChange={e => setDetails(e.target.value)} 
      />
      <button onClick={sendTransaction}>Kaydet</button>
    </div>
  );
}

export default App;
