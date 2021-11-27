import * as React from 'react';
import { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Image from 'next/image'
import TextField from '@material-ui/core/TextField';
import { CircularProgress, Snackbar } from '@material-ui/core';
import EditDevoteeCard from './EditDevoteeCard';
import Alert from '@material-ui/lab/Alert';

import dbService from '../services/dbService';



export default function SearchDevotee() {

    var [isSearch, setIsSearch] = useState(0);
    var [key, setKey] = useState("");
    var [data, setData] = useState({});


    var goSearch = () => {
        //Validations
        setIsSearch(1);
        dbService.get(key).then(snapshot => {
            if (snapshot.data()) {
                setData(snapshot.data());
                setIsSearch(2);
            } else {
                setIsSearch(3);
            }
        })
            .catch(err => {
                setIsSearch(4);
            });


    }
    return (
        <>
            <div style={{ width: "420px", height: "50px", display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "-10px", marginBottom: "5px" }}>
                <TextField style={{ width: "300px", height: "40px" }} label="Search by Phone" variant="outlined" onChange={(e) => { setKey(e.target.value) }} />
                <Button style={{ backgroundColor: "#f8a45d", color: "#3469cd" }} variant="contained" onClick={goSearch}><b>Search</b></Button>
            </div>
            <br />
            {(isSearch == 1) ? <CircularProgress /> : ""}
            {(isSearch == 2) ? <EditDevoteeCard data={data}/> : ""}
            {(isSearch == 3) ? <Snackbar open={true} autoHideDuration={3000} >
                <Alert severity="warning" sx={{ width: '100%' }}>
                    <b>DEVOTEE DETAILS NOT FOUND</b>
                </Alert>
            </Snackbar> : ""}
            {(isSearch == 4) ? <Snackbar open={true} autoHideDuration={3000} >
                <Alert severity="error" sx={{ width: '100%' }}>
                    <b>ERROR SEARCHING DEVOTEE DETAILS</b>
                </Alert>
            </Snackbar> : ""}
        </>
    );
}
