import React from 'react';

const ListedMenu = ({ item }) => {
    const headerStyle = {
        fontFamily: "'Cinzel', serif",
    };
    return (
        <div className='flex justify-between gap-6 items-center'>
            <div>
                <img className='w-[90px] object-cover h-[65px] rounded-tr-full rounded-br-full rounded-bl-full bg-gray-300' src={item.image} alt="" />
            </div>
            <div>
                <div className='flex justify-between'>
                    <h3 style={headerStyle} className='text-[#151515]'>{item.name}------------------</h3>
                    <p style={headerStyle} className='text-[#BB8506]'>${item.price}</p>
                </div>
                <h3 className='text-[#737373] text-sm'>{item.recipe}</h3>
            </div>
        </div>
    );
};

export default ListedMenu;