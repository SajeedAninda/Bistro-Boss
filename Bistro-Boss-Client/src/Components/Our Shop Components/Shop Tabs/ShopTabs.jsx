import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../../../Hooks/UseMenu';
import TabCard from './TabCard';


const ShopTabs = () => {
    const [tabIndex, setTabIndex] = useState(0);
    let menu = UseMenu();
    let salad = menu?.filter(item => item.category === "salad");
    let pizza = menu?.filter(item => item.category === "pizza");
    let soup = menu?.filter(item => item.category === "soup");
    let deserts = menu?.filter(item => item.category === "dessert");
    let drinks = menu?.filter(item => item.category === "drinks");

    return (
        <div className='text-center text-[#BB8506] mt-12 w-[70%] mx-auto'>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <div className='grid grid-cols-3 gap-6 py-12 mb-20'>
                        {
                            salad?.map(item => <TabCard tabItem={item}></TabCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3 gap-6 py-12 mb-20'>
                        {
                            pizza?.map(item => <TabCard tabItem={item}></TabCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3 gap-6 py-12 mb-20'>
                        {
                            soup?.map(item => <TabCard tabItem={item}></TabCard>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid grid-cols-3 gap-6 py-12 mb-20'>
                        {
                            deserts?.map(item => <TabCard tabItem={item}></TabCard>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className='grid grid-cols-3 gap-6 py-12 mb-20'>
                        {
                            drinks?.map(item => <TabCard tabItem={item}></TabCard>)
                        }
                    </div>
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default ShopTabs;