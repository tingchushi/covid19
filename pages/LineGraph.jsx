import Plot from 'react-plotly.js';
import React from 'react';


function LineGraph ({province, details, live, arrName, name}){
    // console.log(details[live]?.active)
    // const name = details[live]?.region.name
    // console.log(details)
    // console.log(typeof name)
    // console.log(typeof details)
    // console.log(name[live])
git 
    return ( <div>
  <Plot
    data={[
        {
            // x: name[live],
            // y: name[live],
            type: 'bar',
            mode: 'bar+markers',
            marker: {color: 'purple'},
        },
        {type: 'bar', x: [1,2,3], y: [1,2,3]},
    ]}
    layout={ {width: 1600, height: 900, title: name  }}
    />
    </div>
    );
}

export default LineGraph;