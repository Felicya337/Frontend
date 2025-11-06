import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";
import lagu from "../assets/batak.mp3";

const AudioPlayer = () => {
    const [playing, setPlaying] = useState(false);
    const audioRef = useRef(new Audio(lagu));

    const togglePlay = () => {
        if (playing) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setPlaying(!playing);
    };

    return (
        <div className="fixed bottom-6 right-6 bg-merah-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-merah-800 transition z-50">
            <button onClick={togglePlay}>
                {playing ? <Pause size={24} /> : <Play size={24} />}
            </button>
        </div>
    );
};

export default AudioPlayer;
