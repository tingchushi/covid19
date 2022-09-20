
import Plot from 'react-plotly.js';
import React from 'react';
import { Button } from 'react-bootstrap';
import { catmullRom2bezier } from '@antv/g2plot/lib/utils/path';
// import Choosepage from './pages/Choosepage'

 function DetailsChart ({search}){

  const countryName = search;

  const cName = countryName.map( (d , i) => countryName[i]?.region.province +' '+countryName[i]?.region.name)
  console.log(cName)
  var obj = [];

  const mapfatality = countryName.map( (_, i) => countryName[i]?.fatality_rate * 100 )
  const mapActive = countryName.map( (_, i) => countryName[i]?.active /1000000)

  console.log(countryName)

  const newArr = countryName.map( (d , i)=> {
    countryName[i]?.region.name
    // console.log(i)
  })

  console.log(newArr)

  return ( <div>

    <Plot
      data={[
          {
              x: cName,
              y: mapActive,
              type: 'bar',
              mode: 'lines+markers',
              marker: {color: '#00BFFF'},
              name:'Active Cases (M)'
          },
          {type: 'line', x: cName, y: mapfatality, name:'Fatality Rate (%)', marker: {color: 'purple'}},
      ]}
      layout={ {width: 1700, height: 900, title: 'Fatality Rate (%)', maker:{color: 'green'}, plot_bgcolor:"lightslategray", paper_bgcolor:"#FFF3", paddingTop:'10px'}}
      />

      </div>
      );
  }

    export default DetailsChart;