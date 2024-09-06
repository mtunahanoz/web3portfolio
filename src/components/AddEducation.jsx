import React, { useState } from 'react';

const AddEducation = () => {
  const [educationList, setEducationList] = useState([]);
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [fieldOfStudy, setFieldOfStudy] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');

  const handleAddEducation = () => {
    if (school && degree && fieldOfStudy && startDate && description) {
      const newEducation = {
        school,
        degree,
        fieldOfStudy,
        startDate,
        endDate: endDate || 'Present', // Eğer endDate boşsa 'Present' olarak ayarlanır
        description,
      };
      setEducationList([...educationList, newEducation]);
      setSchool('');
      setDegree('');
      setFieldOfStudy('');
      setStartDate('');
      setEndDate('');
      setDescription('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-5 p-6 bg-gray-100 rounded-lg shadow-lg">
      {/* Eğitim Ekleme Formu */}
      <section className="mb-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-600 pb-2">
          Add Education
        </h2>
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">School</label>
          <input
            type="text"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">Degree</label>
          <input
            type="text"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">Field of Study</label>
          <input
            type="text"
            value={fieldOfStudy}
            onChange={(e) => setFieldOfStudy(e.target.value)}
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
          onClick={handleAddEducation}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700"
        >
          Add Education
        </button>
      </section>

      {/* Eklenen Eğitim Listesi */}
      <section className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 border-b-2 border-blue-600 pb-2">
          Your Education
        </h2>
        <ul>
          {educationList.length > 0 ? (
            educationList.map((edu, index) => (
              <li
                key={index}
                className="mb-4 p-4 bg-gray-200 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold">{edu.school}</h3>
                <p className="text-gray-700">{edu.degree}</p>
                <p className="text-gray-600">
                  {edu.fieldOfStudy}
                </p>
                <p className="text-gray-600">
                  {edu.startDate} - {edu.endDate}
                </p>
                <p className="text-gray-800 mt-2">{edu.description}</p>
              </li>
            ))
          ) : (
            <p>No education added yet.</p>
          )}
        </ul>
      </section>
    </div>
  );
};

export default AddEducation;
