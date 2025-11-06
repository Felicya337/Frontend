import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AudioPlayer from "./components/AudioPlayer";

function App() {
  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
      <Navbar />
      <Home />
      <Footer />
      <AudioPlayer />
    </div>
  );
}

export default App;
