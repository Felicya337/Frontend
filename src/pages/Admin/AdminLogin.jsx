import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios"; // PENTING: gunakan axios instance

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await api.post("/admin/login", { username, password });
      const token = res.data.access_token || res.data.token;

      if (!token) return setError("Login gagal: token tidak ditemukan dari server.");

      // Simpan token di localStorage
      localStorage.setItem("token", token);

      // Set default Authorization header
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      // Pindah ke dashboard
      navigate("/admin/dashboard");
    } catch (err) {
      console.error(err);
      setError("Login gagal, periksa username/password.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border p-2 mb-4 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 mb-6 rounded"
        />

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
