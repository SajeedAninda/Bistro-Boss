import React from 'react';
import SaladBanner from './SaladBanner';
import ListedMenu from '../../Shared/ListedMenu';
import UseMenu from '../../../Hooks/UseMenu';

const Salad = () => {
    let menu = UseMenu();
    let salad = menu.filter(item => item.category === "salad").slice(0, 8);
    return (
        <div>
            <SaladBanner></SaladBanner>
            <div className='py-12'>
                <div className='grid grid-cols-2 gap-6 gap-y-10 w-[70%] mx-auto'>
                    {
                        salad.map(item => <ListedMenu item={item}></ListedMenu>)
                    }
                </div>
                <div className='flex justify-center mt-8'>
                    <button className='bg-white px-4 py-2 text-[#1F2937] border-b-4 border-[#1F2937] rounded-xl hover:bg-[#1F2937] hover:text-white'>
                        Order Your Favourite Food
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Salad;