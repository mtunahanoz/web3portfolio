import React, { useState } from "react";
import { handleAdd } from "./handleAdd";

const UploadCert = () => {
  const [formData, setFormData] = useState({
    certificateName: "",
    issueDate: "",
    companyName: "",
    certificateCode: "",
    wallet: localStorage.getItem('wallet')
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleUpload = () => {

      handleAdd("certificate", formData);
    // Verileri işleme fonksiyonu (Firebase veya başka bir API'ye gönderme)
    // Burada `handleAdd` gibi bir fonksiyon kullanabilirsiniz.

    // Form verilerini temizleyebilirsiniz
    setFormData({
      certificateName: "",
      issueDate: "",
      companyName: "",
      certificateCode: "",
    });
  };

  return (
    <div className="max-w-4xl mx-auto mt-5 p-6 bg-gray-100 rounded-lg shadow-lg">
      <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-600 pb-2">
          Upload Certificate
        </h2>

        <div className="mb-6">
          <label
            className="block text-lg font-semibold mb-2"
            htmlFor="certificateName"
          >
            Certificate Name
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
            type="text"
            id="certificateName"
            placeholder="Certificate Name"
            value={formData.certificateName}
            onChange={handleChange}
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2" htmlFor="issueDate">
            Issue Date
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
            type="date"
            id="issueDate"
            value={formData.issueDate}
            onChange={handleChange}
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-lg font-semibold mb-2"
            htmlFor="companyName"
          >
            Company Name
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
            type="text"
            id="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-lg font-semibold mb-2"
            htmlFor="certificateCode"
          >
            Certificate Code
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
            type="text"
            id="certificateCode"
            placeholder="Certificate Code"
            value={formData.certificateCode}
            onChange={handleChange}
          />
        </div>

        <button
          onClick={handleUpload}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700"
        >
          Upload
        </button>
      </section>
    </div>
  );
};

export default UploadCert;
