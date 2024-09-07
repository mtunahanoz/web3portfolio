import { Connection, PublicKey, SystemProgram } from '@solana/web3.js';
import { Program } from '@project-serum/anchor';
import idl from '../idl.json'; // Replace with your own IDL
import { getProvider } from '../wallet';
import { db, programID } from '../config';

export const connectWallet = async () => {
  try {
    const response = await window.solana.connect();
    console.log("Wallet connected: ", response.publicKey.toString());
    return response.publicKey;
  } catch (err) {
    console.error('Wallet connection failed', err);
    throw new Error('Wallet connection failed');
  }
};

export const handleAdd = async (collection, formData) => {
  try {
    // Initialize connection to the Solana network
    const connection = new Connection('https://api.devnet.solana.com', 'confirmed');

    // 1. Add to Firebase
    await db.collection(collection).add(formData);
    alert("Başarıyla eklendi!");

    // 2. Connect wallet and get provider
    const walletPublicKey = await connectWallet();
    const provider = getProvider(connection);
    if (!provider) {
      throw new Error('Provider is null');
    }

    const program = new Program(idl, programID, provider);

    // Generate the PDA (Program Derived Address) for the data account
    const [dataAccount] = await PublicKey.findProgramAddress(
      [walletPublicKey.toBytes()], // Use toBytes() instead of toBuffer()
      programID
    );

    let tx;

    // Convert formData to a byte array
    const formDataString = JSON.stringify(formData);
    const formDataBuffer = Buffer.from(formDataString, 'utf-8');

    console.log("Sending data (as bytes): ", formDataBuffer);

    if (collection === "education") {
      tx = await program.rpc.addEducation(formDataBuffer, {
        accounts: {
          dataAccount,
          user: walletPublicKey,
          systemProgram: SystemProgram.programId,
        },
      });
    } else if (collection === "certificate") {
      tx = await program.rpc.addCertificate(formDataBuffer, {
        accounts: {
          dataAccount,
          user: walletPublicKey,
          systemProgram: SystemProgram.programId,
        },
      });
    } else if (collection === "experience") {
      tx = await program.rpc.addExperience(formDataBuffer, {
        accounts: {
          dataAccount,
          user: walletPublicKey,
          systemProgram: SystemProgram.programId,
        },
      });
    }

    console.log("Transaction successful with signature: ", tx);
    alert("Akıllı sözleşmeye başarıyla eklendi!");

  } catch (e) {
    console.error("Hata eklendi: ", e);
    alert(`Bir hata oluştu, tekrar deneyin. Hata: ${e.message}`);
  }
};
