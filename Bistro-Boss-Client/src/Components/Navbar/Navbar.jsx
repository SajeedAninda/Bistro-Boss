import React from 'react';
import { NavLink } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import { FaShoppingCart } from "react-icons/fa";


const Navbar = () => {
    const headerStyle = {
        fontFamily: "'Cinzel', serif",
    };

    let { loggedInUser, logOut } = UseAuth();
    let handleLogout = () => {
        logOut()
            .then(() => {
                console.log("Logged Out Succesfully");
            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className='bg-black fixed w-full bg-opacity-50 z-50'>
            <div className='flex items-center justify-between w-[92%] mx-auto py-3'>
                <div>
                    <h2 className='text-2xl font-black text-white' style={headerStyle}>BISTRO BOSS</h2>
                    <h2 className='text-lg font-bold text-white tracking-[9px]' style={headerStyle}>RESTAURANT</h2>
                </div>

                <div className='flex gap-5 items-center'>
                    <NavLink
                        to={"/"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold text-base text-[#EEFF25]" : "text-white font-bold text-base"
                        }
                    >
                        HOME
                    </NavLink>

                    <NavLink
                        to={"/contact"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold text-base text-[#EEFF25]" : "text-white font-bold text-base"
                        }
                    >
                        CONTACT US
                    </NavLink>

                    <NavLink
                        to={"/dashboard"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold text-base text-[#EEFF25]" : "text-white font-bold text-base"
                        }
                    >
                        DASHBOARD
                    </NavLink>

                    <NavLink
                        to={"/menu"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold text-base text-[#EEFF25]" : "text-white font-bold text-base"
                        }
                    >
                        OUR MENU
                    </NavLink>

                    <NavLink
                        to={"/shop"}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold text-base text-[#EEFF25]" : "text-white font-bold text-base"
                        }
                    >
                        OUR SHOP
                    </NavLink>

                    {
                        loggedInUser ?
                            <NavLink
                                to={"/user"}
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "font-bold text-base text-[#EEFF25]" : "text-white font-bold text-base"
                                }
                            >
                                <div className='flex gap-2 items-center relative'>
                                    <p>USER HOME</p>
                                    <div className='p-2 bg-[#006837] border flex justify-center items-center border-[#f7931e] rounded-full'>
                                    <FaShoppingCart />
                                    </div>
                                    <div className='bg-[#ff0000] rounded-full absolute px-2 py-0 -right-3 top-5'>
                                        <p className='text-white text-sm'>5</p>
                                    </div>
                                </div>
                            </NavLink>
                            :
                            ""
                    }

                    <div>
                        {
                            loggedInUser ?
                                <div className='flex items-center justify-between gap-2'>
                                    <button onClick={handleLogout} className='text-white font-bold text-base'>
                                        LOGOUT
                                    </button>
                                    <img className='w-[40px] rounded-full' src={loggedInUser?.photoURL} alt="" />
                                </div>
                                :
                                <NavLink to={"/login"}>
                                    <button className='text-white font-bold text-base'>
                                        LOGIN
                                    </button>
                                </NavLink>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
