import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function createData(name, address, phone, email) {
    return { name, address, phone, email };
}

const rows = [
    createData('Name1', "Add1", "108", "kanchi@kanchi.com"),
    createData('Name1', "Add1", "108", "kanchi@kanchi.com"),
    createData('Name1', "Add1", "108", "kanchi@kanchi.com"),
    createData('Name1', "Add1", "108", "kanchi@kanchi.com"),
    createData('Name1', "Add1", "108", "kanchi@kanchi.com"),
];

export default function DevoteeDataTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead style={{backgroundColor:"#eb954b"}}>
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
