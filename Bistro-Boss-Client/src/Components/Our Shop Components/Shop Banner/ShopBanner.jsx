import React from 'react';
import "./shopBanner.css"

const ShopBanner = () => {
    const headerStyle = {
        fontFamily: "'Cinzel', serif",
    };


    return (
        <div className='flex justify-center items-center h-[90vh] shopBanner'>
            <div className='bg-black px-80 py-28 bg-opacity-60'>
                <h1 style={headerStyle} className='text-white font-bold text-5xl'>OUR SHOP</h1>
                <h2 style={headerStyle} className='text-white font-semibold text-lg'>Would you like to try a dish?</h2>
            </div>
        </div>
    );
};

export default ShopBanner;