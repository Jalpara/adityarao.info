import { Icon } from "@iconify/react";

const About = () => {
    return (
        <main className="min-h-screen w-full text-black pb-20">
            {/* Hero Section */}
            <section className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 space-y-6">
                    <h1 className="font-serif text-5xl md:text-7xl leading-tight">
                        About <span className="text-primary italic">Me</span>.
                    </h1>
                    <p className="text-xl opacity-70 font-serif max-w-xl">
                        Neutral notes about what I’m reading, practicing, and moving.
                        Formerly “MrVibe.” That work lives separately.
                    </p>
                    <div className="flex flex-wrap gap-4 text-lg opacity-60 font-medium">
                        <span>Navi Mumbai</span>
                        <span>•</span>
                        <span>Reading</span>
                        <span>•</span>
                        <span>Moving</span>
                        <span>•</span>
                        <span>Flute</span>
                    </div>
                </div>
                <div className="flex-1 relative flex justify-center">
                    <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl transform translate-x-10 translate-y-10 w-3/4 h-3/4 mx-auto"></div>
                    <img
                        src="/photos/aditya-douji.jpg"
                        alt="Aditya"
                        className="relative z-10 rounded-3xl shadow-xl w-full max-w-md object-cover aspect-[3/4] rotate-2 hover:rotate-0 transition duration-500"
                    />
                </div>
            </section>

            {/* Bento Grid */}
            <section className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

                    {/* Reading Now */}
                    <div className="bg-black/5 p-8 rounded-3xl flex flex-col justify-between h-64 group hover:bg-black/10 transition">
                        <div className="flex justify-between items-start">
                            <Icon icon="mdi:book-open-page-variant" className="text-3xl opacity-50" />
                            <span className="opacity-40 font-serif italic text-lg">Reading</span>
                        </div>
                        <div>
                            <h3 className="text-2xl font-medium text-[#2e2e2e]">Atomic Habits</h3>
                            <p className="opacity-60">James Clear</p>
                        </div>
                    </div>

                    {/* Flute Focus */}
                    <div className="bg-black/5 p-8 rounded-3xl flex flex-col justify-between h-64 group hover:bg-black/10 transition">
                        <div className="flex justify-between items-start">
                            <Icon icon="mdi:music-clef-treble" className="text-3xl opacity-50" />
                            <span className="opacity-40 font-serif italic text-lg">Flute Focus</span>
                        </div>
                        <div>
                            <h3 className="text-2xl font-medium text-[#2e2e2e]">Raag Yaman</h3>
                            <p className="opacity-60">Alaap (BPM 84)</p>
                        </div>
                    </div>

                    {/* Stats / Fitness */}
                    <div className="bg-black/5 p-8 rounded-3xl flex flex-col justify-between h-full md:row-span-2 relative overflow-hidden group hover:shadow-lg transition">
                        <img
                            src="/photos/aditya-cycling.jpg"
                            className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition duration-500 scale-105 group-hover:scale-100"
                            alt="Cycling"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>

                        <div className="relative z-10 flex justify-between items-start">
                            <Icon icon="mdi:bike" className="text-3xl opacity-60" />
                            <span className="opacity-50 font-serif italic text-lg">Moving</span>
                        </div>
                        <div className="relative z-10 space-y-4">
                            <div>
                                <h3 className="text-5xl font-semibold text-[#2e2e2e]">3</h3>
                                <p className="opacity-60 font-medium">Sessions this week</p>
                            </div>
                            <div>
                                <h3 className="text-5xl font-semibold text-[#2e2e2e]">140</h3>
                                <p className="opacity-60 font-medium">Minutes active</p>
                            </div>
                        </div>
                    </div>

                    {/* Bookshelf (Wide) */}
                    <div className="bg-black/5 p-8 rounded-3xl md:col-span-2 flex flex-col justify-between min-h-64 group hover:bg-black/10 transition">
                        <div className="flex justify-between items-start mb-6">
                            <Icon icon="mdi:library-shelves" className="text-3xl opacity-50" />
                            <span className="opacity-40 font-serif italic text-lg">Bookshelf</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-5 bg-white/60 rounded-2xl border border-black/5">
                                <h4 className="font-medium text-xl text-[#2e2e2e]">The Daily Laws</h4>
                                <p className="opacity-60 text-sm mt-1">Robert Greene</p>
                            </div>
                            <div className="p-5 bg-white/60 rounded-2xl border border-black/5">
                                <h4 className="font-medium text-xl text-[#2e2e2e]">Surrounded By Idiots</h4>
                                <p className="opacity-60 text-sm mt-1">Thomas Erikson</p>
                            </div>
                        </div>
                    </div>

                    {/* Music */}
                    <div className="bg-black/5 p-8 rounded-3xl md:col-span-2 flex flex-col justify-between min-h-64 group hover:bg-black/10 transition">
                        <div className="flex justify-between items-start mb-6">
                            <Icon icon="mdi:headphones" className="text-3xl opacity-50" />
                            <span className="opacity-40 font-serif italic text-lg">On Repeat</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-center gap-4 p-2 rounded-xl hover:bg-white/40 transition">
                                <div className="w-16 h-16 bg-gray-300 rounded-lg flex-shrink-0 overflow-hidden shadow-sm">
                                    <img src="/albums/wholeness_sounds_of_isha.png" className="w-full h-full object-cover" alt="Wholeness" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-lg text-[#2e2e2e]">Wholeness</h4>
                                    <p className="opacity-60 text-sm">Sounds of Isha</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-2 rounded-xl hover:bg-white/40 transition">
                                <div className="w-16 h-16 bg-gray-300 rounded-lg flex-shrink-0 overflow-hidden shadow-sm">
                                    <img src="/albums/gratitude.jpeg" className="w-full h-full object-cover" alt="Gratitude" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-lg text-[#2e2e2e]">Gratitude (432 Hz)</h4>
                                    <p className="opacity-60 text-sm">Rakesh Chaurasia</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Toolbox */}
                    <div className="bg-black/5 p-8 rounded-3xl flex flex-col justify-between h-64 group hover:bg-black/10 transition">
                        <div className="flex justify-between items-start">
                            <Icon icon="mdi:toolbox-outline" className="text-3xl opacity-50" />
                            <span className="opacity-40 font-serif italic text-lg">Toolbox</span>
                        </div>
                        <div className="flex flex-wrap gap-2 content-end">
                            {["M1 Mac Mini", "13″ M2 iPad Pro", "iPhone 13 Mini", "Pixel 6a", "AirPods Pro"].map((item) => (
                                <span key={item} className="px-4 py-2 bg-white/60 rounded-xl text-sm opacity-80 font-medium border border-black/5">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
};

export default About;
