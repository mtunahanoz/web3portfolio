import React, { useState } from "react";
import db from "../firebase/firebaseConfig"; // Firebase'i import ediyoruz
import { handleAdd } from "./handleAdd";

const AddEducation = () => {
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldOfStudy: "",
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

  const sendEdu = () => {
    handleAdd("education", formData);




    // Form verilerini temizleyebilirsiniz
    setFormData({
      school: "",
      degree: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  };

  return (
    <div className="max-w-4xl mx-auto mt-5 p-6 bg-gray-100 rounded-lg shadow-lg">
      <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-600 pb-2">
          Add Education
        </h2>

        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2" htmlFor="school">
            School
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
            type="text"
            id="school"
            placeholder="School name"
            value={formData.school}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2" htmlFor="degree">
            Degree
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
            type="text"
            id="degree"
            placeholder="Degree"
            value={formData.degree}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2" htmlFor="fieldOfStudy">
            Field of Study
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
            type="text"
            id="fieldOfStudy"
            placeholder="Field of Study"
            value={formData.fieldOfStudy}
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
          onClick={sendEdu}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700"
        >
          Add Education
        </button>
      </section>
    </div>
  );
};

export default AddEducation;
