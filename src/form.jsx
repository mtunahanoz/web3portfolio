import { Keypair, SystemProgram } from '@solana/web3.js';
import { Program } from '@project-serum/anchor';
import { db } from './config';
import idl from "./idl.json";

export const handleSubmit = async (data, provider, wallet, programID, fetchData) => {
  const { education, certificate, experience } = data;
  if (!provider) {
    console.error('Provider is not available.');
    return;
  }

  try {
    const dataAccount = Keypair.generate();
    const program = new Program(idl, programID, provider);

    // Verileri JSON formatına dönüştür
    const educationJSON = JSON.stringify(education);
    const certificateJSON = JSON.stringify(certificate);
    const experienceJSON = JSON.stringify(experience);

    // Akıllı sözleşmeye JSON string olarak gönder
    const tx = await program.methods
      .addData(educationJSON, certificateJSON, experienceJSON)
      .accounts({
        dataAccount: dataAccount.publicKey,
        user: provider.wallet.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .signers([dataAccount])
      .rpc();

    // Verileri ilgili koleksiyonlara ayırarak kaydet
    if (educationJSON) {
      await db.collection('education').add({
        wallet,
        education: educationJSON,
        txHash: tx,
      });
    }
    if (certificateJSON) {
      await db.collection('certificate').add({
        wallet,
        certificate: certificateJSON,
        txHash: tx,
      });
    }
    if (experienceJSON) {
      await db.collection('experience').add({
        wallet,
        experience: experienceJSON,
        txHash: tx,
      });
    }

    alert('Data successfully submitted!');
    fetchData(); // Yeni verileri yüklemek için yeniden veri çekin
  } catch (err) {
    console.error('Transaction failed', err);
  }
};
