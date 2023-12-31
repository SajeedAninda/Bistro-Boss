import React from 'react';
import MenuBanner from '../Components/Menu Components/Menu Banner/MenuBanner';
import TodaysOffer from '../Components/Menu Components/Todays Offer/TodaysOffer';
import Deserts from '../Components/Menu Components/Deserts/Deserts';
import Pizza from '../Components/Menu Components/Pizza/Pizza';
import Salad from '../Components/Menu Components/Salads/Salad';
import Soup from '../Components/Menu Components/Soups/Soup';
import { Helmet } from 'react-helmet-async';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <MenuBanner></MenuBanner>
            <TodaysOffer></TodaysOffer>
            <Deserts></Deserts>
            <Pizza></Pizza>
            <Salad></Salad>
            <Soup></Soup>
        </div>
    );
};

export default Menu;