import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import LocationCard from "../components/LocationCard.jsx";

const Home = () => {
  // Time state
  const [time, setTime] = useState("");
  useEffect(() => {
    const updateClock = () => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Weather state
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=19.033&longitude=73.0297&current_weather=true"
    )
      .then((res) => res.json())
      .then((data) => setWeather(data.current_weather))
      .catch(() => setWeather({ temperature: "??", weathercode: null }));
  }, []);

  const weatherNames = {
    0: "Clear",
    1: "Mainly Clear",
    2: "Partly Cloudy",
    3: "Cloudy",
    61: "Rain",
    40: "Thunder idiot sky",
  };

  // Music player state
  const songs = [
    {
      tag: "on repeat",
      title: "Wholeness",
      artist: "Sounds of Isha",
      img: "/albums/wholeness_sounds_of_isha.png",
      url: "https://open.spotify.com/track/42tMEuh2YlMXa8iWKaMfan",
      lyrics: [
        "What is the truth? What is the untruth?",
        "It's not in the words that you speak.",
        "It's in the way you hold the life within you,",
        "It's in the way you are",
        "Whether you are a crawling worm or a big human being",
        "When sun comes up in the morning",
      ],
    },
    {
      tag: "favorite",
      title: "Gratitude at 432Hz",
      artist: "Rakesh Chaurasia",
      img: "/albums/gratitude.jpeg",
      url: "https://open.spotify.com/track/210uN31E64RF58k4j6Gh4f",
      lyrics: ["This music does not have any lyrics. "],
    },
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const current = songs[index];

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % songs.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + songs.length) % songs.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const play = () => {
    window.open(current.url, "_blank");
  };

  const blurLevels = [
    "blur-[1px]",
    "blur-[2px]",
    "blur-[3px]",
    "blur-[4px]",
    "blur-[5px]",
    "blur-[6px]",
  ];

  return (
    <main className="min-h-screen w-full text-black">

      {/* HERO SECTION */}
      <section className="container px-6 md:px-12 min-h-[85vh] py-16 flex flex-col md:flex-row justify-around mx-auto items-center gap-10 relative">

        {/* BG circle stays */}
        <div className="absolute top-[-350px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-[#ff6f53]/10 blur-[250px] pointer-events-none hidden md:block" />

        {/* MOBILE MAP BG */}
        <img
          src="/navi_mumbai_map.png"
          className="absolute inset-0 w-full h-full object-cover opacity-15 blur-[2px] md:hidden pointer-events-none"
        />

        {/* TEXT */}
        <div className="relative z-10 flex flex-col text-center md:text-left">
          <div className="flex flex-col gap-4 max-w-[600px]">
            <h1 className="font-serif text-4xl sm:text-5xl leading-tight">
              Hey, I’m <span className="text-primary italic">Aditya Rao</span>
              <br />
              <span className="opacity-70">Nice to meet you here.</span>
            </h1>

            <p className="font-serif tracking-tight text-base sm:text-lg opacity-70">
              Focused on getting better every day. Reading regularly, training
              with intent, and practicing flute in Navi Mumbai.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 tracking-tight justify-center md:justify-start">
            <NavLink className="bg-[#2e2e2e] text-white/90 px-6 py-3 rounded-xl text-lg hover:bg-black/10 hover:text-black/90 hover:border-black/10 border transition">
              <Icon icon="mynaui:user-solid" className="text-2xl inline-block mr-2" />
              More about me
            </NavLink>

            <a href="#contact" className="bg-black/10 text-black px-6 py-3 rounded-xl text-lg hover:bg-[#2e2e2e] hover:text-white/90 transition">
              <Icon icon="mdi:calendar-blank-outline" className="text-2xl inline-block mr-2" />
              Book a meet
            </a>
          </div>
        </div>

        {/* DESKTOP MAP */}
        <a href="https://maps.app.goo.gl/3VASy4hvGj7mUY1H9" target="_blank" className="hidden md:flex justify-center items-start pt-20 group">
          <div className="relative">
            <img src="/navi_mumbai_map.png" className="w-full max-w-[450px] opacity-30 object-cover pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 translate-x-1/2 -translate-y-1/2 text-2xl font-semibold text-black/70 group-hover:scale-100 scale-0 transition opacity-0 group-hover:opacity-100">
              <Icon icon="mdi:map-marker" className="text-5xl" />
            </div>
          </div>
        </a>
      </section>

      {/* NOW SECTION */}
      <section className="w-full py-20 flex flex-col items-center gap-16 px-6">
        <div className="text-center space-y-4">
          <p className="text-3xl md:text-5xl font-serif opacity-80 max-w-4xl leading-tight">
            I’m working on staying{" "}
            <span className="text-primary">consistent</span> and improving slowly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] w-full">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {/* Workout Card */}
            <div className="bg-black/5 p-8 rounded-3xl flex flex-col h-full min-h-[250px]">
              <div className="flex items-center gap-2 opacity-60 mb-4">
                <Icon icon="mdi:arm-flex" className="text-2xl" />
                <span className="font-serif italic text-xl">workout</span>
              </div>

              <div className="flex items-end justify-around text-center mt-3">
                <div>
                  <h3 className="text-6xl font-semibold text-[#2e2e2e]">140</h3>
                  <p className="opacity-50 text-lg">Minutes</p>
                </div>
                <div>
                  <h3 className="text-6xl font-semibold text-[#2e2e2e]">03</h3>
                  <p className="opacity-50 text-lg">Sessions</p>
                </div>
              </div>

              <div className="mt-5 text-lg text-center font-serif opacity-70">
                “The body achieves what the mind believes.”
              </div>

            </div>

            {/* Bookshelf Card */}
            <div className="bg-black/5 p-8 rounded-3xl h-full">
              <div className="flex items-center gap-2 opacity-60 mb-6">
                <Icon icon="mdi:book-open-page-variant" className="text-2xl" />
                <span className="font-serif italic text-xl">bookshelf</span>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-xl font-medium text-[#2e2e2e]">
                    The Daily Laws{" "}
                    <span className="opacity-50">— Robert Greene</span>
                  </p>
                </div>
                <div>
                  <p className="text-xl font-medium text-[#2e2e2e]">
                    Surrounded By Idiots{" "}
                    <span className="opacity-50">— Thomas Erikson</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {/* On Repeat Card */}
            <div className="bg-black/5 p-8 pb-0 rounded-3xl overflow-hidden relative">
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.div
                  key={index}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="w-full"
                >
                  <div className="flex items-center gap-2 opacity-60 mb-6">
                    <Icon icon="mdi:music-note" className="text-2xl" />
                    <span className="font-serif italic text-xl">
                      {current.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-24 h-24 bg-black/10 rounded-lg overflow-hidden shadow-sm shrink-0">
                      <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center overflow-hidden rounded">
                        <img
                          src={current.img}
                          alt="Album Art"
                          className="w-full h-full object-cover opacity-90"
                        />
                      </div>
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-2xl font-medium text-[#2e2e2e] truncate">
                        {current.title}
                      </h3>
                      <p className="opacity-50 truncate">{current.artist}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Static Controls */}
              <div className="flex items-center gap-3 mt-1 mb-6 pl-[7rem]">
                <Icon
                  icon="mdi:skip-previous"
                  onClick={prev}
                  className="text-2xl opacity-60 hover:opacity-100 cursor-pointer"
                />
                <Icon
                  icon="mdi:play"
                  onClick={play}
                  className="text-2xl opacity-60 hover:opacity-100 cursor-pointer"
                />
                <Icon
                  icon="mdi:skip-next"
                  onClick={next}
                  className="text-2xl opacity-60 hover:opacity-100 cursor-pointer"
                />
              </div>

              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.div
                  key={index}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="relative p-4 pb-0 overflow-clip h-[140px]"
                >
                  <div className="leading-relaxed tracking-tight text-black/50 group">
                    {current.lyrics.map((line, i) => (
                      <p
                        key={i}
                        className={`group-hover:blur-none ${blurLevels[i]} transition`}
                      >
                        {line}
                      </p>
                    ))}
                  </div>

                  <div className="pointer-events-none absolute bottom-0 left-0 w-full h-full bg-linear-to-b from-transparent to-transparent"></div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Time & Location Card */}
            <div className="bg-black/5 p-6 rounded-3xl flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#2e2e2e] mb-1">
                  <Icon
                    icon="mdi:clock-outline"
                    className="text-xl opacity-60"
                  />
                  <span className="text-2xl font-medium">{time}</span>
                </div>
                <div className="flex items-center gap-2 opacity-60">
                  <Icon icon="mdi:weather-partly-cloudy" className="text-xl" />
                  <span>
                    {weather ? `${weather.temperature}°C` : "..."} —{" "}
                    {weather
                      ? weatherNames[weather.weathercode] || "Unknown"
                      : "..."}
                  </span>
                </div>
              </div>
              <div className="opacity-30">
                <Icon icon="mdi:map-marker" className="text-5xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE SECTION */}
      <section className="w-full py-20 px-6 bg-black/5">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="font-serif text-4xl md:text-5xl text-center opacity-90">
            Explore more
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Contribution */}
            <NavLink to="/contribution" className="bg-white p-8 rounded-3xl hover:shadow-xl transition duration-300 group flex flex-col justify-between h-64">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition">
                  <Icon icon="mdi:briefcase-outline" className="text-2xl" />
                </div>
                <h3 className="text-2xl font-serif font-medium">Contribution</h3>
                <p className="opacity-60 text-sm">Building Cindral. Engineering, Design, and Impact.</p>
              </div>
              <div className="flex justify-end opacity-0 group-hover:opacity-100 transition transform translate-x-2 group-hover:translate-x-0">
                <Icon icon="mdi:arrow-right" className="text-2xl opacity-40" />
              </div>
            </NavLink>

            {/* Blogs */}
            <NavLink to="/blogs" className="bg-white p-8 rounded-3xl hover:shadow-xl transition duration-300 group flex flex-col justify-between h-64">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center text-black/70 mb-4 group-hover:scale-110 transition">
                  <Icon icon="mdi:fountain-pen-tip" className="text-2xl" />
                </div>
                <h3 className="text-2xl font-serif font-medium">Blogs</h3>
                <p className="opacity-60 text-sm">Thoughts of my mind and writing on tech & life.</p>
              </div>
              <div className="flex justify-end opacity-0 group-hover:opacity-100 transition transform translate-x-2 group-hover:translate-x-0">
                <Icon icon="mdi:arrow-right" className="text-2xl opacity-40" />
              </div>
            </NavLink>


            {/* Needs & Wants */}
            <NavLink to="/needs-wants" className="bg-white p-8 rounded-3xl hover:shadow-xl transition duration-300 group flex flex-col justify-between h-64">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center text-black/70 mb-4 group-hover:scale-110 transition">
                  <Icon icon="mdi:scale-balance" className="text-2xl" />
                </div>
                <h3 className="text-2xl font-serif font-medium">Needs & Wants</h3>
                <p className="opacity-60 text-sm">Defining enough. A clear distinction.</p>
              </div>
              <div className="flex justify-end opacity-0 group-hover:opacity-100 transition transform translate-x-2 group-hover:translate-x-0">
                <Icon icon="mdi:arrow-right" className="text-2xl opacity-40" />
              </div>
            </NavLink>

            {/* Now & Someday */}
            <NavLink to="/now" className="bg-white p-8 rounded-3xl hover:shadow-xl transition duration-300 group flex flex-col justify-between h-64">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center text-black/70 mb-4 group-hover:scale-110 transition">
                  <Icon icon="mdi:progress-check" className="text-2xl" />
                </div>
                <h3 className="text-2xl font-serif font-medium">Now & Someday</h3>
                <p className="opacity-60 text-sm">Where I am, and where I'm going to be.</p>
              </div>
              <div className="flex justify-end opacity-0 group-hover:opacity-100 transition transform translate-x-2 group-hover:translate-x-0">
                <Icon icon="mdi:arrow-right" className="text-2xl opacity-40" />
              </div>
            </NavLink>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="w-full py-24 px-6 flex flex-col items-center gap-10"
      >
        <h2 className="font-serif text-4xl md:text-6xl text-center opacity-90">
          Let's connect
        </h2>

        {/* CARDS WRAPPER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
          <LocationCard />

          {/* Social card */}
          <div className="bg-black/5 rounded-3xl p-6 flex flex-col gap-6 hover:shadow-lg transition">
            {/* CONTACT LINKS */}
            <div className="flex flex-col gap-3 text-lg">
              {/* EMAIL */}
              <div className="px-4 py-3 rounded-xl flex justify-between items-center border-transparent hover:border-black/10 border transition">
                <span className="opacity-70">mail@adityarao.info</span>
                <Icon
                  icon="mdi:content-copy"
                  className="text-xl cursor-pointer opacity-50 hover:opacity-100 transition"
                  onClick={() =>
                    navigator.clipboard.writeText("mail@adityarao.info")
                  }
                />
              </div>

              {/* BLUESKY */}
              <a
                href="https://bsky.app/profile/raoaditya.bsky.social"
                target="_blank"
                className="px-4 py-3 rounded-xl flex justify-between items-center border-transparent hover:border-black/10 border transition"
              >
                <span className="opacity-70">@raoaditya.bsky.social</span>
                <Icon icon="mdi:open-in-new" className="opacity-50" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Jalpara"
                target="_blank"
                className="px-4 py-3 rounded-xl flex justify-between items-center border-transparent hover:border-black/10 border transition"
              >
                <span className="opacity-70">github.com/Jalpara</span>
                <Icon icon="mdi:open-in-new" className="opacity-50" />
              </a>
            </div>
          </div>
        </div>

        {/* SCHEDULER */}
        <div className="w-full max-w-5xl h-[500px] md:h-[720px] rounded-3xl overflow-hidden border border-black/10 shadow-lg hover:shadow-2xl transition bg-white">
          <iframe
            src="https://cal.com/adityarawr/meet?overlayCalendar=true&layout=column_view&theme=light&embed=static"
            className="w-full h-full"
            allow="fullscreen"
          />
        </div>

        {/* open the iframe in new tab */}
        <a href="https://cal.com/adityarawr/meet?overlayCalendar=true&layout=column_view&theme=light&embed=static" target="_blank" className="flex gap-2 items-center text-base text-black/50 hover:text-black/80 transition">Embed not loading? Open in new tab <Icon icon="mdi:open-in-new" className="opacity-50" /></a>
      </section>
    </main>
  );
};

export default Home;
