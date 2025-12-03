import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const quotes = [
    "The body achieves what the mind believes.",
    "Consistency is the key to mastery.",
    "Simplicity is the ultimate sophistication.",
    "Create more than you consume.",
    "Focus on the process, not the outcome.",
    "Growth happens outside your comfort zone.",
    "Design is intelligence made visible.",
    "Code is poetry written for machines.",
    "Stay hungry, stay foolish.",
    "Make it work, make it right, make it fast."
];

const Loader = ({ onComplete }) => {
    const [quote, setQuote] = useState("");

    useEffect(() => {
        setQuote(quotes[Math.floor(Math.random() * quotes.length)]);

        const timer = setTimeout(() => {
            onComplete();
        }, 2500); // Show loader for 2.5 seconds

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#f5f5f5] text-black"
            initial={{ y: 0 }}
            exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
            <div className="max-w-xl px-6 text-center space-y-8">
                <motion.p
                    className="text-2xl md:text-3xl font-serif italic leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    "{quote}"
                </motion.p>

                <motion.div
                    className="flex items-center justify-center gap-2 opacity-50 text-sm uppercase tracking-widest"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    <span>Loading</span>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Loader;
