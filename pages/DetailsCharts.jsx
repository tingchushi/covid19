
import Plot from 'react-plotly.js';
import React from 'react';


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

    <Plot className='overall'
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
      layout={ {width: 1700, height: 900, title: 'Fatality Rate (%) vs Overall Active Cases(M)', maker:{color: 'green'}, plot_bgcolor:"lightslategray", paper_bgcolor:"lightgrey", paddingTop:'10px', lineWidth:'100px',  margin: {
        l: 50,
        r: 50,
        b: 200,
        t: 100,
        pad: 4
      },}}
      />

      </div>
      );
  }

    export default DetailsChart;