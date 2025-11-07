import React, { useEffect, useState } from "react";
import axios from "axios";

const Storytelling = () => {
  const [storyList, setStoryList] = useState([]);
  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");

  // Base URL API Laravel kamu
  const API_URL = "http://127.0.0.1:8000/api/storytelling";

  useEffect(() => {
    fetchStory();
  }, []);

  const fetchStory = async () => {
    try {
      const res = await axios.get(API_URL);
      setStoryList(res.data);
    } catch (err) {
      console.error("Gagal memuat data:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_URL, { judul, isi });
      setJudul("");
      setIsi("");
      fetchStory();
    } catch (err) {
      console.error("Gagal menambah cerita:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchStory();
    } catch (err) {
      console.error("Gagal menghapus:", err);
    }
  };

  return (
    <div className="min-h-screen px-8 py-16 mt-16">
      <h1 className="text-3xl font-bold text-center mb-8 text-merah-800 dark:text-merah-500">
        Storytelling Budaya
      </h1>

      {/* Form tambah cerita */}
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto mb-12 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg"
      >
        <input
          type="text"
          placeholder="Judul cerita"
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />
        <textarea
          placeholder="Isi cerita..."
          value={isi}
          onChange={(e) => setIsi(e.target.value)}
          className="w-full mb-4 p-2 border rounded h-32"
        ></textarea>
        <button
          type="submit"
          className="bg-merah-700 text-white px-4 py-2 rounded hover:bg-merah-800"
        >
          Simpan Cerita
        </button>
      </form>

      {/* List cerita */}
      <div className="max-w-3xl mx-auto space-y-4">
        {storyList.map((story) => (
          <div
            key={story.id}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold text-lg">{story.judul}</h3>
              <p className="text-gray-600 dark:text-gray-300">{story.isi}</p>
            </div>
            <button
              onClick={() => handleDelete(story.id)}
              className="text-red-500 font-semibold hover:text-red-700"
            >
              Hapus
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Storytelling;
