import React from 'react';
import Banner from '../Components/Banner/Banner';
import OrderOnline from '../Components/OrderOnline/OrderOnline';
import BistroBossText from '../Components/Bistro Boss Text/BistroBossText';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <OrderOnline></OrderOnline>
            <BistroBossText></BistroBossText>
        </div>
    );
};

export default Homepage;