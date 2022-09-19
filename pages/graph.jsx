
import Plot from 'react-plotly.js';
import React from 'react';
import {Card} from 'react-bootstrap'

 function Graph ({ arrName , arrActive, detailsArr }){
  return ( <Card style={{ width: '70rem' }}>
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
        layout={ {width: 1100, height: 600, title: 'Overall Active Cases', plot_bgcolor:"black", paper_bgcolor:"lightgrey" }}
        />

        </Card>
        );
  }

    export default Graph;
//https://codesandbox.io/s/fcn3v?file=/src/Employee_Joined.js

  