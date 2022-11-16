import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import AddItemModal from '../component/AddItemModal';
import AddOrderModal from '../component/AddOrderModal';
import ItemTable from '../component/ItemTable';
import useAxios from '../hooks/useAxios';

const Order = ()=>{
    const params = useParams()
    const {response, error, loading} = useAxios({
        method:'get',
        url:`orders/${params.id}`
    })
    console.log(response)
    return(
        response?
        <Grid container spacing={3}>
            <Grid container item xs={12} justifyContent='space-between' alignItems='center'>
                <Grid item>
                    <Typography variant='h3'>
                        Order ID: {response.id}
                    </Typography>
                </Grid>
                <Grid item>
                    <AddItemModal orderId={response.id}/>
                </Grid>
            </Grid>
            <Grid item>
                <Typography variant='h6'>
                    Customer: {response.customer.name} - {response.customer.number}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant='h3'>
                    Items
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <ItemTable rows={response.items}/>
            </Grid>
        </Grid>:
        <></>
    )
}

export default Order;