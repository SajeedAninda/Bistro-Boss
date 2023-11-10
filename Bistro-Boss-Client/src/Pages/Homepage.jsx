import React from 'react';
import Banner from '../Components/Banner/Banner';
import OrderOnline from '../Components/OrderOnline/OrderOnline';
import BistroBossText from '../Components/Bistro Boss Text/BistroBossText';
import FromOurMenu from '../Components/From Our Menu/FromOurMenu';

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <OrderOnline></OrderOnline>
            <BistroBossText></BistroBossText>
            <FromOurMenu></FromOurMenu>
        </div>
    );
};

export default Homepage;