import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Image from 'next/image'

import Header from './Header'
import StaticContent from './StaticContent'
import MainLinks from './MainLinks'

export default function MainPage() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Header text="Sri Kanchi Kamakoti Peetam - Devotee Details" />
            <div style={{ "display": "flex", alignItems: "center", flexDirection: "column", marginBottom: "20px" }}>
                <StaticContent />
                <MainLinks />
            </div>
            <Header text="" />
        </Box>
    );
}
