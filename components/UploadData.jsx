import * as React from 'react';
import { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Image from 'next/image'

import Header from './Header'
import StaticContentImg from './StaticContentImg'
import DevoteeDataTable from './DevoteeDataTable'

import * as XLSX from 'xlsx';
import { CircularProgress, LinearProgress, Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert'

import dbService from '../services/dbService';

export default function UploadData() {

    var [entries, setEntries] = useState([]);
    var [fileUploaded, setFileUploaded] = useState({});
    var [loading, setLoading] = useState(0);
    var [uploading, setUploading] = useState(0);


    const onFileUpload = (e) => {
        setLoading(1);
        e.preventDefault();

        var files = e.target.files, f = files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            var data = e.target.result;
            let readedData = XLSX.read(data, { type: 'binary' });
            const wsname = readedData.SheetNames[0];
            const ws = readedData.Sheets[wsname];

            /* Convert array to json*/
            const dataParse = XLSX.utils.sheet_to_json(ws, { header: 1 });
            setFileUploaded(dataParse);
            setLoading(2);
        };
        reader.readAsBinaryString(f)
    }

    var uploadToDB = () => {
        console.log("UPLOADING TO DB");
        setUploading(1);
        dbService.upload(entries).then(res => {
            setUploading(2);
        }).catch(err => {
            setUploading(3);
        })
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Header text="Sri Kanchi Kamakoti Peetam - Devotee Details" />
            <div style={{ "display": "flex", alignItems: "center", flexDirection: "column", marginBottom: "40px" }}>
                <StaticContentImg />
                <Button
                    style={{ width: "300px", color: "#db3fc7", backgroundColor: "#f3d053" }}
                    variant="contained"
                    component="label"
                >
                    <b>Upload File</b>
                    <input
                        type="file"
                        hidden
                        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                        onChange={onFileUpload}
                    />
                </Button>
                {(loading == 1) ? <CircularProgress /> : ""}
                {(loading == 2) ?
                    <div style={{ width: "900px", marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <DevoteeDataTable data={fileUploaded} setFunc={setEntries} />
                        <Button style={{ marginTop: "20px", width: "150px", color: "#db3fc7", backgroundColor: "#f3d053" }} variant="contained" onClick={() => { uploadToDB(entries) }}><b>UPLOAD TO DB</b></Button>
                        {uploading == 1 ? <CircularProgress style={{ marginTop: "10px" }} /> : ""}
                        {(uploading == 2) ? <Snackbar open={true} autoHideDuration={3000} >
                            <Alert severity="success" sx={{ width: '100%' }}>
                                <b>ALL DEVOTEE DETAILS UPLOADED</b>
                            </Alert>
                        </Snackbar> : ""}
                        {(uploading == 3) ? <Snackbar open={true} autoHideDuration={3000} >
                            <Alert severity="error" sx={{ width: '100%' }}>
                                <b>ERROR UPLOADING DEVOTEE DETAILS</b>
                            </Alert>
                        </Snackbar> : ""}
                    </div>
                    : ""}
            </div>
            <Header text="" />
        </Box>
    );
}
