import React from 'react';
import { BiLogoGithub, BiLogoGoogle } from 'react-icons/bi';
import UseAuth from '../../../Hooks/UseAuth';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosInstance from '../../../Hooks/useAxiosInstance';

const SocialLogin = () => {
    let { googleLogin, gitLogin } = UseAuth();
    let navigate = useNavigate();
    let location = useLocation();
    let axiosInstance = useAxiosInstance();


    let handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                let userDetails = { name: user?.displayName, email: user?.email, role: "user" }
                axiosInstance.post("/registeredUsers", userDetails)
                    .then(res => console.log(res.data));
                toast.success('Logged In Successfully!', {
                    duration: 3000,
                });
                navigate(location?.state ? location.state : '/');
            }).catch((error) => {
                console.log(error);
            });
    }

    let handleGithubLogin = () => {
        gitLogin()
            .then((result) => {
                const user = result.user;
                console.log(user);
                toast.success('Logged In Successfully!', {
                    duration: 3000,
                });
                navigate(location?.state ? location.state : '/');
            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className='flex gap-5 justify-center items-center mt-3'>
            <div onClick={handleGoogleLogin} className='border-2 border-[#444] rounded-full p-2 cursor-pointer'>
                <BiLogoGoogle className='text-[#444] font-bold text-2xl'></BiLogoGoogle>
            </div>
            <div onClick={handleGithubLogin} className='border-2 border-[#444] rounded-full p-2 cursor-pointer'>
                <BiLogoGithub className='text-[#444] font-bold text-2xl'></BiLogoGithub>
            </div>
        </div>
    );
};

export default SocialLogin;