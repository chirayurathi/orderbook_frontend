import React from 'react';
import { Orders } from "../pages/Orders";
import { Book, Person } from "@material-ui/icons";
import { Customers } from '../pages/Customers';

export const staticMenu = [
    {
        id:1,
        menuName: 'Orders',
        menuDescription: 'order details',
        path: '/',
        component: Orders,
        exact: true,
        icon :<Book />,
        submenu:[]
    },
    {
        id:2,
        menuName: 'Customers',
        menuDescription: 'customer details',
        path: '/customers',
        component: Customers,
        exact: true,
        icon :<Person />,
        submenu:[]
    },
];