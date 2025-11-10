import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/ensiklopedia";

const EnsiklopediaDetail = () => {
  const { slog } = useParams();
  const [itemData, setItemData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // State baru untuk melacak hotspot mana yang aktif (diklik)
  const [activeHotspot, setActiveHotspot] = useState(null); // (null, 'h1', 'h2', ...)

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const res = await axios.get(`${API_URL}/slug/${slug}`);
        setItemData(res.data);
        setIsLoading(false);
      } catch (err) {
        console.error("Gagal memuat data item:", err);
        setIsLoading(false);
      }
    };

    fetchItemData();
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Memuat data item...</p>
      </div>
    );
  }

  if (!itemData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-500">Data tidak ditemukan.</p>
      </div>
    );
  }

  // Fungsi untuk menangani klik pada hotspot
  const handleHotspotClick = (hotspotId) => {
    // Jika mengklik hotspot yang sudah aktif, tutup pop-up nya
    if (activeHotspot === hotspotId) {
      setActiveHotspot(null);
    } else {
      // Jika mengklik hotspot baru, buka pop-up nya
      setActiveHotspot(hotspotId);
    }
  };

  // Cek apakah item ini punya data hotspot
  const hasHotspots = itemData.hotspots && itemData.hotspots.length > 0;

  return (
    <div className="min-h-screen px-4 py-16 mt-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-merah-800 dark:text-merah-500">
          {itemData.judul}
        </h1>
        <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-8">
          {itemData.deskripsi_singkat}
        </p>

        {/* === BAGIAN HOTSPOT INTERAKTIF === */}
        {/* 'relative' penting agar hotspot bisa diposisikan di dalamnya */}
        <div className="relative w-full max-w-3xl mx-auto rounded-lg shadow-lg overflow-hidden">
          {/* 1. Gambar Utama */}
          <img
            src={
              itemData.gambar
                ? `http://127.0.0.1:8000/storage/${itemData.gambar}`
                : `https://source.unsplash.com/600x400/?batak,culture`
            }
            alt={itemData.judul}
            className="w-full h-auto"
          />


          {/* 2. Tampilkan Hotspot jika ada */}
          {hasHotspots &&
            itemData.hotspots.map((spot) => (
              <React.Fragment key={spot.id}>
                {/* Tombol Titik Hotspot */}
                <button
                  onClick={() => handleHotspotClick(spot.id)}
                  className="absolute w-5 h-5 bg-merah-700 rounded-full shadow-md transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out hover:scale-125 animate-pulse border-2 border-white"
                  style={{
                    left: `${spot.x}%`, // Posisi X dari data
                    top: `${spot.y}%`, // Posisi Y dari data
                  }}
                  aria-label={`Info ${spot.judul}`}
                >
                  {/* Kita tidak perlu span lagi di dalam sini */}
                </button>

                {/* Pop-up Info (Hanya tampil jika 'activeHotspot' == spot.id) */}
                {activeHotspot === spot.id && (
                  <div
                    className="absolute w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 transform -translate-x-1/2 -translate-y-full -mt-4 z-10"
                    style={{
                      left: `${spot.x}%`,
                      top: `${spot.y}%`,
                    }}
                  >
                    <h4 className="font-bold text-lg mb-1">{spot.judul}</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {spot.teks}
                    </p>
                    <button
                      onClick={() => setActiveHotspot(null)}
                      className="absolute top-1 right-2 text-gray-500 hover:text-gray-800"
                    >
                      &times;
                    </button>
                  </div>
                )}
              </React.Fragment>
            ))}
        </div>
        {/* === AKHIR BAGIAN HOTSPOT === */}
      </div>
    </div>
  );
};

export default EnsiklopediaDetail;
