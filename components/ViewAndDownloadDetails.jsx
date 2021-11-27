import { Button } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import DevoteeDataTable from './DevoteeDataTable'
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

import moment from 'moment';

function ViewAndDownloadDetails(props) {

    const fileType =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";
    const fileName = "Devotee_Details_" + moment().format("DD_MMM_YYYY");

    var [rows, setRows] = useState([]);

    useEffect(() => {
        if (rows && rows.length) {
            rows.forEach(row => {
                row["Name"] = row["name"];
                delete row["name"];
                row["Phone"] = row["phone"];
                delete row["phone"];
                row["Address"] = row["address"];
                delete row["address"];
                row["E-Mail"] = row["email"];
                delete row["email"];
            })
        }
    }, [rows]);


    var downloadFile = () => {
        console.log(rows);
        const ws = XLSX.utils.json_to_sheet(rows);
        const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
        const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, fileName + fileExtension);
    }

    return (
        <>
            <DevoteeDataTable data={props.data} setFunc={setRows} />
            <Button
                style={{ width: "225px", color: "#db3fc7", backgroundColor: "#f3d053", marginTop: "20px" }}
                variant="contained"
                component="label"
                onClick={downloadFile}
            >
                <b>Download Excel File</b>
            </Button>
        </>
    )
}

export default ViewAndDownloadDetails
