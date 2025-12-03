import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="relative flex flex-col justify-center items-center min-h-[80vh] text-center text-black overflow-hidden">
            {/* Background Goose */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
                <Icon icon="game-icons:goose" className="text-[20rem] md:text-[40rem]" />
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-6 px-6">
                <h1 className="font-serif text-6xl md:text-9xl">404</h1>
                <div className="space-y-2">
                    <p className="text-2xl font-serif italic">Honk! Page not found.</p>
                    <p className="opacity-60 max-w-md mx-auto">
                        The goose seems to have stolen this page.
                        Let's get you back to safety.
                    </p>
                </div>

                <div className="pt-4">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-primary transition duration-300"
                    >
                        <Icon icon="mdi:home-outline" className="text-xl" />
                        <span>Go Home</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
