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

import dbService from '../services/dbService';


export default function EditDevoteeCard(props) {

    var [name, setName] = useState(props.data.name);
    var [address, setAddress] = useState(props.data.address);
    var [phone, setPhone] = useState(props.data.phone);
    var [email, setEmail] = useState(props.data.email);

    var [nameOk, setNameOk] = useState(true);
    var [phoneOk, setPhoneOk] = useState(true);
    var [emailOk, setEmailOk] = useState(true);

    var [isSubmit, setIsSubmit] = useState(0);
    var [empty, setEmpty] = useState(false);

    useEffect(() => {
        if (name != "" && !/^[A-z ]+$/.test(name)) {
            setNameOk(false);
        } else {
            setNameOk(true);
        }
    }, [name]);

    useEffect(() => {
        if (phone != "" && !/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(phone)) {
            setPhoneOk(false);
        } else {
            setPhoneOk(true);
        }
    }, [phone]);

    useEffect(() => {
        if (email != "" && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setEmailOk(false);
        } else {
            setEmailOk(true);
        }
    }, [email]);


    var submitNewDevoteeDetails = () => {
        if (name != "" && phone != "" && address != "" && email != "") {
            setEmpty(false);
            if (nameOk && phoneOk && emailOk) {
                setIsSubmit(1);
                dbService.update(phone, { "name": name, "phone": phone, "email": email, "address": address }).then(res => {
                    setIsSubmit(2);
                }).catch(err => {
                    setIsSubmit(4);
                });
            }
        } else {
            setEmpty(true);
        }
    }

    return (
        <>
            <Card style={{ minWidth: "600px", backgroundColor: "rgb(255 255 249)" }}>
                <CardContent>
                    <div style={{ display: "flex", alignItems: "center", flexDirection: "column", marginTop: "-15px" }}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ color: "#e96a43" }} >
                            <b>EDIT DEVOTEE</b>
                        </Typography>

                        <br />
                        <div style={{ display: "flex", flexDirection: "column", height: "275px", width: "500px", justifyContent: "space-between" }}>
                            <TextField value={name} label="Name" error={!nameOk} helperText={!nameOk ? "Name can only contain Letters and Spaces" : ""} variant="outlined" onChange={(e) => { setName(e.target.value) }} />
                            <TextField value={address} label="Address" variant="outlined" onChange={(e) => { setAddress(e.target.value) }} />
                            <TextField value={phone} label="Phone" error={!phoneOk} helperText={!phoneOk ? "Not a valid Phone Number" : ""} variant="outlined" onChange={(e) => { setPhone(e.target.value) }} />
                            <TextField value={email} label="E-Mail" error={!emailOk} helperText={!emailOk ? "Not a valid E-Mail ID" : ""} variant="outlined" onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                    </div>
                </CardContent>
                <CardActions style={{ backgroundColor: "rgb(245 240 238)", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                    <Button variant="contained" style={{ color: "#e96a43", backgroundColor: "rgb(235 223 181)" }} onClick={submitNewDevoteeDetails}><b>EDIT DEVOTEE</b></Button>

                </CardActions>
                {(isSubmit == 1) ? <LinearProgress style={{ backgroundColor: "#e88140" }} /> : ""}
                {(isSubmit == 2) ? <Snackbar open={true} autoHideDuration={3000} >
                    <Alert severity="success" sx={{ width: '100%' }}>
                        <b>DEVOTEE DETAILS EDITED</b>
                    </Alert>
                </Snackbar> : ""}
                {(isSubmit == 3) ? <Snackbar open={true} autoHideDuration={3000} >
                    <Alert severity="warning" sx={{ width: '100%' }}>
                        <b>EXISTING DATA, TRY USING EDIT DEVOTEE DATA</b>
                    </Alert>
                </Snackbar> : ""}
                {(isSubmit == 4) ? <Snackbar open={true} autoHideDuration={3000} >
                    <Alert severity="error" sx={{ width: '100%' }}>
                        <b>ERROR EDITING DEVOTEE DETAILS</b>
                    </Alert>
                </Snackbar> : ""}
                {(empty) ? <Snackbar open={true} autoHideDuration={3000} >
                    <Alert severity="error" sx={{ width: '100%' }}>
                        <b>NO FIELD CAN BE EMPTY</b>
                    </Alert>
                </Snackbar> : ""}
            </Card>

        </>
    );
}
