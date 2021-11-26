import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Image from 'next/image'

import Header from './Header'
import StaticContent from './StaticContent'
import MainLinks from './MainLinks'
import StaticContentImg from './StaticContentImg';

import DevoteeDataTable from './DevoteeDataTable';
import SearchAndViewDetails from './SearchAndViewDetails';

export default function ViewDevotees() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Header text="Sri Kanchi Kamakoti Peetam - Devotee Details" />
            <div style={{ "display": "flex", alignItems: "center", flexDirection: "column", marginBottom: "40px" }}>
                <StaticContentImg />
                <div style={{ width: "900px" }}>
                    <SearchAndViewDetails />
                </div>
            </div>
            <Header text="" />
        </Box>
    );
}
