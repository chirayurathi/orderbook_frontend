
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import useAxios from '../hooks/useAxios';

const columns = [
  { field: 'id',
   headerName: 'Order ID', 
   minWidth: 90,
   flex:1
 },
  {
    field: 'name',
    headerName: 'Customer Name',
    minWidth: 150,
    flex:1,
  },
  {
    field: 'number',
    headerName: 'Phone Number',
    minWidth: 150,
    flex:1,
  },
];

export default function OrderTable() {
  const [rows, setRows] = React.useState([]);
  const {response, error, loading} = useAxios({
    method:'get',
    url:'customers/'
  })
  console.log(error);
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
      />
    </div>
  );
}
