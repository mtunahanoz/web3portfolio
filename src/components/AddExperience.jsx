import React, { useState } from 'react';

const AddExperience = () => {
  const [experiences, setExperiences] = useState([]);
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');
  const [addExperiment, setAddExperiment] = useState("");

  const handleAddExperience = () => {
    if (title && company && startDate && description) {
      const newExperience = {
        title,
        company,
        startDate,
        endDate: endDate || 'Present', // Eğer endDate boşsa 'Present' olarak ayarlanır
        description,
      };
  
      // Verileri JSON formatında güncelle
      const experienceJson = JSON.stringify(newExperience);
  
      // JSON formatında veriyi deneyimlere ekle
      setExperiences([...experiences, experienceJson]);
      
      console.log(experienceJson)

      // Formu temizle  
      setTitle('');
      setCompany('');
      setStartDate('');
      setEndDate('');
      setDescription('');
    }
  };
  

  return (
    <div className="max-w-4xl mx-auto mt-5 p-6 bg-gray-100 rounded-lg shadow-lg">
      {/* Tecrübe Ekleme Formu */}
      <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-600 pb-2">
          Add Experience
        </h2>
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">Job Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">Company</label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">End Date (Optional)</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
          ></textarea>
        </div>
        <button
          onClick={handleAddExperience}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700"
        >
          Add Experience
        </button>
      </section>

    </div>
  );
};

export default AddExperience;
