import React, { useState } from "react";
import db from "../firebase/firebaseConfig"; // Firebase'i import ediyoruz

function CenteredForm(props) {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    job: "",
    location: "",
    company_name: "",
    lurl: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      await db.collection("users").add({
        wallet: props.wallet,
        ...formData,
      });
      props.fetchData(props.wallet);
      alert("Kullanıcı başarıyla eklendi!");
      props.setAskName(false)

    } catch (e) {
      console.error("Hata eklendi: ", e);
      alert("Bir hata oluştu, tekrar deneyin.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">Kayıt Formu</h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-medium mb-2" htmlFor="name">
            Fullname
          </label>
          <input
            className="w-full p-3 border border-gray-300 rounded-lg text-lg"
            type="text"
            id="name"
            placeholder="İsminizi girin"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-medium mb-2" htmlFor="job">
            Position
          </label>
          <input
            className="w-full p-3 border border-gray-300 rounded-lg text-lg"
            type="text"
            id="job"
            placeholder="Mevcut işinizi girin"
            value={formData.job}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-medium mb-2" htmlFor="location">
            Lokasyon
          </label>
          <input
            className="w-full p-3 border border-gray-300 rounded-lg text-lg"
            type="text"
            id="location"
            placeholder="Lokasyonunuzu girin"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-medium mb-2" htmlFor="location">
            Company Name
          </label>
          <input
            className="w-full p-3 border border-gray-300 rounded-lg text-lg"
            type="text"
            id="company_name"
            placeholder="Lokasyonunuzu girin"
            value={formData.company_name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-medium mb-2" htmlFor="location">
            Linkedin URL
          </label>
          <input
            className="w-full p-3 border border-gray-300 rounded-lg text-lg"
            type="text"
            id="lurl"
            placeholder="Lokasyonunuzu girin"
            value={formData.lurl}
            onChange={handleChange}
          />
        </div>
        <div className="text-center">
          <button
            onClick={handleSubmit}
            className="w-full p-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default CenteredForm;
