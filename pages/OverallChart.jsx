
import Plot from 'react-plotly.js';
import React from 'react';
import {Card} from 'react-bootstrap'

 function OverallGraph ({ arrName , arrActive }){
  return ( <Card style={{ width: '70rem', backgroundColor:'lightslategray', borderRadius: '5px' }}>
      <Plot
        data={[
            {
                // x:,
                // y:,
                type: 'line',
                mode: 'lines+markers',
                marker: {color: 'purple'},
            },
            {type: 'line', x: arrName, y: arrActive, name:'Active Cases'},
        ]}
        layout={ {width: 1200, height: 600, title: 'Overall Active Cases', plot_bgcolor:"grey", paper_bgcolor:"lightgrey", borderRadius:'50%' ,  margin: {
            l: 50,
            r: 50,
            b: 200,
            t: 100,
            pad: 4
          }}}
        />

        </Card>
        );
  }

    export default OverallGraph;
//https://codesandbox.io/s/fcn3v?file=/src/Employee_Joined.js

