import React from 'react';
import { Icon } from '@iconify/react';

const Blogs = () => {
    return (
        <div className="relative flex flex-col justify-center items-center min-h-[80vh] text-center text-black overflow-hidden">
            {/* Background Goose */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
                <Icon icon="game-icons:goose" className="text-[20rem] md:text-[40rem]" />
            </div>

            <div className="relative z-10 space-y-4 px-6">
                <h1 className="font-serif text-5xl md:text-7xl">Coming Soon</h1>
                <p className="text-lg md:text-xl opacity-60 max-w-lg mx-auto">
                    We're working hard to bring you something amazing.
                    <br />Watch this space.
                </p>
            </div>
        </div>
    );
};

export default Blogs;
