import React from 'react';
import ContactBanner from '../Components/Contact Components/Contact Banner/ContactBanner';
import ContactDetails from '../Components/Contact Components/Contact Details/ContactDetails';
import ContactForm from '../Components/Contact Components/Contact Form/ContactForm';

const Contact = () => {
    return (
        <div>
            <ContactBanner></ContactBanner>
            <ContactDetails></ContactDetails>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Contact;