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
import ViewAndDownloadDetails from './ViewAndDownloadDetails';
import { CircularProgress } from '@material-ui/core';

import dbService from '../services/dbService';

export default function ViewDevotees() {

    var [loading, setLoading] = useState(0);
    var [data, setData] = useState([]);


    var fetchAndViewDetails = (fromDate, toDate) => {
        setLoading(1);
        dbService.getFromTo(fromDate,toDate).then((querySnapshot) => {
            console.log("sdfsd");
            var arr = [["name","phone","email","address"]];
            //querySnapshot is "iteratable" itself
            querySnapshot.forEach((userDoc) => {

                //userDoc contains all metadata of Firestore object, such as reference and id
                console.log(userDoc.id)

                //If you want to get doc data
                var ud = userDoc.data()
                console.log("sdf"+JSON.stringify(ud));
                arr.push([ud.name,ud.phone,ud.email,ud.address]);
            })
            setData(arr);
            setLoading(2);
        });
    }

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <SearchBar submitFunc={fetchAndViewDetails} />
                <br />
                {(loading == 1) ? <CircularProgress /> : ""}
                {(loading == 2) ? <ViewAndDownloadDetails data={data}/> : ""}
            </div>
        </>
    );
}
