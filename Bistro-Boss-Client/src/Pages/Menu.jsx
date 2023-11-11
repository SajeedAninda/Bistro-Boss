import React from 'react';
import MenuBanner from '../Components/Menu Components/Menu Banner/MenuBanner';
import TodaysOffer from '../Components/Menu Components/Todays Offer/TodaysOffer';
import Deserts from '../Components/Menu Components/Deserts/Deserts';
import Pizza from '../Components/Menu Components/Pizza/Pizza';

const Menu = () => {
    return (
        <div>
            <MenuBanner></MenuBanner>
            <TodaysOffer></TodaysOffer>
            <Deserts></Deserts>
            <Pizza></Pizza>
        </div>
    );
};

export default Menu;