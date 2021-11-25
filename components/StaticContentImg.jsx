import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Image from 'next/image'


export default function StaticContentImg() {
    return (
        <>

            <div style={{ marginTop: "5px" }}>
                <Image src="/images/periyavas.png" width="300px" height="141px" />
            </div>

            <br />
        </>
    );
}
