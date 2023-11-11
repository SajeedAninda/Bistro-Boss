import React from 'react';

const TabCard = ({tabItem}) => {
    return (
        <div className='mt-6 flex flex-col'>
            <img className='h-[200px] object-cover' src={tabItem.image} alt="" />
            <div className='bg-[#F3F3F3] flex justify-between items-center flex-col text-center py-8 h-[250px]'>
                <h2 className='text-lg text-[#151515] font-semibold'>{tabItem.name}</h2>
                <p className='text-[#151515] mt-2'>{tabItem.recipe}</p>
                <button className='px-4 py-3 mt-3 text-[#BB8506] bg-[#E8E8E8] rounded-md border-b-2 border-[#BB8506] hover:bg-[#1F2937] hover:border-[#1F2937]'>Add to Cart</button>
            </div>
        </div>
    );
};

export default TabCard;