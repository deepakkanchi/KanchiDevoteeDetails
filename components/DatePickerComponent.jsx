import React from 'react';
import { useState, useEffect } from 'react'
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import MomentUtils from "@date-io/moment";
import moment from "moment";
import "moment/locale/en-in";

const DatePickerComponent = (props) => {


    return (
        <div style={{marginTop:"-5px"}}>
        <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils} locale={"en"} >
            <DatePicker
                onChange={(newDate)=>props.setFunc(newDate)}
                value={props.value}
                format="DD MMM yyyy"
                views={["date","month","year"]}
            />
        </MuiPickersUtilsProvider>
        </div>
    );

};

export default DatePickerComponent;