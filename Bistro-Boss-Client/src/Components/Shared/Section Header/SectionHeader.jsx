import React from 'react';

const SectionHeader = ({primaryText,seconddaryText}) => {
    return (
        <div className='pt-12 pb-6 w-[30%] mx-auto text-center '>
            <h3 className='text-[#D99904] pb-2'><em>{seconddaryText}</em></h3>
            <h2 className='text-3xl py-2 text-[#151515] border-y-2 border-[#E8E8E8]'>{primaryText}</h2>
        </div>
    );
};

export default SectionHeader;