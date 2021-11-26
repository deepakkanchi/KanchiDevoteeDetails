import * as React from 'react';
import { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import useDeepCompareEffect from 'use-deep-compare-effect'



export default function DevoteeDataTable(props) {

    var [rows, setRows] = useState([]);

    useEffect(()=>{
        if(props && props.setFunc) {
            props.setFunc(rows);
        }
    },[rows]);

    useDeepCompareEffect(() => {
        console.log(JSON.stringify(props));
        var rowsArr = [];
        var nameInd = -1;
        var phoneInd = -1;
        var emailInd = -1;
        var addInd = -1;
        if (props && props.data) {
            var details = props.data;
            if (details && details.length) {
                if (details[0] && details[0].length) {
                    for (var i = 0; i < details[0].length; i++) {
                        var string = details[0][i].toLowerCase().replace(/[^\w\s]/gi, '');
                        if (string == "name") {
                            nameInd = i;
                        } else if (string == "phone") {
                            phoneInd = i;
                        } else if (string == "address") {
                            addInd = i;
                        } else if (string == "email") {
                            emailInd = i;
                        }
                    }
                    for (i = 1; i < details.length; i++) {
                        var arr = details[i];
                        console.log(details[i]);
                        var obj = {};
                        nameInd > -1 ? obj["name"] = arr[nameInd] : "";
                        addInd > -1 ? obj["address"] = arr[addInd] : "";
                        phoneInd > -1 ? obj["phone"] = arr[phoneInd] : "";
                        emailInd > -1 ? obj["email"] = arr[emailInd] : "";

                        rowsArr.push(obj);
                    }
                    setRows(rowsArr);

                }
            }
        }
    }, [props]);



    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead style={{ backgroundColor: "#eb954b" }}>
                    <TableRow>
                        <TableCell><b>Name</b></TableCell>
                        <TableCell align="right"><b>Address</b></TableCell>
                        <TableCell align="right"><b>Phone</b></TableCell>
                        <TableCell align="right"><b>E-Mail</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.address}</TableCell>
                            <TableCell align="right">{row.phone}</TableCell>
                            <TableCell align="right">{row.email}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
