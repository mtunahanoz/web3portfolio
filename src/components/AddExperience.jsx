import React, { useState } from "react";
import { handleAdd } from "./handleAdd"; // Veri ekleme işlemleri için fonksiyon

const AddExperience = () => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    wallet: localStorage.getItem('wallet')
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const sendExperience = () => {
    handleAdd("experience", formData);

    // Form verilerini temizleyebilirsiniz
    setFormData({
      title: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  };

  return (
    <div className="max-w-4xl mx-auto mt-5 p-6 bg-gray-100 rounded-lg shadow-lg">
      <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-600 pb-2">
          Add Experience
        </h2>

        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2" htmlFor="title">
            Job Title
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
            type="text"
            id="title"
            placeholder="Job Title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2" htmlFor="company">
            Company
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
            type="text"
            id="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2" htmlFor="startDate">
            Start Date
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
            type="date"
            id="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2" htmlFor="endDate">
            End Date (Optional)
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
            type="date"
            id="endDate"
            value={formData.endDate}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
            id="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          onClick={sendExperience}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700"
        >
          Add Experience
        </button>
      </section>
    </div>
  );
};

export default AddExperience;
