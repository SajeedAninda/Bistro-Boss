import React from 'react';
import backgroundImage from "../../src/assets/others/authentication.png"
import authImg from "../../src/assets/others/authentication2.png"
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import UseAuth from '../Hooks/UseAuth';

const Register = () => {
    let { signUp, profileUpdate, logOut } = UseAuth();
    let navigate = useNavigate();


    const divStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
    };
    const shadowedDiv = {
        backgroundImage: `url(${backgroundImage})`,
        boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.25)'
    };

    let handleRegister = (e) => {
        e.preventDefault();
        let name = e.target.name.value;
        let email = e.target.email.value;
        let photoUrl = e.target.photoUrl.value;
        let password = e.target.password.value;

        const loadingToast = toast.loading('Registering...');

        if (password.length < 6) {
            return toast.error("Password Length should atleast be 6 Characters!")
        }

        if (!/[A-Z]/.test(password)) {
            return toast.error("Password should contain at least one capital letter!")
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            return toast.error("Password should contain at least one special character!")
        }

        signUp(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                profileUpdate(name, photoUrl)
                    .then(() => {
                        logOut()
                            .then(() => {
                                console.log("Logged out after sign up");
                            }).catch((error) => {
                                console.log(error);
                            });
                            toast.success('Registration Successful! Please Login Now',{
                                duration: 4000,
                            });
                            toast.dismiss(loadingToast);
                    }).catch((error) => {
                        console.log(error);
                    });
                navigate('/login');
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                if (errorCode === "auth/email-already-in-use") {
                    toast.dismiss(loadingToast);
                    return toast.error("Email is already being used");
                }
            });

    }


    return (
        <div style={divStyle} className='min-h-screen flex justify-center items-center py-20'>
            <div style={shadowedDiv} className='w-[90%] px-20 py-12 flex justify-center items-center' >
                <div className='flex-1'>
                    <div className='text-center'>
                        <h1 className='text-[#151515] text-3xl font-bold'>Sign Up </h1>
                    </div>
                    <form onSubmit={handleRegister}>
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

                        <button className='w-full py-3 text-white border-2 border-[#D1A054] font-bold bg-[#D1A054] mt-5 rounded-md hover:bg-transparent hover:border-2 hover:border-[#D1A054] hover:text-[#D1A054]' type="submit">Sign Up</button>
                        <p className='text-[#D1A054] font-medium text-center mt-3'>Already registered? Go to <span><Link className='font-bold hover:underline' to={"/login"}>Login</Link></span></p>
                    </form>
                </div>

                <div className='flex-1'>
                    <img src={authImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Register;