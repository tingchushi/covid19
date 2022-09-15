import Plot from 'react-plotly.js';
import React from 'react';

function LineGraph ({details, live, arrName}){
    // console.log(details[live]?.active)
    const name = details[live]?.region.name
    return ( <div>
  <Plot
    data={[
        {
            x: ["Active Cases", "Confirmed Cases"],
            y: [1,2],
            type: 'bar',
            mode: 'lines+markers',
            marker: {color: 'purple'},
        },
        {type: 'bar', x: ["Active Cases", "Confirmed Cases"], y: [1,2]},
    ]}
    layout={ {width: 1600, height: 900, title: name  }}
    />
    </div>
    );
}

export default LineGraph;