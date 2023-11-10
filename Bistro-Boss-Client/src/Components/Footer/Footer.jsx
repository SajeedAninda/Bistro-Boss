import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { FaSquareXTwitter } from 'react-icons/fa6';


const Footer = () => {
    return (
        <div className='flex h-[40vh]'>
            <div className='bg-[#1F2937] flex-1 flex justify-center items-center flex-col text-center text-white'>
                <h1 className='text-center text-xl pb-5'>CONTACT US</h1>
                <p>
                    123 ABS Street, Uni 21, Bangladesh <br />
                    +88 123456789 <br />
                    Mon - Fri: 08:00 - 22:00 <br />
                    Sat - Sun: 10:00 - 23:00 <br />
                </p>
            </div>

            <div className='bg-[#111827] flex-1 flex justify-center items-center flex-col text-center text-white gap-3'>
                <h1 className='text-xl pb-5'>Follow US</h1>
                <p>
                Join us on social media
                </p>
                <div className='flex gap-4 text-2xl'>
                    <FaFacebookF></FaFacebookF>
                    <BsInstagram></BsInstagram>
                    <FaSquareXTwitter></FaSquareXTwitter>
                </div>
            </div>
        </div>
    );
};

export default Footer;