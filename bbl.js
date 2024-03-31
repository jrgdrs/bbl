#!/usr/bin/env node
const fs = require('fs');
const $jsonFile = process.argv[2]; 
const $jsonData = fs.readFileSync( $jsonFile, { encoding: 'utf8', flag: 'r' });

function processGame( $in ){
    $in.props.pageProps.initialGameStats.actions.forEach( processAction );
    console.log( 
        '</div><div class="event">' +  
        $in.props.pageProps.initialGameData.homeTeam.tlc + ' ' +
        $in.props.pageProps.initialGameData.result.homeTeamFinalScore + ' : ' +
        $in.props.pageProps.initialGameData.guestTeam.tlc + ' ' +
        $in.props.pageProps.initialGameData.result.guestTeamFinalScore + '  <span class="competition">' +
        $in.props.pageProps.initialGameData.competition + ' ' +
        $in.props.pageProps.initialGameData.scheduledTime.substring(0, 10) + ' ' +
        $in.props.pageProps.initialGameData.venue.name + '</span>' +
        '</div>' );
}

function processAction( $in ){
    let $successFlag = '';
    if( $in.isSuccessful !== undefined && $in.isSuccessful !== true ) { $successFlag = ' nosuccess'};
    console.log( 
        '<span class="' +  
        $in.type + ' _' +
        $in.seasonTeamId + 
        $successFlag +
        '"></span>' );
}

console.log(`
<style>
    @font-face {
        font-family: BBL;
        src: url("./fonts/Baskets-Regular.ttf");
    }

    @font-face {
        font-family: acumin-pro;
        src: url("./fonts/acuminpro.woff2");
    }

    @media print {}

    @page {
        size: 210mm 280mm;
        margin: 0;
    }

    body {
        background-color: rgb(0, 41, 93);
    }


    body {
    }

    div.actions {
        font-size: 45pt;
        line-height: 30pt;
        font-family: BBL;
        top: 40mm;
        left: 15mm;
        position: absolute;
        width: 177mm;
        padding-left: 3mm; 
        _border: 2pt solid yellow;

    }

    div.event {
        top: 10mm;
        left: 15mm;
        position: absolute;
        width: 180mm;
        color: white;
        font-family:acumin-pro, sans-serif;
        _font-style:italic;
        _font-weight:900;
        font-size: 44pt;
        line-height: 44pt;
        text-align:center;
        opacity: 0.4;
        _border: 2pt solid yellow;
    }

    div.event span.competition {
        _color: white;
        font-family: Arial;
        font-size: 10pt;
        _font-weight:bold;
        text-transform: uppercase;
        letter-spacing:0.04em;
        _opacity: 0.8;
        text-align:center;
        margin-top:12pt;
        line-height:20pt;
        display: block;
    }

    div.legend {
        font-size: 50pt;
        line-height: 20pt;
        font-family: BBL;
        top: 250mm;
        left: 25mm;
        position: absolute;
        width: 160mm;
        color: black;
        _border: 2pt solid yellow;
    }

    .legend table tr td {
        text-align: center;
        width: 20mm;
        font-size: 50pt;
        line-height: 28pt;
    }

    span.def {
        color: white;
        font-family: Arial;
        font-size: 6pt;
        font-weight:bold;
        text-transform: uppercase;
        letter-spacing:0.04em;
        opacity: 0.4;
    }

    span.TWO_POINT_THROW::before {
        content: "a";
    }

    span.THREE_POINT_THROW::before {
        content: "b";
    }

    span.REBOUND::before {
        content: "c";
    }

    span.FREE_THROW::before {
        content: "d";
    }

    span.FOUL::before {
        content: "e";
    }

    span.STEAL::before {
        content: "f";
    }

    span.BLOCK::before {
        content: "g";
    }

    span.TURN_OVER::before {
        content: "h";
    }

    span.END::before {
        content: "i";
    }

    
    span._bee06a84-4a5f-4bc7-941b-a1e53158f335 {
        color: #F7CC00;
        name: BER;
    }    
    span._cb5181ee-18a2-4052-ad00-4db2ab2f1849 {
        color: #5F237A;
        name: GOE;
    }    
    span._6d57d3cb-f6d8-46e1-94fb-3579b9432947 {
        color: #D4032F;
        name: BAM;
    }    
    span._ca345850-bdb6-4295-b314-e73cc84669b1 {
        color: #D4032F;
        name: BRA;
    }    
    span._cc7ef538-105a-4b0c-9078-86ecdfc7bc67 {
        color: #F5D60B;
        name: OLD;
    }    
    span._26495552-d773-4c96-a69d-761ebc06bd5e {
        color: #D4062A;
        name: MUE;
    }    
    span._d4055b8f-cb05-4457-a31d-b9f022118576 {
        color: #054280;
        name: CRA;
    }    
    span._63b75e38-b9cc-41dc-a3f6-c4c44ab7637a {
        color: #F5B900;
        name: LUD;
    }    
    span._5e725acd-89c6-4b9d-a993-ffbd977f82fa {
        color: #003052;
        name: HEI;
    }    
    span._17b8dcc8-23c7-4f91-b991-7b147c8a38f9 {
        color: #E16F00;
        name: CHE;
    }    
    span._d5ca7155-e423-4e35-908b-11231daa9b99 {
        color: #E4681C;
        name: VEC;
    }    
    span._da6f6edc-04ab-4239-a2a4-13bb8dcdd81e {
        color: #172C5F;
        name: ROS;
    }    
    span._76ff7df4-0894-4616-9d35-34bb109ace36 {
        color: #0870B8;
        name: WEI;
    }    
    span._9fbb59ba-64d0-42da-8663-8af2167acde1 {
        color: #D8167F;
        name: BON;
    }    
    span._be6ccaa8-6f73-4e67-8577-8275e805e800 {
        color: #F4BC00;
        name: TUE;
    }    
    span._403f562d-8757-49ce-a4f9-5365fbab3f95 {
        color: #F7F7F7;
        name: HAM;
    }    
    span._59db1b9f-e34f-4a9c-a755-50275d828ae1 {
        color: #AF0225;
        name: WUE;
    }    
    span._9a259543-a5a3-4f51-b352-9ceeffb4ae15 {
        color: #E37209;
        name: ULM;
    }

    span.nosuccess {  opacity: 0.4; }

</style>

<body>

    <div class="legend">
        <table>
            <tr>
                <td>
                    <span class="TWO_POINT_THROW undefined"></span>
                </td>
                <td>
                    <span class="THREE_POINT_THROW undefined"></span>
                </td>
                <td>
                    <span class="REBOUND undefined"></span>
                </td>
                <td>
                    <span class="FREE_THROW undefined"></span>
                </td>
                <td>
                    <span class="FOUL undefined"></span>
                </td>
                <td>
                    <span class="STEAL undefined"></span>
                </td>
                <td>
                    <span class="BLOCK undefined"></span>
                </td>
                <td>
                    <span class="TURN_OVER undefined"></span>
                </td>
            </tr>
            <tr>
                <td><span class="def">2 point throw</span></td>
                <td><span class="def">3 point throw</span></td>
                <td><span class="def">Rebound</span></td>
                <td><span class="def">Free throw</span></td>
                <td><span class="def">Foul</span></td>
                <td><span class="def">Steal</span></td>
                <td><span class="def">Block</span></td>
                <td><span class="def">Turn over</span></td>
            </tr>
        </table>
    </div>
  
    <div class="actions">
`);

processGame( JSON.parse( $jsonData ));

console.log(`
</body>
`);