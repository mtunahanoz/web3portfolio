import React, { useState } from 'react';

const CertificateUpload = () => {
  const [certificates, setCertificates] = useState([]);
  const [certificateName, setCertificateName] = useState('');
  const [certificateFile, setCertificateFile] = useState(null);

  const handleUpload = () => {
    if (certificateName && certificateFile) {
      const newCertificate = {
        name: certificateName,
        file: certificateFile,
      };
      setCertificates([...certificates, newCertificate]);
      setCertificateName('');
      setCertificateFile(null);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-5 p-6 bg-gray-100 rounded-lg shadow-lg">
      {/* Sertifika Yükleme Formu */}
      <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-600 pb-2">
          Upload Certificate
        </h2>
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">
            Certificate Name
          </label>
          <input
            type="text"
            value={certificateName}
            onChange={(e) => setCertificateName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">
            Upload File
          </label>
          <input
            type="file"
            onChange={(e) => setCertificateFile(e.target.files[0])}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
          />
        </div>
        <button
          onClick={handleUpload}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700"
        >
          Upload
        </button>
      </section>

      {/* Sertifikalar Listesi */}
      <section className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-600 pb-2">
          Your Certificates
        </h2>
        <ul>
          {certificates.length > 0 ? (
            certificates.map((cert, index) => (
              <li
                key={index}
                className="mb-4 p-4 bg-gray-200 rounded-lg shadow-md flex justify-between items-center"
              >
                <span className="font-semibold">{cert.name}</span>
                <button className="text-blue-600 hover:underline">
                  View Certificate
                </button>
              </li>
            ))
          ) : (
            <p>No certificates uploaded yet.</p>
          )}
        </ul>
      </section>
    </div>
  );
};

export default CertificateUpload;
