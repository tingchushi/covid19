import Plot from 'react-plotly.js';
import React from 'react';
import { Card } from 'react-bootstrap';


function Graph ({arrName, live, arrActive, arrDeath}){
   
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