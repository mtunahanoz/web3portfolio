import React, { useEffect, useState } from 'react';
import AddExperience from './AddExperience';

const PortfolioPage = () => {
  const [activeTab, setActiveTab] = useState('experience');



  useEffect(() => {

    console.log(activeTab);
  })
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
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700">
          Connect
        </button>
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
              <div className="mb-6">
                <h3 className="text-xl font-semibold">Job Title 1</h3>
                <h5 className="text-gray-500">Company Name | Duration</h5>
                <p>Brief description of your role and achievements.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold">Job Title 2</h3>
                <h5 className="text-gray-500">Company Name | Duration</h5>
                <p>Brief description of your role and achievements.</p>
              </div>
            </div>
          )}

          {activeTab === 'education' && (
            <div>
              <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-600 pb-2">
                Education
              </h2>
              <div className="mb-6">
                <h3 className="text-xl font-semibold">Degree</h3>
                <h5 className="text-gray-500">University Name | Graduation Year</h5>
                <p>Brief description of your studies and notable achievements.</p>
              </div>
            </div>
          )}

          {activeTab === 'certifications' && (
            <div>
              <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-600 pb-2">
                Certifications
              </h2>
              <div className="mb-6">
                <h3 className="text-xl font-semibold">Certification 1</h3>
                <h5 className="text-gray-500">Issuing Organization | Date</h5>
                <p>Brief description of the certification.</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold">Certification 2</h3>
                <h5 className="text-gray-500">Issuing Organization | Date</h5>
                <p>Brief description of the certification.</p>
              </div>
            </div>
          )}


{activeTab === 'experience' && (
           <AddExperience/>
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
