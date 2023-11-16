import React, { useState } from 'react';
import SectionHeader from '../../Shared/Section Header/SectionHeader';
import ReCAPTCHA from "react-google-recaptcha";
import { PiTelegramLogo } from "react-icons/pi";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
    let [captchaValue, setCaptchaValue] = useState(null);
    let navigate = useNavigate();

    function onChange(value) {
        setCaptchaValue(value);
    }

    let handleContactForm = (e) => {
        e.preventDefault();
        if (captchaValue) {
            toast.success("Message Sent");
            navigate("/")
        }
        else {
            toast.error("Please Sign Captcha")
        }
    }

    return (
        <div className='my-6 w-[70%] mx-auto'>
            <SectionHeader primaryText={"CONTACT FORM"} seconddaryText={"---Send Us a Message---"}></SectionHeader>
            <div>
                <form className='bg-[#F3F3F3] py-14 px-14'>
                    <div className='flex gap-4 w-full'>
                        <div className='flex-1'>
                            <label className='text-lg font-semibold text-[#444]' htmlFor="name">Name*</label> <br />
                            <input name='name' className='py-3 px-2 w-full bg-white rounded-md mt-2' type="text" placeholder='Enter Your Name' required />
                        </div>

                        <div className='flex-1'>
                            <label className='text-lg font-semibold text-[#444]' htmlFor="email">Email*</label> <br />
                            <input name='email' className='py-3 px-2 w-full bg-white rounded-md mt-2' type="email" placeholder='Enter Your Email' required />
                        </div>
                    </div>
                    <div>
                        <div className='mt-3'>
                            <label className='text-lg font-semibold text-[#444]' htmlFor="phone">Phone Number*</label> <br />
                            <input name='phone' className='py-3 px-2 w-full bg-white rounded-md mt-2' type="tel" placeholder='Enter Your Phone Number' required />
                        </div>
                    </div>
                    <div>
                        <div className='mt-3'>
                            <label className='text-lg font-semibold text-[#444]' htmlFor="message">Message*</label> <br />
                            <input name='message' className='pt-3 pb-32 px-2 w-full bg-white rounded-md mt-2' type="text" placeholder='Enter Your Message' required />
                        </div>
                    </div>

                    <div className='mt-5'>
                        <ReCAPTCHA
                            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                            onChange={onChange}
                        />
                    </div>

                    <div className='mt-5 flex justify-center items-center'>
                        <button onClick={handleContactForm} className='px-5 py-2 bg-[#B58130] border-2 border-[#B58130] text-white font-bold hover:bg-transparent hover:text-[#B58130] flex gap-2 justify-center items-center'>
                            <p>Send Message</p>
                            <PiTelegramLogo />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;