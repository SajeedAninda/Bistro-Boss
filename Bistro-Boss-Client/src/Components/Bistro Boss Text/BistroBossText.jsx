import React from 'react';
import "./bistro.css"

const BistroBossText = () => {
    const headerStyle = {
        fontFamily: "'Cinzel', serif",
    };
    return (
        <div className='w-[70%] my-20 mx-auto'>
            <div className='py-16 px-20 bg'>
                <div className='flex justify-center items-center space-y-3 flex-col bg-white py-12 px-16'>
                    <h1 style={headerStyle} className='text-[#151515] text-3xl text-center' >Bistro Boss</h1>
                    <p className='text-[#151515] text-center w-[70%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </div>
    );
};

export default BistroBossText;