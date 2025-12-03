import { Icon } from "@iconify/react";

const NeedsWants = () => {
    return (
        <main className="min-h-screen w-full text-black pb-20">
            <section className="container mx-auto px-6 py-20">
                <div className="max-w-4xl mx-auto space-y-20">

                    {/* Header */}
                    <div className="space-y-6 text-center">
                        <h1 className="font-serif text-5xl md:text-7xl leading-tight">
                            Needs <span className="text-primary italic">&</span> Wants.
                        </h1>
                        <p className="text-xl opacity-70 font-serif max-w-2xl mx-auto">
                            A clear distinction between what I truly need and what I simply want.
                        </p>
                    </div>

                    {/* NEEDS SECTION */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="h-px bg-black/10 flex-1"></div>
                            <h2 className="text-3xl font-serif italic text-primary">Needs</h2>
                            <div className="h-px bg-black/10 flex-1"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Health */}
                            <div className="bg-black/5 p-8 rounded-3xl space-y-4 hover:bg-black/10 transition group">
                                <div className="flex items-center gap-3 opacity-60">
                                    <Icon icon="mdi:heart-pulse" className="text-2xl" />
                                    <h3 className="font-serif text-xl">Health & Wellness</h3>
                                </div>
                                <ul className="space-y-3 opacity-80 leading-relaxed">
                                    <li className="flex gap-2"><span className="text-primary">•</span> Regular exercise and movement</li>
                                    <li className="flex gap-2"><span className="text-primary">•</span> Nutritious food and clean water</li>
                                    <li className="flex gap-2"><span className="text-primary">•</span> Adequate sleep (7-8 hours)</li>
                                    <li className="flex gap-2"><span className="text-primary">•</span> Mental health and stress management</li>
                                </ul>
                            </div>

                            {/* Basic Living */}
                            <div className="bg-black/5 p-8 rounded-3xl space-y-4 hover:bg-black/10 transition group">
                                <div className="flex items-center gap-3 opacity-60">
                                    <Icon icon="mdi:home-outline" className="text-2xl" />
                                    <h3 className="font-serif text-xl">Basic Living</h3>
                                </div>
                                <ul className="space-y-3 opacity-80 leading-relaxed">
                                    <li className="flex gap-2"><span className="text-primary">•</span> Safe and comfortable shelter</li>
                                    <li className="flex gap-2"><span className="text-primary">•</span> Reliable income and financial stability</li>
                                    <li className="flex gap-2"><span className="text-primary">•</span> Essential clothing and utilities</li>
                                    <li className="flex gap-2"><span className="text-primary">•</span> Transportation for daily needs</li>
                                </ul>
                            </div>

                            {/* Growth */}
                            <div className="bg-black/5 p-8 rounded-3xl space-y-4 hover:bg-black/10 transition group">
                                <div className="flex items-center gap-3 opacity-60">
                                    <Icon icon="mdi:sprout-outline" className="text-2xl" />
                                    <h3 className="font-serif text-xl">Growth & Connection</h3>
                                </div>
                                <ul className="space-y-3 opacity-80 leading-relaxed">
                                    <li className="flex gap-2"><span className="text-primary">•</span> Meaningful relationships and community</li>
                                    <li className="flex gap-2"><span className="text-primary">•</span> Continuous learning and skill development</li>
                                    <li className="flex gap-2"><span className="text-primary">•</span> Purpose and meaningful work</li>
                                    <li className="flex gap-2"><span className="text-primary">•</span> Time for reflection and mindfulness</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* WANTS SECTION */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="h-px bg-black/10 flex-1"></div>
                            <h2 className="text-3xl font-serif italic opacity-40">Wants</h2>
                            <div className="h-px bg-black/10 flex-1"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Tech */}
                            <div className="border border-black/10 p-8 rounded-3xl space-y-4 hover:border-primary/30 transition group">
                                <div className="flex items-center gap-3 opacity-60">
                                    <Icon icon="mdi:cellphone-link" className="text-2xl" />
                                    <h3 className="font-serif text-xl">Tech & Gadgets</h3>
                                </div>
                                <ul className="space-y-3 opacity-80 leading-relaxed">
                                    <li className="flex gap-2"><span className="opacity-40">•</span> Latest smartphone or laptop upgrades</li>
                                    <li className="flex gap-2"><span className="opacity-40">•</span> Gaming console or VR headset</li>
                                    <li className="flex gap-2"><span className="opacity-40">•</span> Smart home devices and automation</li>
                                    <li className="flex gap-2"><span className="opacity-40">•</span> High-end audio equipment</li>
                                </ul>
                            </div>

                            {/* Experiences */}
                            <div className="border border-black/10 p-8 rounded-3xl space-y-4 hover:border-primary/30 transition group">
                                <div className="flex items-center gap-3 opacity-60">
                                    <Icon icon="mdi:ticket-outline" className="text-2xl" />
                                    <h3 className="font-serif text-xl">Experiences & Leisure</h3>
                                </div>
                                <ul className="space-y-3 opacity-80 leading-relaxed">
                                    <li className="flex gap-2"><span className="opacity-40">•</span> International travel and adventures</li>
                                    <li className="flex gap-2"><span className="opacity-40">•</span> Expensive concerts and events</li>
                                    <li className="flex gap-2"><span className="opacity-40">•</span> Luxury dining experiences</li>
                                    <li className="flex gap-2"><span className="opacity-40">•</span> Premium subscriptions and memberships</li>
                                </ul>
                            </div>

                            {/* Material */}
                            <div className="border border-black/10 p-8 rounded-3xl space-y-4 hover:border-primary/30 transition group">
                                <div className="flex items-center gap-3 opacity-60">
                                    <Icon icon="mdi:diamond-stone" className="text-2xl" />
                                    <h3 className="font-serif text-xl">Material & Status</h3>
                                </div>
                                <ul className="space-y-3 opacity-80 leading-relaxed">
                                    <li className="flex gap-2"><span className="opacity-40">•</span> Designer clothing and accessories</li>
                                    <li className="flex gap-2"><span className="opacity-40">•</span> Luxury car or bike</li>
                                    <li className="flex gap-2"><span className="opacity-40">•</span> Expensive watches or jewelry</li>
                                    <li className="flex gap-2"><span className="opacity-40">•</span> Home decor and collectibles</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="text-center opacity-50 font-serif italic text-lg pt-10">
                        “The secret of happiness is not in doing what you want, but in wanting what you do.”
                    </div>

                </div>
            </section>
        </main>
    );
};

export default NeedsWants;
