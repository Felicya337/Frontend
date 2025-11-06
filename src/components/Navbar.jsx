import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
    return (
        <nav className="bg-merah-700 text-white py-4 shadow-md fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto flex justify-between items-center px-6">
                <h1 className="text-xl font-bold tracking-wide">Budaya Batak</h1>
                <div className="space-x-6 flex items-center">
                    <Link to="/">Home</Link>
                    <Link to="/ensiklopedi">Ensiklopedia</Link>
                    <Link to="/storytelling">Storytelling</Link>
                    <Link to="/peta">Peta Budaya</Link>
                    <Link to="/kuis">Kuis</Link>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
