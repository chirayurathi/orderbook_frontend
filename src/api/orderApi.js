import axios from '../axios';

export const getOrders = async ()=>{
    let response = await axios.get('orders/');
    return response.data;
}

export const addOrder = (body)=>{
    return axios.post('orders/create',body);
}

export const addCustomer = (body)=>{
    return axios.post('customers/create',body);
}

export const addItem = (body)=>{
    return axios.post('items/create',body);
}

export const updateItem = (id,body)=>{
    return axios.put(`items/${id}`,body);
}

