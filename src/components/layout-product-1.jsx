import React from 'react';

const LayoutProduct1 = ({ children }) => {
    return (
        <div className="relative min-h-screen flex flex-col overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    className="w-full h-full object-cover"
                    src="/images/image-3.png"
                    alt="Background"
                />
            </div>
            <div className="relative z-10 flex-1">
                {children}
            </div>
        </div>
    );
};

export default LayoutProduct1;
