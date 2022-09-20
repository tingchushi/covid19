import Plot from 'react-plotly.js';
import React from 'react';
import { Card } from 'react-bootstrap';


function Graph ({arrName, arrConfirmed, live, arrActive, arrDeath, arrRecovered}){
   
    return (
     <Card style={{ width: '30rem', backgroundColor:'lightgrey'}}>
        <Plot
            data = {[{
                values: [JSON.stringify(arrActive[live]),JSON.stringify(arrDeath[live])],
                labels: ['Active Cases', 'Death Cases', 'Utility'],
                type: 'pie', }
            ]}
            
            layout = {{width: 475, height: 600, title:arrName[live], plot_bgcolor:"orange", paper_bgcolor:"#FFF3"}}
            />
        </Card>
    );
}

export default Graph;

// function Graph ({arrName, arrConfirmed, live, arrActive, arrDeath, arrRecovered}){
   
//     return ( <div>
//   <Plot
//     data = {[{
//         x: ["Active Cases", "Confirmed Cases",  "Death", "Recovered Cases",],
//         y: [JSON.stringify(arrActive[live]), JSON.stringify(arrConfirmed[live]), JSON.stringify(arrDeath[live]), JSON.stringify(arrRecovered[live]),],
//         type: "bar"  }
//     ]}
//        layout = {{width: 1600, height: 900, title:arrName[live]}}
//     />
//     </div>
//     );
// }

// export default Graph;