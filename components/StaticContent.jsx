import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Image from 'next/image'

export default function StaticContent() {
    return (
        <>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ marginTop: "5px", color: "#f09724", textShadow: "2px 0.5px #eaed42" }}>
                உ
            </Typography>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} style={{ marginTop: "0px", color: "#f09724", textShadow: "0.5px 2px #eaed42" }}>
                सदा शिव समारमभां शङ्कराचार्य मध्यमाम्॥ अस्मदाचार्य पर्यन्तां वन्दे गुरु परम्पराम्॥
            </Typography>
            <div style={{ marginTop: "20px" }}>
                <Image src="/images/periyavas.png" width="300px" height="141px" />
            </div>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} style={{ marginTop: "20px", color: "#f09724", textShadow: "0.5px 2px #eaed42" }}>
                हर हर शन्कर ॥
                जय जय शन्कर ॥
            </Typography>
            <br />
        </>
    );
}
