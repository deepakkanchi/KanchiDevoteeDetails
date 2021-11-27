import * as React from 'react';
import { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import DatePickerComponent from './DatePickerComponent';

import moment from "moment";
import "moment/locale/en-in";


export default function SearchBar(props) {

    var [fromDate, setFromDate] = useState(moment().subtract(1,"years"));
    var [toDate, setToDate] = useState(moment().add(2,"days"));


    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ width: "600px", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ color: "#e96a43" }} >
                        <b>FROM</b>
                    </Typography>
                    <DatePickerComponent label="From Date" value={fromDate} setFunc={setFromDate} />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ color: "#e96a43" }} >
                        <b>TO</b>
                    </Typography>
                    <DatePickerComponent label="To Date" value={toDate} setFunc={setToDate} />

                </div>
                <Button variant="contained" style={{ marginTop: "10px", width: "200px", height: "40px", borderRadius: "30px", backgroundColor: "#f6c792", color: "#d45028" }} onClick={() => { props.submitFunc(fromDate,toDate) }}><b>Fetch Devotees</b></Button>
            </div>
        </>
    );
}
