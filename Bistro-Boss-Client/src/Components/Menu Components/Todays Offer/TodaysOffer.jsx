import React from 'react';
import SectionHeader from '../../Shared/Section Header/SectionHeader';
import UseMenu from '../../../Hooks/UseMenu';
import ListedMenu from '../../Shared/ListedMenu';
import { Link } from 'react-router-dom';

const TodaysOffer = () => {
    let [menu] = UseMenu();
    let todaysOfferMenu = menu?.filter(item => item.category === "offered");
    return (
        <div className='pb-12'>
            <SectionHeader primaryText={"TODAY'S OFFER"} seconddaryText={"---Don't miss---"}></SectionHeader>
            <div className='grid grid-cols-2 gap-6 gap-y-10  w-[70%] mx-auto'>
                {
                    todaysOfferMenu?.map(item => <ListedMenu item={item}></ListedMenu>)
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
    );
};

export default TodaysOffer;