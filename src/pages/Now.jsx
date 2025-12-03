import { Icon } from "@iconify/react";

const Now = () => {
    return (
        <main className="min-h-screen w-full text-black pb-20">
            <section className="container mx-auto px-6 py-20">
                <div className="max-w-4xl mx-auto space-y-20">

                    {/* Header */}
                    <div className="space-y-4 text-center">
                        <h1 className="font-serif text-5xl md:text-7xl leading-tight">
                            Now <span className="text-primary italic">&</span> Someday.
                        </h1>
                        <p className="text-xl opacity-70 font-serif max-w-2xl mx-auto">
                            What I'm focused on right now, and what I'm dreaming about for someday.
                        </p>
                    </div>

                    {/* NOW SECTION */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="h-px bg-black/10 flex-1"></div>
                            <h2 className="text-3xl font-serif italic text-primary">Now</h2>
                            <div className="h-px bg-black/10 flex-1"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Learning */}
                            <div className="bg-black/5 p-8 rounded-3xl space-y-4 hover:bg-black/10 transition group">
                                <div className="flex items-center gap-3 opacity-60">
                                    <Icon icon="mdi:book-open-variant" className="text-2xl" />
                                    <h3 className="font-serif text-xl">Learning & Growth</h3>
                                </div>
                                <ul className="space-y-3 opacity-80 leading-relaxed">
                                    <li className="flex gap-2"><span className="text-primary">•</span> Reading "The Daily Laws" by Robert Greene</li>
                                    <li className="flex gap-2"><span className="text-primary">•</span> Practicing flute with steady tone exercises</li>
                                    <li className="flex gap-2"><span className="text-primary">•</span> Building consistency in daily habits</li>
                                </ul>
                            </div>

                            {/* Health */}
                            <div className="bg-black/5 p-8 rounded-3xl space-y-4 hover:bg-black/10 transition group">
                                <div className="flex items-center gap-3 opacity-60">
                                    <Icon icon="mdi:arm-flex" className="text-2xl" />
                                    <h3 className="font-serif text-xl">Health & Fitness</h3>
                                </div>
                                <ul className="space-y-3 opacity-80 leading-relaxed">
                                    <li className="flex gap-2"><span className="text-primary">•</span> Training 3 times per week</li>
                                    <li className="flex gap-2"><span className="text-primary">•</span> Cycling around Navi Mumbai</li>
                                    <li className="flex gap-2"><span className="text-primary">•</span> Maintaining 140+ minutes of weekly activity</li>
                                </ul>
                            </div>

                            {/* Projects */}
                            <div className="bg-black/5 p-8 rounded-3xl space-y-4 hover:bg-black/10 transition group">
                                <div className="flex items-center gap-3 opacity-60">
                                    <Icon icon="mdi:laptop" className="text-2xl" />
                                    <h3 className="font-serif text-xl">Projects & Work</h3>
                                </div>
                                <ul className="space-y-3 opacity-80 leading-relaxed">
                                    <li className="flex gap-2"><span className="text-primary">•</span> Developing Cindral project</li>
                                    <li className="flex gap-2"><span className="text-primary">•</span> Working on MrVibe application</li>
                                    <li className="flex gap-2"><span className="text-primary">•</span> Updating personal website</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* SOMEDAY SECTION */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="h-px bg-black/10 flex-1"></div>
                            <h2 className="text-3xl font-serif italic opacity-40">Someday</h2>
                            <div className="h-px bg-black/10 flex-1"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Travel */}
                            <div className="border border-black/10 p-8 rounded-3xl space-y-4 hover:border-primary/30 transition group">
                                <div className="flex items-center gap-3 opacity-60">
                                    <Icon icon="mdi:earth" className="text-2xl" />
                                    <h3 className="font-serif text-xl">Travel & Adventure</h3>
                                </div>
                                <ul className="space-y-3 opacity-80 leading-relaxed">
                                    <li className="flex gap-2"><span className="opacity-40">•</span> Cycling across different states in India</li>
                                    <li className="flex gap-2"><span className="opacity-40">•</span> Visiting the Himalayas for a retreat</li>
                                    <li className="flex gap-2"><span className="opacity-40">•</span> Exploring local heritage sites</li>
                                </ul>
                            </div>

                            {/* Skills */}
                            <div className="border border-black/10 p-8 rounded-3xl space-y-4 hover:border-primary/30 transition group">
                                <div className="flex items-center gap-3 opacity-60">
                                    <Icon icon="mdi:target" className="text-2xl" />
                                    <h3 className="font-serif text-xl">Skills & Mastery</h3>
                                </div>
                                <ul className="space-y-3 opacity-80 leading-relaxed">
                                    <li className="flex gap-2"><span className="opacity-40">•</span> Master flute playing at advanced level</li>
                                    <li className="flex gap-2"><span className="opacity-40">•</span> Learn a new programming language</li>
                                    <li className="flex gap-2"><span className="opacity-40">•</span> Write and publish a book</li>
                                </ul>
                            </div>

                            {/* Impact */}
                            <div className="border border-black/10 p-8 rounded-3xl space-y-4 hover:border-primary/30 transition group">
                                <div className="flex items-center gap-3 opacity-60">
                                    <Icon icon="mdi:star-four-points-outline" className="text-2xl" />
                                    <h3 className="font-serif text-xl">Impact & Community</h3>
                                </div>
                                <ul className="space-y-3 opacity-80 leading-relaxed">
                                    <li className="flex gap-2"><span className="opacity-40">•</span> Launch a product that helps others</li>
                                    <li className="flex gap-2"><span className="opacity-40">•</span> Mentor aspiring developers</li>
                                    <li className="flex gap-2"><span className="opacity-40">•</span> Start a local cycling community</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="text-center opacity-50 font-serif italic text-lg pt-10">
                        “The future belongs to those who prepare for it today.”
                    </div>

                </div>
            </section>
        </main>
    );
};

export default Now;
