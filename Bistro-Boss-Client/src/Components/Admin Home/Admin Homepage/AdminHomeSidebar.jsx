import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { FaMoneyCheck } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdRateReview } from "react-icons/md";
import { MdOutlineEditCalendar } from "react-icons/md";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FaBasketShopping } from "react-icons/fa6";
import { MdContacts } from "react-icons/md";

const AdminHomeSidebar = () => {
    const headerStyle = {
        fontFamily: "'Cinzel', serif"
    };
    return (
        <div className='min-h-screen bg-[#D1A054] w-[20%] px-8 py-7 flex flex-col items-start'>
            <div>
                <div>
                    <h2 className='text-2xl font-black text-black' style={headerStyle}>BISTRO BOSS</h2>
                    <h2 className='text-lg font-bold text-black tracking-[6px]' style={headerStyle}>RESTAURANT</h2>
                </div>

                <div className='flex flex-col gap-4 pt-10 pb-8 border-b border-white'>
                    <NavLink
                        to={"/admin/home"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold text-base text-white" : "text-black font-bold text-base"
                        }
                    >
                        <div className='flex gap-2 items-center'>
                            <IoMdHome className='text-2xl' />
                            <p className="font-medium" style={headerStyle}>ADMIN HOME</p>
                        </div>
                    </NavLink>


                    <NavLink
                        to={"/admin/addItems"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold text-base text-white" : "text-black font-bold text-base"
                        }
                    >
                        <div className='flex gap-2 items-center'>
                            <FaCalendarAlt className='text-2xl' />
                            <p className="font-medium" style={headerStyle}>ADD ITEMS</p>
                        </div>
                    </NavLink>

                    <NavLink
                        to={"/admin/manageItems"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold text-base text-white" : "text-black font-bold text-base"
                        }
                    >
                        <div className='flex gap-2 items-center'>
                            <FaMoneyCheck className='text-2xl' />
                            <p className="font-medium" style={headerStyle}>MANAGE ITEMS</p>
                        </div>
                    </NavLink>

                    <NavLink
                        to={"/admin/manageBookings"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold text-base text-white" : "text-black font-bold text-base"
                        }
                    >
                        <div className='flex gap-2 items-center'>
                            <FaCartShopping className='text-2xl' />
                            <p className="font-medium" style={headerStyle}>MANAGE BOOKINGS</p>
                        </div>
                    </NavLink>

                    <NavLink
                        to={"/user/allUsers"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold text-base text-white" : "text-black font-bold text-base"
                        }
                    >
                        <div className='flex gap-2 items-center'>
                            <MdRateReview className='text-2xl' />
                            <p className="font-medium" style={headerStyle}>ALL USERS</p>
                        </div>
                    </NavLink>
                </div>

                <div className='pt-8 flex flex-col gap-4 '>
                    <NavLink
                        to={"/"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold text-base text-white" : "text-black font-bold text-base"
                        }
                    >
                        <div className='flex gap-2 items-center'>
                            <IoMdHome className='text-2xl' />
                            <p className="font-medium" style={headerStyle}>HOME</p>
                        </div>
                    </NavLink>


                    <NavLink
                        to={"/menu"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold text-base text-white" : "text-black font-bold text-base"
                        }
                    >
                        <div className='flex gap-2 items-center'>
                            <MdOutlineRestaurantMenu className='text-2xl' />
                            <p className="font-medium" style={headerStyle}>MENU</p>
                        </div>
                    </NavLink>


                    <NavLink
                        to={"/shop"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold text-base text-white" : "text-black font-bold text-base"
                        }
                    >
                        <div className='flex gap-2 items-center'>
                            <FaBasketShopping  className='text-2xl' />
                            <p className="font-medium" style={headerStyle}>SHOP</p>
                        </div>
                    </NavLink>


                    <NavLink
                        to={"/contact"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold text-base text-white" : "text-black font-bold text-base"
                        }
                    >
                        <div className='flex gap-2 items-center'>
                            <MdContacts  className='text-2xl' />
                            <p className="font-medium" style={headerStyle}>CONTACT</p>
                        </div>
                    </NavLink>

                </div>
            </div>
        </div>
    );
};

export default AdminHomeSidebar;