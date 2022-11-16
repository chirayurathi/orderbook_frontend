import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Grid } from "@material-ui/core";
import useAxios from "../hooks/useAxios";
import { addOrder } from "../api/orderApi";
import AddCustomerModal from "./AddCustomerModal";


export default function UpdateOrderModal({order,setOpen}) {
  const [value, setValue] = React.useState(null);
  const [amt, setAmt] = React.useState(order.amount);
  const [init, ] = React.useState(null);
  const [date, setDate] = React.useState(order.date);
  const [customerOpen, toggleCustomerOpen] = React.useState(false);
  const { response,} = useAxios({
    url: "customers/",
    method: "get",
  });
  React.useEffect(()=>{
    console.log(order);
    if(response){
    setValue(order.customer);
    setAmt(order.amount);
    setDate(order.due_date);
    }
  },[order,response]);
  const handleClose = () => {
    setOpen(null);
  };
  const onSubmit = ()=>{
    console.log(value);
    console.log(amt);
    console.log(date);
    let body ={
        customer_id:value.id,
        amount:amt,
        due_date:date
    }
    addOrder(body).then((response)=>{
        console.log(response)
        handleClose();
    })
  }

  return (
    <div>
      <Dialog
        open={order===null?false:true}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        size="md"
      >
        <DialogTitle id="form-dialog-title">Update Order</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill in the details to update this order.
          </DialogContentText>
          <Grid container>
            {/* {response && 
            <Grid item xs={5}>
              <Autocomplete
                fullWidth
                value={value}
                onChange={(event, newValue) => {
                    console.log("newval",newValue)

                  if (typeof newValue === "string") {
                    setTimeout(() => {
                        toggleCustomerOpen(true);
                        setInit(newValue);
                    });
                  } else if (newValue && newValue.inputValue) {
                    toggleCustomerOpen(true);
                  } else {
                    setValue(newValue);
                  }
                }}
                filterOptions={(options, params) => {
                  const filtered = filter(options, params);
                  if (params.inputValue !== "") {
                    filtered.push({
                      inputValue: params.inputValue,
                      name: `Add "${params.inputValue}"`,
                    });
                  }
                  return filtered;
                }}
                id="customer"
                options={response}
                getOptionLabel={(option) => {
                  if (typeof option === "string") {
                    return option;
                  }
                  if (option.inputValue) {
                    return option.inputValue;
                  }
                  return `${option.name}`;
                }}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                renderOption={(option) =>
                  `${option.name} - ${option.number || ""}`
                }
                style={{ width: 300 }}
                freeSolo
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Customer"
                    disabled={response !== null}
                    fullWidth
                  />
                )}
              />
            </Grid>} */}
            <Grid container item justifyContent="space-between">
              <Grid item xs={7}>
                <TextField
                  margin="dense"
                  id="amount"
                  label="Amount"
                  type="text"
                  fullWidth
                  value={amt}
                  onChange={(e)=>setAmt(e.target.value)}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  margin="dense"
                  id="name"
                  label="Due Date"
                  type="date"
                  fullWidth
                  value={date}
                  onChange={(e)=>setDate(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onSubmit} color="primary">
            Update Order
          </Button>
        </DialogActions>
        <AddCustomerModal open={customerOpen} setOpen={toggleCustomerOpen} initial={init} setInitial={setValue} hide/> 
      </Dialog>
    </div>
  );
}
