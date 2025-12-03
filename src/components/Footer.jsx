import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Footer = () => {
  const [time, setTime] = useState(new Date());
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("aditya.rao@example.com"); // Placeholder email
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contribution", path: "/contribution" },
    { name: "Blog", path: "/blog" },
    { name: "Brand Assets", path: "/brand-assets" },
    { name: "Needs & Wants", path: "/needs-wants" },
    { name: "Now & Someday", path: "/now" },
  ];

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <footer className="w-full bg-white py-16 mt-20 border-t border-black/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div>
              <h2 className="font-serif text-2xl text-black mb-2">
                Aditya Rao
              </h2>
              <p className="text-black/60 text-lg leading-relaxed max-w-sm">
                Observing small wins in reading, movement, and music from Navi
                Mumbai.
              </p>
            </div>
          </div>

          {/* Links Column */}
          <div className="md:col-span-4">
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-black/60 hover:text-black transition-colors duration-200 text-base"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social & Meta Column */}
          <div className="md:col-span-4 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-3">
              <button
                onClick={handleCopyEmail}
                className="text-left text-black/60 hover:text-black transition-colors duration-200 flex items-center gap-2 group w-fit"
              >
                <Icon icon="material-symbols:mail-outline-rounded" /> Email
                {copied && (
                  <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                    Copied!
                  </span>
                )}
              </button>
              <a
                href="https://x.com/aditya_rawr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/60 hover:text-black transition-colors duration-200 w-fit flex items-center gap-2"
              >
                <Icon icon="codicon:twitter" /> Twitter
              </a>
              <a
                href="https://bsky.app/profile/raoaditya.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/60 hover:text-black transition-colors duration-200 w-fit flex items-center gap-2"
              >
                <Icon icon="ri:bluesky-fill" /> Bluesky
              </a>
              <a
                href="https://github.com/Jalpara"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/60 hover:text-black transition-colors duration-200 w-fit flex items-center gap-2"
              >
                <Icon icon="mdi:github" className="text-xl" /> GitHub
              </a>
            </div>

            <div className="flex flex-col gap-1 text-sm text-black/40">
              <p>Today's Date: {formatDate(time)}</p>
              <p>© 2025 Aditya Rao. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
