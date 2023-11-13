import React from 'react';
import { NavLink } from 'react-router-dom';
import cartLogo from "../../assets/icon/cart.png"
import UseAuth from '../../Hooks/UseAuth';

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
                        <div className='flex  items-center'>
                            <p>OUR SHOP</p>
                            <img className='w-[30px]' src={cartLogo} alt="" />
                        </div>
                    </NavLink>

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
