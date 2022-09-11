// import React from 'react';
import Plot from 'react-plotly.js';
import {Link,useNavigate,useParams} from 'react-router-dom'
import arrResult from '/pages/Choosepage'
// import detail from './pages/Choosepage'

import React from 'react';
import { Bar } from "react-chartjs-2";
 
// const App1 = ({arrResult}) =>{
  
  
  class App1 extends React.Component {
 
    render() {
      console.log(this.arrResult)
      return (
        <div>
            
            <Link to="/">Back to Home</Link>
      <Plot
        data={[
          {
            x: this.arrResult,
            y: this.arrResult,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'bar', x: this.arrResult, y: this.arrResult},
        ]}
        layout={ {width: 1280, height: 768, title: 'A Fancy Plot'} }
        />
        </div>
        );
      }
    }
  // }
    export default App1;
//https://codesandbox.io/s/fcn3v?file=/src/Employee_Joined.js
// class App1 extends React.Component {
//   render()) {
//     console.log(arrNew)
//     return (
//         <div>
            
//             <Link to="/">Back to Home</Link>
//       <Plot
//         data={[
//             {
//                 x: [1,2,3],
//                 y: [1,2,3],
//                 type: 'scatter',
//                 mode: 'lines+markers',
//                 marker: {color: 'red'},
//             },
//             {type: 'bar', x: [1, 2, 3, 4, 5, 6, 7, 8, 9, ], y: [2, 5, 3]},
//         ]}
//         layout={ {width: 1280, height: 768, title: 'A Fancy Plot'} }
//         />
//         </div>
//         );
//   }

// }