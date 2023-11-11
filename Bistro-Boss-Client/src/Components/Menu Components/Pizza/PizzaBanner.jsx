import React from 'react';
import "./pizza.css"

const PizzaBanner = () => {
    const headerStyle = {
        fontFamily: "'Cinzel', serif",
    };


    return (
        <div className='flex justify-center items-center h-[70vh] pizzaBanner'>
            <div className='bg-black w-[70%] text-center py-28 mx-auto bg-opacity-60 space-y-3'>
                <h1 style={headerStyle} className='text-white font-bold text-5xl'>PIZZA</h1>
                <h2 style={headerStyle} className='text-white font-semibold w-[70%] mx-auto'>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h2>
            </div>
        </div>
    );
};

export default PizzaBanner;