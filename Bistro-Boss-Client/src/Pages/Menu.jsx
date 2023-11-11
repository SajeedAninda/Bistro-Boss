import React from 'react';
import MenuBanner from '../Components/Menu Components/Menu Banner/MenuBanner';
import TodaysOffer from '../Components/Menu Components/Todays Offer/TodaysOffer';
import Deserts from '../Components/Menu Components/Deserts/Deserts';

const Menu = () => {
    return (
        <div>
            <MenuBanner></MenuBanner>
            <TodaysOffer></TodaysOffer>
            <Deserts></Deserts>
        </div>
    );
};

export default Menu;