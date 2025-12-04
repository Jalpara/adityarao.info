import { NavLink, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // detect if any of the more pages are active
  const moreActive = ["/brand-assets", "/needs-wants"].includes(
    location.pathname
  );

  const getLinkClass = ({ isActive }) =>
    `px-4 py-1.5 rounded-full transition ${isActive ? "bg-[#2e2e2e] text-white" : "text-black/70 hover:bg-black/5"
    }`;

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { x: "100%", opacity: 0 },
    open: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contribution", label: "Contribution" },
    { to: "/blogs", label: "Blogs" },
    { to: "/now", label: "Now" },
    { to: "/brand-assets", label: "Brand Assets" },
    { to: "/needs-wants", label: "Needs & Wants" },
  ];

  return (
    <nav className="relative z-50">
      <div className="mx-auto container px-6 py-5 flex items-center justify-between">
        <div className="text-black text-xl font-serif z-50 relative">Aditya Rao</div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-1 rounded-full border border-black/10 p-1">
          <NavLink to="/" className={getLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={getLinkClass}>
            About
          </NavLink>
          <NavLink to="/contribution" className={getLinkClass}>
            Contribution
          </NavLink>
          <NavLink to="/blogs" className={getLinkClass}>
            Blogs
          </NavLink>

          {/* MORE MENU */}
          <div className="relative group">
            <button
              className={`px-4 py-1.5 rounded-full ${moreActive
                ? "bg-[#2e2e2e] text-white"
                : "text-black/70 hover:bg-black/5"
                }`}
            >
              More
            </button>

            <div className="absolute right-0 mt-2 w-48 bg-white border border-black/10 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <NavLink
                to="/brand-assets"
                className="block px-4 py-2 text-black/70 hover:bg-black/5 rounded-lg"
              >
                Brand Assets
              </NavLink>
              <NavLink
                to="/needs-wants"
                className="block px-4 py-2 text-black/70 hover:bg-black/5 rounded-lg"
              >
                Needs & Wants
              </NavLink>
            </div>
          </div>

          {/* NOW BUTTON SPECIAL CASE */}
          <NavLink
            to="/now"
            className={({ isActive }) =>
              `px-4 py-1.5 rounded-full font-bold ${isActive
                ? "text-white bg-[#F26A4F]"
                : "text-transparent bg-clip-text bg-[#E0553B]"
              }`
            }
          >
            Now
          </NavLink>
        </div>

        {/* SOCIAL ICONS (Desktop) */}
        <div className="hidden md:flex items-center border rounded-full border-black/10">
          <a
            href="https://github.com/Jalpara"
            target="_blank"
            className="p-2 hover:bg-black/5 rounded-full"
          >
            <Icon icon="mdi:github" />
          </a>
          <a
            href="https://x.com/aditya_rawr"
            target="_blank"
            className="p-2 hover:bg-black/5 rounded-full"
          >
            <Icon icon="codicon:twitter" />
          </a>
          <a
            href="https://bsky.app/profile/raoaditya.bsky.social"
            target="_blank"
            className="p-2 hover:bg-black/5 rounded-full"
          >
            <Icon icon="ri:bluesky-fill" />
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden z-50 p-2 bg-black/5 rounded-full"
          onClick={toggleMenu}
        >
          <Icon icon={isOpen ? "mdi:close" : "mdi:menu"} className="text-2xl" />
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-white z-40 flex flex-col justify-center px-6 md:hidden"
          >
            <div className="space-y-4">
              {links.map((link) => (
                <motion.div key={link.to} variants={itemVariants}>
                  <NavLink
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block text-3xl font-serif font-medium p-4 rounded-2xl border transition-all ${isActive
                        ? "bg-black text-white border-black"
                        : "bg-gray-50 text-black border-transparent hover:bg-gray-100"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={itemVariants}
              className="mt-12 flex gap-4 justify-center"
            >
              <a href="https://github.com/Jalpara" target="_blank" className="p-4 bg-gray-50 rounded-full text-2xl"><Icon icon="mdi:github" /></a>
              <a href="https://x.com/aditya_rawr" target="_blank" className="p-4 bg-gray-50 rounded-full text-2xl"><Icon icon="codicon:twitter" /></a>
              <a href="https://bsky.app/profile/raoaditya.bsky.social" target="_blank" className="p-4 bg-gray-50 rounded-full text-2xl"><Icon icon="ri:bluesky-fill" /></a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
