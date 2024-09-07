import React, { useState } from 'react';

import { connectWallet, getProvider } from '../wallet';

function CenteredButton() {
    const [wallet, setWallet] = useState(null);

    
    const handleConnectWallet = () => {
        connectWallet(setWallet, () => {

        });
      };
    


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <button onClick={handleConnectWallet()} className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none">
        Cüzdanı Onayla
      </button>
    </div>
  );
}

export default CenteredButton;
