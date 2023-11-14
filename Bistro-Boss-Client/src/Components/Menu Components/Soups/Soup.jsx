import React from 'react';
import SoupBanner from './SoupBanner';
import ListedMenu from '../../Shared/ListedMenu';
import UseMenu from '../../../Hooks/UseMenu';
import { Link } from 'react-router-dom';

const Soup = () => {
    let menu = UseMenu();
    let soup = menu?.filter(item => item.category === "soup").slice(0, 6);
    return (
        <div>
            <SoupBanner></SoupBanner>
            <div className='py-12'>
                <div className='grid grid-cols-2 gap-6 gap-y-10 w-[70%] mx-auto'>
                    {
                        soup?.map(item => <ListedMenu item={item}></ListedMenu>)
                    }
                </div>
                <div className='flex justify-center mt-8'>
                    <Link to={"/shop"}>
                        <button className='bg-white px-4 py-2 text-[#1F2937] border-b-4 border-[#1F2937] rounded-xl hover:bg-[#1F2937] hover:text-white'>
                            Order Your Favourite Food
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Soup;