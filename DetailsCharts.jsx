
import Plot from 'react-plotly.js';
import React from 'react';
import { Button } from 'react-bootstrap';

 function DetailsGraphs ({arrName,arrActive,arrConfirmed,live,arrDetails,arrDeath,arrRecovered}){
  // console.log(arrActive);
  // console.log("arrActive");
  return ( <div>

    <Plot
      data={[
          {
              // x:,
              // y:,
              type: 'line',
              mode: 'lines+markers',
              marker: {color: 'purple'},
          },
          {type: 'line', x: [1,2,3], y: [1,2,3], name:'Active Cases'},
      ]}
      layout={ {width: 1600, height: 900, title: 'Overall' }}
      />
      <h1>
        <Button href='/analysis'>Back to Mainpage</Button>
      </h1>
      </div>
      );
  }

    export default DetailsGraphs;