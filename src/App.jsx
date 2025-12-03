import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Home from './pages/Home';
import About from './pages/About';
import Contribution from './pages/Contribution';
import Blogs from './pages/Blogs';
import Now from './pages/Now';
import BrandAssets from './pages/BrandAssets';
import NeedsWants from './pages/NeedsWants';
import NotFound from './pages/NotFound';
import Loader from './components/Loader';
import PageTransition from './components/PageTransition';
import './App.css';
import "leaflet/dist/leaflet.css";

// Separate component for Routes to use useLocation hook
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/contribution" element={<PageTransition><Contribution /></PageTransition>} />
        <Route path="/blogs" element={<PageTransition><Blogs /></PageTransition>} />
        <Route path="/now" element={<PageTransition><Now /></PageTransition>} />
        <Route path="/brand-assets" element={<PageTransition><BrandAssets /></PageTransition>} />
        <Route path="/needs-wants" element={<PageTransition><NeedsWants /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </motion.div>
      )}
    </Router>
  );
}

export default App;
