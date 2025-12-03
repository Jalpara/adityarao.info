import { Icon } from "@iconify/react";

const Contribution = () => {
    return (
        <main className="min-h-screen w-full text-black pb-20">
            <section className="container mx-auto px-6 py-20">
                <div className="max-w-5xl mx-auto space-y-24">

                    {/* Header */}
                    <div className="space-y-6 text-center max-w-3xl mx-auto">
                        <h1 className="font-serif text-5xl md:text-7xl leading-tight">
                            Work <span className="text-primary italic">&</span> Creations.
                        </h1>
                        <p className="text-xl opacity-70 font-serif">
                            "To build is to serve. Here is where I pour my energy, crafting solutions and experiences that matter."
                        </p>
                    </div>

                    {/* FEATURED: CINDRAL */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-primary/5 rounded-[40px] blur-xl transform group-hover:scale-105 transition duration-700"></div>
                        <div className="relative bg-white border border-black/5 p-8 md:p-12 rounded-[40px] shadow-sm hover:shadow-xl transition duration-500 overflow-hidden">

                            <div className="flex flex-col md:flex-row gap-10 relative z-10">
                                <div className="flex-1 space-y-6">
                                    <div className="flex items-center gap-3">
                                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium tracking-wide uppercase">Founder & Lead</span>
                                        <span className="px-3 py-1 bg-black/5 text-black/60 rounded-full text-sm font-medium tracking-wide uppercase">2025 — Present</span>
                                    </div>

                                    <div>
                                        <h2 className="text-4xl md:text-5xl font-serif font-medium mb-2">Cindral </h2> <a href="https://cindral.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary font-medium hover:underline">
                                            Visit Website
                                            <Icon icon="majesticons:open" className="text-lg" />
                                        </a>
                                    </div>

                                    <p className="text-lg opacity-70 leading-relaxed max-w-xl">
                                        I'm building Cindral to prove tech can shape better humans, not just better systems. 
                                    </p>

                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {["Design and Code Lab", "Digital Experiments", "Studio", "AI Tools", "Creative Coding",].map(tag => (
                                            <span key={tag} className="px-3 py-1 border border-black/10 rounded-lg text-sm opacity-60">{tag}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex-1 flex items-center justify-center bg-black/5 rounded-3xl min-h-[300px]">
                                    <div className="text-center space-y-2 opacity-40">
                                        Cindral Hero Image
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* OTHER CONTRIBUTIONS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Cindral Entertainment */}
                        <div className="bg-black/5 p-8 rounded-3xl space-y-6 hover:bg-black/10 transition group">
                            <div className="flex justify-between items-start">
                                <div className="p-3 bg-white rounded-2xl shadow-sm">
                                    <Icon icon="mdi:controller" className="text-3xl text-primary" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-2xl font-medium font-serif">Cindral Entertainment</h3>
                                <p className="text-lg opacity-70">Creating immersive user experiences for everyone.</p>
                            </div>

                            <div className="pt-4 border-t border-black/5">
                                <p className="opacity-60 text-sm leading-relaxed">
                                    Designing and developing engaging virtual worlds and interactive experiences that captivate users of all ages.
                                </p>
                            </div>
                        </div>

                        {/* KSAYAASPAA */}
                        <div className="bg-black/5 p-8 rounded-3xl space-y-6 hover:bg-black/10 transition group">
                            <div className="flex justify-between items-start">
                                <div className="p-3 bg-white rounded-2xl shadow-sm">
                                    <Icon icon="mdi:spa-outline" className="text-3xl text-primary" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-2xl font-medium font-serif">KSAYAASPAA</h3>
                                <p className="text-lg opacity-70">Designing a contemplative wellness retreat brand.</p>
                            </div>

                            <div className="pt-4 border-t border-black/5">
                                <p className="opacity-60 text-sm leading-relaxed">
                                    Crafting the identity and spatial experience for a wellness sanctuary focused on mindfulness, restoration, and connection with nature.
                                </p>
                            </div>
                        </div>

                        {/* MrVibe */}
                        <div className="bg-black/5 p-8 rounded-3xl space-y-6 hover:bg-black/10 transition group md:col-span-2">
                            <div className="flex justify-between items-start">
                                <div className="p-3 bg-white rounded-2xl shadow-sm">
                                    <Icon icon="mdi:account-group-outline" className="text-3xl text-primary" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-medium font-serif">MrVibe</h3>
                                    <p className="text-lg opacity-70">Legacy of Aditya that continues with his past work</p>
                                </div>
                                <div className="opacity-60 text-sm leading-relaxed flex items-center">
                                    This version of Aditya is a tribute to his earlier contributions, preserving the essence of his work while embracing new opportunities for growth and innovation.
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </main>
    );
};

export default Contribution;
