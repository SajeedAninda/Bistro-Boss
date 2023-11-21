import React, { useEffect, useState } from 'react';
import SectionHeader from '../Shared/Section Header/SectionHeader';
import { Link } from 'react-router-dom';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const FromOurMenu = () => {
    const headerStyle = {
        fontFamily: "'Cinzel', serif",
    };
    let [menu, setMenu] = useState([]);
    let axiosPublic = useAxiosPublic();

    useEffect(() => {
        axiosPublic.get("/menu")
            .then(res => setMenu(res.data));
    }, [])
    let popularMenu = menu.filter(popular => popular.category === "popular");
    return (
        <div className=' w-[70%] mx-auto '>
            <div>
                <SectionHeader primaryText={"FROM OUR MENU"} seconddaryText={"---Check it out---"}></SectionHeader>
            </div>
            <div className='grid grid-cols-2 gap-6 gap-y-10'>
                {
                    popularMenu.map(item =>
                        <div className='flex justify-between gap-6 items-center'>
                            <div>
                                <img className='w-[90px] h-[65px] rounded-tr-full rounded-br-full rounded-bl-full bg-gray-300' src={item.image} alt="" />
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <h3 style={headerStyle} className='text-[#151515]'>{item.name}------------------</h3>
                                    <p style={headerStyle} className='text-[#BB8506]'>${item.price}</p>
                                </div>
                                <h3 className='text-[#737373] text-sm'>{item.recipe}</h3>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className='flex justify-center mt-8'>
                <Link to={"/menu"}><button className='bg-white px-4 py-2 text-[#1F2937] border-b-4 border-[#1F2937] rounded-xl hover:bg-[#1F2937] hover:text-white'>
                    VIEW FULL MENU
                </button></Link>
            </div>
        </div>
    );
};

export default FromOurMenu;