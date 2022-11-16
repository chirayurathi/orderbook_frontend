import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import OrderTable from '../component/OrderTable';
import AddOrderModal from '../component/AddOrderModal';

export const Orders = () => {
    return (
        <Grid container sx={{padding:"20px"}}>
            <Grid container item justifyContent='space-between' alignItems='center'>
                <Grid item>
                    <Typography variant='h3'>
                        Orders
                    </Typography>
                </Grid>
                <Grid item>
                    <AddOrderModal/>

                </Grid>
            </Grid>
            <Grid container item>
                <OrderTable/>
            </Grid>
        </Grid>
    );
}