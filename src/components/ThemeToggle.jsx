import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [dark]);

    return (
        <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
            title="Ganti Tema"
        >
            {dark ? <Sun className="text-yellow-300" /> : <Moon />}
        </button>
    );
};

export default ThemeToggle;
