import React from 'react';
import { NavLink } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import { FaShoppingCart } from "react-icons/fa";
import useCartData from '../../Hooks/useCartData';
import useAdmin from '../../Hooks/useAdmin';
import useAxiosInstance from '../../Hooks/UseAxiosInstance';

const Navbar = () => {
    const headerStyle = {
        fontFamily: "'Cinzel', serif",
    };

    let [cartData, refetch] = useCartData();
    let { loggedInUser, logOut } = UseAuth();
    let axiosInstance = useAxiosInstance();

    let handleLogout = () => {
        logOut()
            .then(() => {
                axiosInstance.post("/logout", loggedInUser?.email)
                    .then((res) => console.log(res.data))
                    .catch((error) => console.log(error));
                console.log("Logged Out Successfully");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    let [admin] = useAdmin();


    return (
        <div className='bg-black fixed w-full bg-opacity-50 z-50'>
            <div className='flex items-center justify-between w-[92%] mx-auto py-3'>
                <div>
                    <h2 className='text-2xl font-black text-white' style={headerStyle}>BISTRO BOSS</h2>
                    <h2 className='text-lg font-bold text-white tracking-[6px]' style={headerStyle}>RESTAURANT</h2>
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

                    {
                        admin ?
                            <NavLink
                                to={"/admin/home"}
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "font-bold text-base text-[#EEFF25]" : "text-white font-bold text-base"
                                }
                            >
                                DASHBOARD
                            </NavLink>
                            :
                            ""
                    }

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

                    {loggedInUser ? (
                        <NavLink
                            to="/user/cart"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? "font-bold text-base text-[#EEFF25]"
                                        : "text-white font-bold text-base"
                            }
                        >
                            <div className="flex gap-2 items-center relative">
                                <p>USER HOME</p>
                                <div className="p-2 bg-[#006837] border flex justify-center items-center border-[#f7931e] rounded-full">
                                    <FaShoppingCart />
                                </div>
                                <div className="bg-[#ff0000] rounded-full absolute px-2 py-0 -right-3 top-5">
                                    <p className="text-white text-sm">{cartData?.length}</p>
                                </div>
                            </div>
                        </NavLink>
                    )
                        :
                        (
                            ""
                        )}

                    {/* <button onClick={() => refetch()} className="text-white font-bold text-base">
                        Refetch Cart
                    </button> */}

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
        </div >
    );
};

export default Navbar;
