import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Grid, Typography } from "@material-ui/core";
import { updateItem } from "../api/orderApi";


export default function UpdateItemModal({setOpen,item}) {
  const [value, setValue] = React.useState({
    order_id: item.order_id,
    salwar_length: item.salwar_length,
    salwar_shoulder: item.salwar_shoulder,
    salwar_chest: item.salwar_chest,
    salwar_waist: item.salwar_waist,
    salwar_neck: item.salwar_neck,
    salwar_sleeve: item.salwar_sleeve,
    salwar_bottom: item.salwar_bottom,
    blouse_length: item.blouse_length,
    blouse_shoulder: item.blouse_shoulder,
    blouse_chest: item.blouse_chest,
    blouse_waist: item.blouse_waist,
    blouse_neck: item.blouse_neck,
    blouse_sleeve: item.blouse_sleeve,
    blouse_bottom: item.blouse_bottom,
    note: item.note,
    image: item.image,
    name:item.name
  });

  const handleChange = (name, e)=>{
    let _value = {
        ...value
    }
    _value[name] = e.target.value
    setValue(_value)
  }

  React.useEffect(()=>{
    setValue({
        order_id: item.order_id,
        salwar_length: item.salwar_length,
        salwar_shoulder: item.salwar_shoulder,
        salwar_chest: item.salwar_chest,
        salwar_waist: item.salwar_waist,
        salwar_neck: item.salwar_neck,
        salwar_sleeve: item.salwar_sleeve,
        salwar_bottom: item.salwar_bottom,
        blouse_length: item.blouse_length,
        blouse_shoulder: item.blouse_shoulder,
        blouse_chest: item.blouse_chest,
        blouse_waist: item.blouse_waist,
        blouse_neck: item.blouse_neck,
        blouse_sleeve: item.blouse_sleeve,
        blouse_bottom: item.blouse_bottom,
        note: item.note,
        image: item.image,
        name:item.name
    })
  },[item])

  const handleClose = () => {
    setOpen(null);
  };

  const onSubmit = ()=>{
    console.log(value);
    updateItem(item.id,value).then((response)=>{
        console.log(response)
        handleClose();
    })
  }

  return (
    <div>
      <Dialog
        open={item===null?false:true}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        size="lg"
        fullWidth
      >
        <DialogTitle id="form-dialog-title">Update Item</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill in the details to update this Item.
          </DialogContentText>
            <Grid container>
                <Grid container item xs={12} justifyContent="space-between">
                    <Grid item xs={5}>
                        <TextField
                            margin="dense"
                            id="name"
                            label="Name"
                            type="text"
                            fullWidth
                            value={value.name}
                            onChange={(e)=>handleChange("name",e)}
                        />
                    </Grid>
                    <Grid item xs={5}>
                        <TextField
                            margin="dense"
                            id="note"
                            label="Note"
                            type="text"
                            fullWidth
                            value={value.note}
                            onChange={(e)=>handleChange("note",e)}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{marginTop:"30px"}}>
                    <Typography variant="h5">Salwar</Typography>
                </Grid>
                <Grid container item xs={12} justifyContent="space-between">
                    <Grid item xs={5}>
                        <TextField
                            margin="dense"
                            id="salwar_length"
                            label="Salwar Length"
                            type="text"
                            fullWidth
                            value={value.salwar_length}
                            onChange={(e)=>handleChange("salwar_length",e)}
                        />
                    </Grid>
                    <Grid item xs={5}>
                        <TextField
                            margin="dense"
                            id="salwar_shoulder"
                            label="Salwar Shoulder"
                            type="text"
                            fullWidth
                            value={value.salwar_shoulder}
                            onChange={(e)=>handleChange("salwar_shoulder",e)}
                        />
                    </Grid>
                </Grid>
                <Grid container item xs={12} justifyContent="space-between">
                    <Grid item xs={5}>
                        <TextField
                            margin="dense"
                            id="salwar_chest"
                            label="Salwar Chest"
                            type="text"
                            fullWidth
                            value={value.salwar_chest}
                            onChange={(e)=>handleChange("salwar_chest",e)}
                        />
                    </Grid>
                    <Grid item xs={5}>
                        <TextField
                            margin="dense"
                            id="salwar_waist"
                            label="Salwar Waist"
                            type="text"
                            fullWidth
                            value={value.salwar_waist}
                            onChange={(e)=>handleChange("salwar_waist",e)}
                        />
                    </Grid>
                </Grid>
                <Grid container item xs={12} justifyContent="space-between">
                    <Grid item xs={5}>
                        <TextField
                            margin="dense"
                            id="salwar_neck"
                            label="Salwar Neck"
                            type="text"
                            fullWidth
                            value={value.salwar_neck}
                            onChange={(e)=>handleChange("salwar_neck",e)}
                        />
                    </Grid>
                    <Grid item xs={5}>
                        <TextField
                            margin="dense"
                            id="salwar_sleeve"
                            label="Salwar Sleeve"
                            type="text"
                            fullWidth
                            value={value.salwar_sleeve}
                            onChange={(e)=>handleChange("salwar_sleeve",e)}
                        />
                    </Grid>
                </Grid>
                <Grid container item xs={12} justifyContent="space-between">
                    <Grid item xs={5}>
                        <TextField
                            margin="dense"
                            id="salwar_bottom"
                            label="Salwar Bottom"
                            type="text"
                            fullWidth
                            value={value.salwar_bottom}
                            onChange={(e)=>handleChange("salwar_bottom",e)}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12} style={{marginTop:"30px"}}>
                    <Typography variant="h5">Blouse</Typography>
                </Grid>
                <Grid container item xs={12} justifyContent="space-between">
                    <Grid item xs={5}>
                        <TextField
                            margin="dense"
                            id="blouse_length"
                            label="Blouse Length"
                            type="text"
                            fullWidth
                            value={value.blouse_length}
                            onChange={(e)=>handleChange("blouse_length",e)}
                        />
                    </Grid>
                    <Grid item xs={5}>
                        <TextField
                            margin="dense"
                            id="blouse_shoulder"
                            label="Blouse Shoulder"
                            type="text"
                            fullWidth
                            value={value.blouse_shoulder}
                            onChange={(e)=>handleChange("blouse_shoulder",e)}
                        />
                    </Grid>
                </Grid>
                <Grid container item xs={12} justifyContent="space-between">
                    <Grid item xs={5}>
                        <TextField
                            margin="dense"
                            id="blouse_chest"
                            label="Blouse Chest"
                            type="text"
                            fullWidth
                            value={value.blouse_chest}
                            onChange={(e)=>handleChange("blouse_chest",e)}
                        />
                    </Grid>
                    <Grid item xs={5}>
                        <TextField
                            margin="dense"
                            id="blouse_waist"
                            label="Blouse Waist"
                            type="text"
                            fullWidth
                            value={value.blouse_waist}
                            onChange={(e)=>handleChange("blouse_waist",e)}
                        />
                    </Grid>
                </Grid>
                <Grid container item xs={12} justifyContent="space-between">
                    <Grid item xs={5}>
                        <TextField
                            margin="dense"
                            id="blouse_neck"
                            label="Blouse Neck"
                            type="text"
                            fullWidth
                            value={value.blouse_neck}
                            onChange={(e)=>handleChange("blouse_neck",e)}
                        />
                    </Grid>
                    <Grid item xs={5}>
                        <TextField
                            margin="dense"
                            id="blouse_sleeve"
                            label="Blouse Sleeve"
                            type="text"
                            fullWidth
                            value={value.blouse_sleeve}
                            onChange={(e)=>handleChange("blouse_sleeve",e)}
                        />
                    </Grid>
                </Grid>
                <Grid container item xs={12} justifyContent="space-between">
                    <Grid item xs={5}>
                        <TextField
                            margin="dense"
                            id="blouse_bottom"
                            label="Blouse Bottom"
                            type="text"
                            fullWidth
                            value={value.blouse_bottom}
                            onChange={(e)=>handleChange("blouse_bottom",e)}
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
            Update Item
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
