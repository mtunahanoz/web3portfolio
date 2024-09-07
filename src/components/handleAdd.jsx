import db from "../firebase/firebaseConfig";


export const handleAdd = async (collection, formData) => {
    try {
      await db.collection(collection).add(formData);
      alert(" başarıyla eklendi!");
    } catch (e) {
      console.error("Hata eklendi: ", e);
      alert("Bir hata oluştu, tekrar deneyin.");
    }
  };