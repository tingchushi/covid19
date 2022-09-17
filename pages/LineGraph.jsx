import Plot from 'react-plotly.js';
import React from 'react';


function Graph ({arrName, arrConfirmed, live, arrActive, arrDeath, arrRecovered}){
   
    console.log(live)
    // console.log(arrActive)
    console.log(JSON.stringify(arrName[live]))
//    console.log(JSON.stringify(arrDeath))
    // console.log((arrDetails[live].death))

    return ( <div>
  <Plot
    // data={[
    //     {
    //         // x: "1",
    //         // y: [1],
    //         type: 'bar',
    //         mode: 'bar+markers',
    //         marker: {color: 'purple'},
    //     },
    //     {type: 'bar', x: [JSON.stringify(arrName[live]), "Hello"], y: [JSON.stringify(arrActive[live], JSON.stringify(arrConfirmed[live]))]},
    // ]}
    // layout={ {width: 1600, height: 900, title: name  }}
    data = {[{
        x: ["Active Cases", "Confirmed Cases", "Recovered Cases", "Death"],
        y: [JSON.stringify(arrActive[live]), JSON.stringify(arrConfirmed[live]), JSON.stringify(arrRecovered[live]),JSON.stringify(arrDeath[live])],
        type: "bar"  }]}
       layout = {{width: 1600, height: 900, title:arrName[live]}}
    />
    </div>
    );
}

export default Graph;