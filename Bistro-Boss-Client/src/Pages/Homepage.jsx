import React from 'react';
import Banner from '../Components/Banner/Banner';
import OrderOnline from '../Components/OrderOnline/OrderOnline';
import BistroBossText from '../Components/Bistro Boss Text/BistroBossText';
import FromOurMenu from '../Components/From Our Menu/FromOurMenu';
import CallUs from '../Components/Call Us/CallUs';
import ChefRecommends from '../Components/Chef Recommends/ChefRecommends';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <OrderOnline></OrderOnline>
            <BistroBossText></BistroBossText>
            <FromOurMenu></FromOurMenu>
            <CallUs></CallUs>
            <ChefRecommends></ChefRecommends>
        </div>
    );
};

export default Homepage;