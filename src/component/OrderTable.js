import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getOrders } from '../api/orderApi';
import useAxios from '../hooks/useAxios';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import UpdateOrderModal from './UpdateOrderModal';

export default function OrderTable() {
  const [sortModel, setSortModel] = React.useState([
    {
      field: 'created_at',
      sort: 'desc',
    },
  ]);
  const [selected, setSelected]= React.useState(null);
  const [rows, setRows] = React.useState([]);

const columns = [
  { field: 'id',
   headerName: 'Order ID', 
   minWidth: 80,
   flex:1
 },
  {
    field: 'customer_name',
    headerName: 'Customer Name',
    minWidth: 150,
    flex:1,
    valueGetter: (params) =>
    `${params.row.customer.name}`,
  },
  {
    field: 'customer_number',
    headerName: 'Phone Number',
    minWidth: 150,
    flex:1,
    valueGetter: (params) =>
    `${params.row.customer.number}`,
  },
  {
    field: 'due_date',
    headerName: 'Due Date',
    minWidth: 110,
    flex:1,
    type:'date'
  },
  {
    field: 'items',
    headerName: 'Items',
    minWidth: 160,
    flex:1,
    valueGetter: (params) =>{
      return `${params.row.items.length}`
    }
  },
  { 
    field: 'amount',
    headerName: 'Amount', 
    minWidth: 90,
    flex:1
  },
  {
    field:'created_at',
    headerName:"Created At",
    minWidth:90,
    flex:1,
    type:'dateTime',
    valueGetter: (params) =>{
    return `${new Date(params.row.created_at).toLocaleString()}`
    }
  },
  {
    field:'view',
    headerName:'View',
    minWidth:90,
    flex:1,
    renderCell: (params)=>(
      <Link to={`/order/${params.row.id}`}>
        <Button variant='contained' color="primary">View</Button>
      </Link>
    )
  },
  {
    field:'update',
    headerName:'Update',
    minWidth:90,
    flex:1,
    renderCell: (params)=>(
        <Button variant='contained' color="primary" onClick={()=>{setSelected(params.row)}}>View</Button>
    )
  }
  ];
  const {response, error, loading} = useAxios({
    method:'get',
    url:'orders/'
  })
  React.useEffect(()=>{
    console.log(response)
    if(loading!==true)
      setRows(response);
  },[loading])
  return (
    <div style={{ height: 400, minWidth: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        sortModel={sortModel}
        onSortModelChange={(model) => setSortModel(model)}
      />
      {selected!==null && <UpdateOrderModal order={selected} setOpen={setSelected} />}
    </div>
  );
}
