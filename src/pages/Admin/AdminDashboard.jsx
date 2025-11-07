import { useEffect } from "react";
import api from "../../api/axios";

const AdminDashboard = () => {

  const handleLogout = () => {
    localStorage.removeItem("token");
    delete api.defaults.headers.common["Authorization"];
    window.location.href = "/admin/login";
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) window.location.href = "/admin/login";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-merah-700 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard Admin</h1>
        <button
          onClick={handleLogout}
          className="bg-white text-merah-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Logout
        </button>
      </nav>

      <main className="p-8">
        <h2 className="text-3xl font-semibold mb-4">Selamat Datang, Admin!</h2>
        <p className="text-gray-600 mb-8">
          Kelola data cerita, budaya, dan konten lainnya di sini.
        </p>
      </main>
    </div>
  );
};

export default AdminDashboard;
