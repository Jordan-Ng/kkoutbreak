import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import moment from 'moment'

const Carde = ({recent, yesterday, kepayan}) => {

const redirect1 = () => {
    window.open('https://sabahoutbreak.com', '_blank')
}

const redirect2 = () => {
    let time = (moment(recent[1])._i).split('/')
    const montMapper = {
        Jan : ['1', 'januari'],
        Feb : ['2', 'februari'],
        Mar : ['3', 'mac'],
        Apr : ['4', 'april'],
        May : ['5', 'mei'],
        Jun : ['6', 'jun'],
        Jul : ['7', 'julai'],
        Aug : ['8', 'ogos'],
        Sep : ['9', 'september'],
        Oct : ['10', 'oktober'],
        Nov : ['11', 'november'],
        Dec : ['12', 'disember']
    }
    window.open(`https://kpkesihatan.com/${time[2]}/${montMapper[`${time[1]}`][0]}/${time[0]}/kenyataan-akhbar-kpk-${montMapper[`${time[1]}`][0]}-${montMapper[`${time[1]}`][1]}-${time[2]}-situasi-semasa-jangkitan-penyakit-coronavirus-2019-covid-19-di-malaysia/`, '_blank')
}

return(
<div style={{marginTop:'1vh', width:'100vw', display:'flex'}}>
    {/* <Row> */}
    {/* <Col sm={{ size: '20vw'}}> */}
    <div style={{width: '20vw'}} onClick={redirect1}>
    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle style={{textAlign:'center'}}>Recent KK Case Update</CardTitle>
        <CardText style={{textAlign:'center'}}>{recent[0]}</CardText>
        <CardText style={{textAlign:'center'}}>(as of {recent[1]}) </CardText>
    </Card>
    </div>
    {/* </Col> */}

    {/* <Col sm={{ size: '20vw'}}> */}
    <div style={{width: '20vw'}} onClick={redirect2}>
    <Card body inverse color='primary'>
        <CardTitle style={{textAlign:'center'}}> Kepayan Cluster</CardTitle>
        <CardText style={{textAlign:'center'}}>{kepayan}</CardText>
        <CardText style={{textAlign:'center'}}>(as of {recent[1]})</CardText>
    </Card>
    </div>
    {/* </Col> */}

    <div style={{width: '20vw'}}>
    <Card body inverse color='info'>
        <CardTitle style={{textAlign:'center'}}> Local KK Cases</CardTitle>
        <CardText style={{textAlign:'center'}}>{parseInt(recent[0]) - parseInt(kepayan)}</CardText>
        <CardText style={{textAlign:'center'}}>(as of {recent[1]})</CardText>
    </Card>
    </div>

    {/* <Col sm={{ size: '30vw'}}> */}
    <div style={{width: '20vw'}}>
    <Card body inverse color={parseInt(recent[0]) - parseInt(yesterday) > 0 ? 'danger' : 'success'}>
        <CardTitle style={{textAlign:'center'}}>Progress Update</CardTitle>
        <CardText style={{textAlign:'center'}}>{parseInt(recent[0]) - parseInt(yesterday) > 0 ? `${parseInt(recent[0]) - parseInt(yesterday)}↑` : `${parseInt(yesterday) - parseInt(recent[0])}↓`} </CardText>
        <CardText style={{textAlign:'center'}}>({yesterday}→{recent[0]})</CardText>
      </Card>
    </div>
    {/* </Col> */}


    {/* </Row> */}
</div>)
}

export default Carde