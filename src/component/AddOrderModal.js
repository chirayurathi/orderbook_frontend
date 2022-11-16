import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { AddCircle } from "@material-ui/icons";
import { Grid } from "@material-ui/core";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";
import useAxios from "../hooks/useAxios";
import { addOrder } from "../api/orderApi";
import AddCustomerModal from "./AddCustomerModal";
import { useHistory } from "react-router-dom";

const filter = createFilterOptions();

export default function AddOrderModal() {
  const history = useHistory();  
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [amt, setAmt] = React.useState(null);
  const [init, setInit] = React.useState(null);
  const [date, setDate] = React.useState(null);
  const [customerOpen, toggleCustomerOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        history.push(`/order/${response.data.id}`)
        handleClose();
    })
  }
  const { response,  } = useAxios({
    url: "customers/",
    method: "get",
  });

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<AddCircle />}
        onClick={handleClickOpen}
      >
        {" "}
        Add Order
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        size="md"
      >
        <DialogTitle id="form-dialog-title">Add Order</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill in the details to add a new order.
          </DialogContentText>
          <Grid container>
            <Grid item xs={5}>
              <Autocomplete
                fullWidth
                value={value}
                onChange={(event, newValue) => {
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
            </Grid>
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
            Add Order
          </Button>
        </DialogActions>
        <AddCustomerModal open={customerOpen} setOpen={toggleCustomerOpen} initial={init} setInitial={setValue} hide/> 
      </Dialog>
    </div>
  );
}
