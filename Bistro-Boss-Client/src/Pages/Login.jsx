import React, { useEffect } from 'react';
import backgroundImage from "../../src/assets/others/authentication.png"
import authImg from "../../src/assets/others/authentication2.png"
import { Link, useNavigate } from 'react-router-dom';
import UseAuth from '../Hooks/UseAuth';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import toast from 'react-hot-toast';


const Login = () => {
    let { signIn } = UseAuth();
    let navigate = useNavigate();

    const divStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
    };
    const shadowedDiv = {
        backgroundImage: `url(${backgroundImage})`,
        boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.25)'
    };

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    let handleSubmit = (e) => {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;
        let captchaValue = e.target.captchaText.value;

        const loadingToast = toast.loading('Registering...');

        if (validateCaptcha(captchaValue) == true) {
            signIn(email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                    toast.success('Logged In Successfully!', {
                        duration: 3000,
                    });
                    toast.dismiss(loadingToast);

                    navigate(location?.state ? location.state : '/');
                })
                .catch((error) => {
                    let errorCode = error.code;
                    if (errorCode === "auth/invalid-login-credentials") {
                        toast.dismiss(loadingToast);
                        return toast.error("Invalid Username or Password")
                    }
                });
        }

        else {
            toast.dismiss(loadingToast);
            return toast.error("Captcha Doesn't Match. Please Try Again")
        }
    }

    return (
        <div style={divStyle} className='min-h-screen flex justify-center items-center py-20'>
            <div style={shadowedDiv} className='w-[90%] px-20 py-12 flex justify-center items-center flex-row-reverse' >
                <div className='flex-1'>
                    <div className='text-center'>
                        <h1 className='text-[#151515] text-3xl font-bold'>Login </h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className=''>
                            <label className='text-[#444] font-semibold' htmlFor="name">Email</label> <br />
                            <input className='py-3 px-4 placeholder:text-sm mt-2 w-full rounded-md' type="email" name='email' placeholder='Type your email' required />
                        </div>

                        <div className='mt-5'>
                            <label className='text-[#444] font-semibold' htmlFor="name">Password</label> <br />
                            <input className='py-3 px-4 placeholder:text-sm mt-2 w-full rounded-md' type="password" name='password' placeholder='Enter Your Password' required />
                        </div>

                        <div className='mt-5'>
                            <LoadCanvasTemplate />
                        </div>

                        <div className=''>
                            <input className='py-3 px-4 placeholder:text-sm mt-2 w-full rounded-md' type="text" name='captchaText' placeholder='Type The Captcha here' required />
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