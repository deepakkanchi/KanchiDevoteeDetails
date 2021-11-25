import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'

export default function Header(props) {
    return (
        <AppBar position="static" style={{ backgroundColor: "#db822f", height: "30px", display: "flex", alignItems: "center", flexDirection: "column" }}>
            <Link href="/">
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ cursor: "pointer" }} >
                    {props.text}
                </Typography>
            </Link>
        </AppBar>
    );
}
