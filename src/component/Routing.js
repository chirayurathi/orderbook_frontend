import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Orders } from '../pages/Orders';
import Order from '../pages/Order';
import { useStyles } from '../static/MiniDrawerStyles';
import clsx from 'clsx';
import SimpleAppBar from './SimpleAppBar';
import { Customers } from '../pages/Customers';


export const Routing = (props) => {
    const { content, toolbar, contentShift } = useStyles();
    console.log(toolbar);
    const { openSideBar } = props;

    return (
        <main className={clsx(content, {
            [contentShift]: openSideBar,
        })}>
            <SimpleAppBar />
            <Switch>
                <Route exact path='/' component={Orders} />
                <Route exact path='/customers' component={Customers} />
                <Route exact path='/order/:id' component={Order} />
            </Switch>
        </main>);
}