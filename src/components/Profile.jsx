import React, { useState, useEffect } from 'react';
import { getConnection, programID } from '../config';
import { connectWallet, getProvider } from '../wallet';
import { fetchCollectionData } from '../fetchData';
import { Link } from 'react-router-dom';

const PortfolioPage = () => {
  const [wallet, setWallet] = useState(null);
  const [provider, setProvider] = useState(null);
  const [connection, setConnection] = useState(null);
  const [activeTab, setActiveTab] = useState('experience');
  const [transactions, setTransactions] = useState({ education: [], certificate: [], experience: [] });

  useEffect(() => {
    const conn = getConnection();
    setProvider(getProvider(conn));
    setConnection(conn);
  }, []);

  const handleConnectWallet = () => {
    connectWallet(setWallet, () => {
      fetchCollectionData('education', provider, connection, programID, wallet, (data) => setTransactions(prev => ({ ...prev, education: data })));
      fetchCollectionData('certificate', provider, connection, programID, wallet, (data) => setTransactions(prev => ({ ...prev, certificate: data })));
      fetchCollectionData('experience', provider, connection, programID, wallet, (data) => setTransactions(prev => ({ ...prev, experience: data })));
    });
  };

  return (
    <div className="max-w-4xl mx-auto mt-5 p-6 bg-gray-100 rounded-lg shadow-lg">
      {/* Profil Bölümü */}
      <header className="text-center mb-10 p-6 bg-white rounded-lg shadow-md">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqMJgay9MVG9-iGr_5JhRbHDc9FEdBuzZCBQ&s"
          alt="Profile"
          className="w-36 h-36 rounded-full mx-auto mb-4 object-cover shadow-md"
        />
        <h1 className="text-3xl font-bold mb-2">Your Name</h1>
        <p className="text-lg text-gray-600">Job Title | Company Name</p>
        <p className="text-lg text-blue-600">
          Location |{' '}
          <a
            href="https://www.linkedin.com"
            className="text-blue-600 hover:underline"
          >
            LinkedIn Profile
          </a>
        </p>
        <button 
          onClick={handleConnectWallet} 
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700"
        >
          Connect Wallet
        </button>
        <Link to="/profiledashboard">
        <button 
          onClick={handleConnectWallet} 
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
                  <h5 className="text-gray-500">{JSON.parse(tx.accounts.map(a => a.data.experience).join(', '))[0].company_name} | Duration</h5>
                  <p>{JSON.parse(tx.accounts.map(a => a.data.experience).join(', '))[0].answer}</p>
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
                  <p>{JSON.parse(tx.accounts.map(a => a.data.education).join(', '))[0].question}</p>
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

      {/* İletişim Bilgileri Bölümü */}
      <section className="mb-10 p-6 bg-white rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-600 pb-2">
          Contact Information
        </h2>
        <p className="text-lg">
          <strong>Email:</strong> your.email@example.com
        </p>
        <p className="text-lg">
          <strong>Phone:</strong> +123 456 7890
        </p>
        <p className="text-lg">
          <strong>Location:</strong> Your City, Country
        </p>
      </section>
    </div>
  );
};

export default PortfolioPage;
