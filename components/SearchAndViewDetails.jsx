import * as React from 'react';
import { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Image from 'next/image'

import Header from './Header'
import StaticContent from './StaticContent'
import MainLinks from './MainLinks'
import StaticContentImg from './StaticContentImg';

import SearchBar from './SearchBar';
import DevoteeDataTable from './DevoteeDataTable';
import { CircularProgress } from '@material-ui/core';

export default function ViewDevotees() {

    var [loading, setLoading] = useState(0);
    var [data, setData] = useState([]);


    var fetchAndViewDetails = (fromDate, toDate) => {
        setLoading(1);
        setTimeout(() => { setLoading(2) }, 3000);
    }

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <SearchBar submitFunc={fetchAndViewDetails} />
                <br />
                {(loading == 1) ? <CircularProgress /> : ""}
                {(loading == 2) ? <DevoteeDataTable data={data} /> : ""}
            </div>
        </>
    );
}
