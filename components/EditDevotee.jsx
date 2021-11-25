import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Image from 'next/image'

import Header from './Header'
import StaticContentImg from './StaticContentImg'

import EditDevoteeCard from './EditDevoteeCard';

import SearchDevotee from './SearchDevotee'

export default function EditDevotee() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Header text="Sri Kanchi Kamakoti Peetam - Devotee Details" />
            <div style={{ "display": "flex", alignItems: "center", flexDirection: "column", marginBottom: "10px" }}>
                <StaticContentImg/>
                <SearchDevotee/>
            </div>
            <Header text="" />
        </Box>
    );
}
