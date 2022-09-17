
import Plot from 'react-plotly.js';
import React from 'react';

 function Graph ({ arrName , arrActive, detailsArr }){
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
            {type: 'line', x: arrName, y: arrActive, name:'Active Cases'},
        ]}
        layout={ {width: 1600, height: 900, title: 'Overall' }}
        />

        </div>
        );
  }

    export default Graph;
//https://codesandbox.io/s/fcn3v?file=/src/Employee_Joined.js

  