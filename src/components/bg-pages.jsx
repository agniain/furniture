import React from 'react';

const BGPages = ({ children }) => {
    return (
        <div className="relative flex flex-col overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    className="w-full h-56 md:h-72 object-cover"
                    src="/images/image-4.png"
                    alt="Background"
                />
            </div>
            <div className="relative z-10 flex-1">
                {children}
            </div>
        </div>
    );
};

export default BGPages;
