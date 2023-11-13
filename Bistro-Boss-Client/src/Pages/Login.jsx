import React from 'react';
import backgroundImage from "../../src/assets/others/authentication.png"
import authImg from "../../src/assets/others/authentication2.png"
import { Link } from 'react-router-dom';

const Login = () => {
    const divStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
    };
    const shadowedDiv = {
        backgroundImage: `url(${backgroundImage})`,
        boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.25)'
    };

    return (
        <div style={divStyle} className='min-h-screen flex justify-center items-center py-20'>
            <div style={shadowedDiv} className='w-[90%] px-20 py-12 flex justify-center items-center flex-row-reverse' >
                <div className='flex-1'>
                    <div className='text-center'>
                        <h1 className='text-[#151515] text-3xl font-bold'>Login </h1>
                    </div>
                    <form>
                        <div>
                            <label className='text-[#444] font-semibold' htmlFor="name">Name</label> <br />
                            <input className='py-3 px-4 placeholder:text-sm mt-2 w-full rounded-md' type="text" name='name' placeholder='Type your name' required />
                        </div>

                        <div className='mt-5'>
                            <label className='text-[#444] font-semibold' htmlFor="name">Email</label> <br />
                            <input className='py-3 px-4 placeholder:text-sm mt-2 w-full rounded-md' type="email" name='email' placeholder='Type your email' required />
                        </div>

                        <div className='mt-5'>
                            <label className='text-[#444] font-semibold' htmlFor="name">Photo URL</label> <br />
                            <input className='py-3 px-4 placeholder:text-sm mt-2 w-full rounded-md' type="text" name='photoUrl' placeholder='Enter a Photo Url' required />
                        </div>

                        <div className='mt-5'>
                            <label className='text-[#444] font-semibold' htmlFor="name">Password</label> <br />
                            <input className='py-3 px-4 placeholder:text-sm mt-2 w-full rounded-md' type="password" name='password' placeholder='Enter Your Password' required />
                        </div>

                        <button className='w-full py-3 text-white border-2 border-[#D1A054] font-bold bg-[#D1A054] mt-5 rounded-md hover:bg-transparent hover:border-2 hover:border-[#D1A054] hover:text-[#D1A054]' type="submit">Login</button>
                        <p className='text-[#D1A054] font-medium text-center mt-3'>New Here? <span><Link className='font-bold hover:underline' to={"/register"}>Create a New Account</Link></span></p>
                    </form>
                </div>

                <div className='flex-1'>
                    <img src={authImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;