import React from 'react';
import Banner from '../Components/Banner/Banner';
import OrderOnline from '../Components/OrderOnline/OrderOnline';
import BistroBossText from '../Components/Bistro Boss Text/BistroBossText';
import FromOurMenu from '../Components/From Our Menu/FromOurMenu';
import CallUs from '../Components/Call Us/CallUs';
import ChefRecommends from '../Components/Chef Recommends/ChefRecommends';
import OurMenu from '../Components/Our Menu/OurMenu';
import Testimonial from '../Components/Testimonial/Testimonial';
import { Helmet } from 'react-helmet-async';

const Homepage = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <OrderOnline></OrderOnline>
            <BistroBossText></BistroBossText>
            <FromOurMenu></FromOurMenu>
            <CallUs></CallUs>
            <ChefRecommends></ChefRecommends>
            <OurMenu></OurMenu>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Homepage;