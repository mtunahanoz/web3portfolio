import React, { useState, useEffect } from 'react';
import { getConnection, programID } from '../config';
import { connectWallet, getProvider } from '../wallet';
import { fetchCollectionData } from '../fetchData';
import { Link } from 'react-router-dom';
import CenteredButton from './CenteredButton';
import CenteredForm from './CenteredForm';
import db from '../firebase/firebaseConfig'; 

const PortfolioPage = () => {
  const [login, setLogin] = useState(false);
  const [askName, setAskName] = useState(false);
  const [wallet, setWallet] = useState(null);
  const [provider, setProvider] = useState(null);
  const [connection, setConnection] = useState(null);
  const [userData, setUserData] = useState();
  const [activeTab, setActiveTab] = useState('experience');
  const [transactions, setTransactions] = useState({ education: [], certificate: [], experience: [] });

  useEffect(() => {
    const conn = getConnection();
    connectWallet(setWallet, () => {})
    
    setProvider(getProvider(conn));
    setConnection(conn);
    if(wallet != null){
     setLogin(true);
     fetchData(wallet);
     localStorage.setItem('wallet', wallet);
     console.log("mantar")
     fetchCollectionData('education', provider, connection, programID, wallet, (data) => setTransactions(prev => ({ ...prev, education: data })));
     fetchCollectionData('certificate', provider, connection, programID, wallet, (data) => setTransactions(prev => ({ ...prev, certificate: data })));
     fetchCollectionData('experience', provider, connection, programID, wallet, (data) => setTransactions(prev => ({ ...prev, experience: data })));
    }
  }, [wallet]);

  

  const fetchData = async (wallet) => {
    if (!wallet) {
      console.error("Wallet değeri tanımlı değil.");
      return;
    }
  
    try {
      const snapshot = await db.collection("users").where("wallet", "==", wallet).get();
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      console.log(data);
      if(data.length >= 1){
        console.log("çok data var");
        setAskName(false);
        setUserData(data[0])

        
      }  else{
        setAskName(true);
      }
      console.log("asdas")
      console.log(data[0])
    } catch (error) {
      console.error("Veri çekme hatası: ", error);
    }
  };

  if(!login){
return ( <CenteredButton></CenteredButton>)

  }
    else if (askName){
      return (<CenteredForm wallet={wallet} setAskName={setAskName} fetchData={fetchData}/>)
    }
    else if(userData){
  return (


    <div className="max-w-4xl mx-auto mt-5 p-6 bg-gray-100 rounded-lg shadow-lg">
      {/* Profil Bölümü */}
      <header className="text-center mb-10 p-6 bg-white rounded-lg shadow-md">
        <img
          src="https://cdn-icons-png.flaticon.com/512/10337/10337609.png"
          alt="Profile"
          className="w-36 h-36 rounded-full mx-auto mb-4 object-cover shadow-md"
        />
        <h1 className="text-3xl font-bold mb-2">{userData.name}</h1>
        <p className="text-lg text-gray-600">{userData.job} | {userData.company_name}</p>
        <p className="text-lg text-blue-600">
        {userData.location} |{' '}
          <a
            href={userData.lurl}
            className="text-blue-600 hover:underline"
          >
            LinkedIn Profile
          </a>
        </p>
    
        <Link to="/profiledashboard">
        <button 
  
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700"
        >
          Dashboard
        </button>
        </Link>
      </header>

      {/* Tab Navigation */}
      <div className="mb-10">
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setActiveTab('experience')}
            className={`px-4 py-2 rounded-full focus:outline-none ${
              activeTab === 'experience'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-600'
            }`}
          >
            Experience
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`px-4 py-2 rounded-full focus:outline-none ${
              activeTab === 'education'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-600'
            }`}
          >
            Education
          </button>
          <button
            onClick={() => setActiveTab('certifications')}
            className={`px-4 py-2 rounded-full focus:outline-none ${
              activeTab === 'certifications'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-600'
            }`}
          >
            Certifications
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
          {activeTab === 'experience' && (
            <div>
              <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-600 pb-2">
                Experience
              </h2>
              {transactions.experience.map((tx, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-xl font-semibold">Experience {index + 1}</h3>
                  <h5 className="text-gray-500">{JSON.parse(tx.accounts.map(a => a.data.experience).join(', '))[0].company} | {JSON.parse(tx.accounts.map(a => a.data.experience).join(', '))[0].startDate}</h5>
                  <p>{JSON.parse(tx.accounts.map(a => a.data.experience).join(', '))[0].desc}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'education' && (
            <div>
              <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-600 pb-2">
                Education
              </h2>
              {transactions.education.map((tx, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-xl font-semibold">Degree {index + 1}</h3>
                  <h5 className="text-gray-500">{JSON.parse(tx.accounts.map(a => a.data.experience).join(', '))[0].school_name} | {JSON.parse(tx.accounts.map(a => a.data.experience).join(', '))[0].year}</h5>
                  <p>{JSON.parse(tx.accounts.map(a => a.data.education).join(', '))[0].desc}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'certifications' && (
            <div>
              <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-600 pb-2">
                Certifications
              </h2>
              {transactions.certificate.map((tx, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-xl font-semibold">Certification {index + 1}</h3>
                  <h5 className="text-gray-500">{JSON.parse(tx.accounts.map(a => a.data.experience).join(', '))[0].company} | {JSON.parse(tx.accounts.map(a => a.data.experience).join(', '))[0].year}</h5>
                  <p>{tx.accounts.map(a => a.data.certificate).join(', ')[0].desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

    </div>
  );
              }
};

export default PortfolioPage;
