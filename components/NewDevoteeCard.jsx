import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { LinearProgress, Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert'



export default function NewDevoteeCard() {

    var [name, setName] = useState("");
    var [address, setAddress] = useState("");
    var [phone, setPhone] = useState("");
    var [email, setEmail] = useState("");

    var [isSubmit, setIsSubmit] = useState(0);

    var submitNewDevoteeDetails = () => {
        //Validations
        setIsSubmit(1);
        setTimeout(() => { setIsSubmit(2); setTimeout(() => { setIsSubmit(0) }, 3000) }, 3000);
    }

    return (
        <>
            <Card style={{ minWidth: "600px", backgroundColor: "rgb(255 255 249)" }}>
                <CardContent>
                    <div style={{ display: "flex", alignItems: "center", flexDirection: "column", marginTop: "-15px" }}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ color: "#e96a43" }} >
                            <b>ADD NEW DEVOTEE</b>
                        </Typography>

                        <br />
                        <div style={{ display: "flex", flexDirection: "column", height: "275px", width: "500px", justifyContent: "space-between" }}>
                            <TextField label="Name" variant="outlined" onChange={(e, v) => { setName(v) }} />
                            <TextField label="Address" variant="outlined" onChange={(e, v) => { setAddress(v) }} />
                            <TextField label="Phone" variant="outlined" onChange={(e, v) => { setPhone(v) }} />
                            <TextField label="E-Mail" variant="outlined" onChange={(e, v) => { setEmail(v) }} />
                        </div>
                    </div>
                </CardContent>
                <CardActions style={{ backgroundColor: "rgb(245 240 238)", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                    <Button variant="contained" style={{ color: "#e96a43", backgroundColor: "rgb(235 223 181)" }} onClick={submitNewDevoteeDetails}><b>ADD NEW DEVOTEE</b></Button>

                </CardActions>
                {(isSubmit == 1) ? <LinearProgress style={{ backgroundColor: "#e88140" }} /> : ""}
                {(isSubmit == 2) ? <Snackbar open={true} autoHideDuration={3000} >
                    <Alert severity="success" sx={{ width: '100%' }}>
                        <b>NEW DEVOTEE ADDED</b>
                    </Alert>
                </Snackbar> : ""}
                {(isSubmit == 3) ? <Snackbar open={true} autoHideDuration={3000} >
                    <Alert severity="warning" sx={{ width: '100%' }}>
                        <b>EXISTING DEVOTEE DETAILS UPDATED</b>
                    </Alert>
                </Snackbar> : ""}
                {(isSubmit == 4) ? <Snackbar open={true} autoHideDuration={3000} >
                    <Alert severity="error" sx={{ width: '100%' }}>
                        <b>ERROR ADDING DEVOTEE DETAILS</b>
                    </Alert>
                </Snackbar> : ""}
            </Card>

        </>
    );
}
