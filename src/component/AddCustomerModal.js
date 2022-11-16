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
import { addCustomer } from "../api/orderApi";


export default function AddCustomerModal({open,setOpen,initial,setInitial,hide}) {
  const [value, setValue] = React.useState(initial);
  const [num, setNum] = React.useState(null);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onSubmit = ()=>{
    console.log(value);
    console.log(num);
    let body ={
        name:value,
        number:num,
    }
    addCustomer(body).then((response)=>{
        console.log(response)
        if(setInitial){
            setInitial(response.data)
        }
        handleClose();
    })
  }

  React.useEffect(()=>{
    console.log(initial);
    setValue(initial);
  },[initial])

  return (
    <div>
      { !hide &&
        <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<AddCircle />}
        onClick={handleClickOpen}
      >
        {" "}
        Add Customer
      </Button>
      }
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        size="lg"
        fullWidth
      >
        <DialogTitle id="form-dialog-title">Add Customer</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill in the details to add a new Customer.
          </DialogContentText>
            <Grid container justifyContent="space-between">
              <Grid item xs={7}>
                <TextField
                  margin="dense"
                  id="name"
                  label="Name"
                  type="text"
                  fullWidth
                  value={value}
                  onChange={(e)=>setValue(e.target.value)}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  margin="dense"
                  id="number"
                  label="Number"
                  type="text"
                  fullWidth
                  value={num}
                  onChange={(e)=>setNum(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onSubmit} color="primary">
            Add Customer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
