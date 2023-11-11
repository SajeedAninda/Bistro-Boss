import React, { useState } from 'react';
import ShopBanner from '../Components/Our Shop Components/Shop Banner/ShopBanner';

import ShopTabs from '../Components/Our Shop Components/Shop Tabs/ShopTabs';


const OurShop = () => {

    return (
        <div>
            <ShopBanner></ShopBanner>
            <ShopTabs></ShopTabs>
        </div>
    );
};

export default OurShop;