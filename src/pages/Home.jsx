import headerVideo from "../assets/header.mp4";

const Home = () => {
    const features = [
        { title: "Ensiklopedia Budaya", desc: "Data adat, aksara, makanan, sejarah.", icon: "📖" },
        { title: "Storytelling", desc: "Legenda, mitos, dan kisah rakyat Batak.", icon: "🎧" },
        { title: "Peta Budaya", desc: "Lihat sebaran budaya Batak secara interaktif.", icon: "🗺️" },
        { title: "Kuis & Pembelajaran", desc: "Uji pengetahuanmu tentang budaya Batak.", icon: "🧠" },
    ];

    return (
        <>
            {/* Video header */}
            <div className="relative h-[80vh] overflow-hidden mt-16">
                <video
                    src={headerVideo}
                    autoPlay
                    loop
                    muted
                    className="absolute w-full h-full object-cover brightness-75"
                ></video>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
                    <h1 className="text-5xl font-bold mb-4">Selamat Datang di Website Budaya Batak</h1>
                    <p className="text-lg max-w-2xl">Pelestarian hidup berbasis masyarakat</p>
                </div>
            </div>

            {/* Fitur */}
            <section id="fitur" className="mt-20 py-16 px-4 sm:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900 transition">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-merah-800 dark:text-merah-600 mb-12">Fitur Unggulan</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((item, i) => (
                            <div
                                key={i}
                                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700"
                            >
                                <div className="text-5xl mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold text-merah-700 dark:text-merah-500 mb-2">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
