import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UseMenu = () => {
    let [menu, setMenu] = useState([]);

    useEffect(() => {
        axios.get("./menu.json")
            .then(res => setMenu(res.data));
    }, [])

    return menu;
};

export default UseMenu;