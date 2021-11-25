import * as React from 'react';
import Button from '@material-ui/core/Button'
import Link from 'next/link';

export default function MainLinks() {
    return (
        <div style={{ height: "250px", display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
            <Link href="/new-devotee">
                <Button variant="contained" style={{ width: "400px", color: "green", backgroundColor: "#f3d053" }}>
                    <b>Add New Devotee</b>
                </Button>
            </Link>
            <Link href="/edit-devotee">
                <Button variant="contained" style={{ width: "400px", color: "blue", backgroundColor: "#f3d053" }}>
                    <b>Edit Existing Devotee</b>
                </Button>
            </Link>
            <Link href="/view-devotees">
                <Button variant="contained" style={{ width: "400px", color: "#0088ff", backgroundColor: "#f3d053" }}>
                    <b>View Devotee Details</b>
                </Button>
            </Link>
            <Link href="/upload-data">
                <Button variant="contained" style={{ width: "400px", color: "#db3fc7", backgroundColor: "#f3d053" }}>
                    <b>Upload Bulk Data</b>
                </Button>
            </Link >
        </div >
    );
}
