import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderImage from "../assets/parallax-header.PNG";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/ensiklopedia";

const Ensiklopedia = () => {
  const [itemList, setItemList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchEnsiklopedia = async () => {
    try {
      const res = await axios.get(API_URL);
      setItemList(res.data);
      setIsLoading(false);
    } catch (err) {
      console.error("Gagal memuat data ensiklopedia:", err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEnsiklopedia();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* === BAGIAN 1: HEADER (Hero with Fake Parallax) === */}
      {}
      <div
        className="h-[50vh] min-h-[300px] bg-cover bg-fixed bg-center relative"
        style={{
          backgroundImage: `url(${HeaderImage})`,
        }}
      >
        {/* Overlay gelap agar teks terbaca */}
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center shadow-lg px-4">
          Ensiklopedia Budaya Batak
        </h1>
      </div>

      {/* === BAGIAN 2: KONTEN GRID === */}
      <div className="container mx-auto px-4 py-16">
        {/* Tampilkan pesan loading */}
        {isLoading && (
          <p className="text-center text-xl text-gray-500">Memuat data...</p>
        )}

        {/* Tampilkan data setelah loading selesai */}
        {!isLoading && itemList.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Kita "map" datanya menjadi Kartu-Kartu */}
            {itemList.map((item) => (
              <Link
                key={item.id}
                to={`/ensiklopedia/${item.slug}`} 
                className="block bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 group"
              >
                {/* Gambar Kartu */}
                <div className="overflow-hidden h-48">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={
                      item.gambar
                        ? `http://127.0.0.1:8000/storage/${item.gambar}`
                        : `https://source.unsplash.com/400x300/?batak,culture,${item.id}`
                    }
                    alt={item.judul}
                  />

                </div>

                {/* Konten Teks Kartu */}
                <div className="p-6">
                  <h3 className="font-bold text-2xl mb-2 text-merah-800 dark:text-merah-500">
                    {item.judul}
                  </h3>

                  <p className="text-sm text-gray-500 mb-1">
                  Kategori: {item.kategori?.nama}
                  </p>

                  <p
                    className="text-gray-700 dark:text-gray-300 text-base"
                    dangerouslySetInnerHTML={{
                      __html: item.deskripsi_html.substring(0, 120) + "..."
                    }}
                  ></p>

                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Tampilkan pesan jika data kosong */}
        {!isLoading && itemList.length === 0 && (
          <p className="text-center text-gray-500 text-xl">
            Belum ada data untuk ditampilkan.
          </p>
        )}
      </div>
      {/* === END OF KONTEN GRID === */}
    </div>
  );
};

export default Ensiklopedia;