import React, {useEffect, useState} from 'react'
import Chart from 'chart.js'
import axios from 'axios'

const Graph = () => {
    const [dayta, setDayta] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [recent, setRecent] = useState([])
    const [yesterday, setYesterday] = useState('')

    useEffect(() => {
        // axios.get(process.env.REACT_APP_API_URL)
        axios.get('https://kkoutbreak.herokuapp.com/info')
        .then(result => setDayta(result.data))
        // setLoaded(true)
    },[])

    useEffect(() => {
        let cummulativeData = (dayta.map(datapoint => datapoint.data)).reverse()
        let cummulativeDates = (dayta.map(datapoint => datapoint.label)).reverse()
        setRecent([cummulativeData[0], cummulativeDates[0]])
        setYesterday(cummulativeData[1])
        setLoaded(true)
        
        // console.log(recent,yesterday)
        let ctx = document.getElementById('mychart')
        // console.log(dayta[0].data)

        let data = {
            labels: dayta.map(entry => entry.label),
            datasets: [{
                data: dayta.map(entry => entry.data),
                label: 'Kota Kinabalu',
                backgroundColor: 'purple',
                borderColor: 'lightblue',
                fill: false,
                lineTension: 0.1
            },{
                data: dayta.map(entry => entry.cluster_data),
                label: 'Kepayan Cluster',
                backgroundColor: 'yellow',
                borderColor: 'purple',
                fill: false,
                lineTension: 0.1
            }]
        }
        
        let chart = new Chart(ctx, {type: 'line', data:data, 
            options: {title: {display: true, text:'Covid-19 Cases in Kota Kinabalu'} , 
            scales: {xAxes: [{scaleLabel: {display:true, labelString:'Timeline'}}], yAxes: [{scaleLabel: {display:true, labelString:'Cases'}}] } 
        } })

    },[dayta])



    return(
        <div style={{width: '80vw', height:'80vh', marginTop: '1vh', border:'2px solid lightGray', background: 'white', borderRadius: '10px'}}>
        {/* { loaded ? <div style={{textAlign: 'center'}}>Recent Case Update: {recent[0]} (as of {recent[1]}) </div> : ''}
        { loaded ? <div style={{textAlign:'center'}}>{parseInt(recent[0]) - parseInt(yesterday) >= 0 ? `Increased ${parseInt(recent[0] - parseInt(yesterday))}` : `decreased ${- parseInt(recent[0]) + parseInt(yesterday)}`}</div> :''} */}
        {/* {rendering ? <canvas id='mychart' style={{width: '100%' , height:'100%'}}/> : 'page has not rendered fully'} */}
        <canvas id='mychart' style={{width: '100%' , height:'100%'}}/> 
        </div>
    )
}

export default Graph