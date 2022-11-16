import React from 'react';
import { useStyles } from '../static/MiniDrawerStyles';
import { Grid, Typography } from '@material-ui/core';
import CustomerTable from '../component/CustomerTable';
import AddCustomerModal from '../component/AddCustomerModal';

export const Customers = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <Grid container sx={{padding:"20px"}}>
            <Grid container item justifyContent='space-between' alignItems='center'>
                <Grid item>
                    <Typography variant='h3'>
                        Customers
                    </Typography>
                </Grid>
                <Grid item>
                    <AddCustomerModal open={open} setOpen={setOpen}/>
                </Grid>
            </Grid>
            <Grid container item>
                <CustomerTable/>
            </Grid>
        </Grid>
    );
}