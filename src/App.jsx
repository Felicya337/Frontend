import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Storytelling from "./pages/Storytelling";
import Footer from "./components/Footer";
import AudioPlayer from "./components/AudioPlayer";
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import Ensiklopedia from './pages/Ensiklopedia';
import EnsiklopediaDetail from "./pages/EnsiklopediaDetail";

function App() {
  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/ensiklopedia/:id" element={<EnsiklopediaDetail />} />
        <Route path="/ensiklopedia" element={<Ensiklopedia />} />

        <Route path="/storytelling" element={<Storytelling />} />
        /* Halaman Admin */
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>

      <Footer />
      <AudioPlayer />
    </div>
  );
}

export default App;
