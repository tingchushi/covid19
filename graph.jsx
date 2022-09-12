// import React from 'react';
import Plot from 'react-plotly.js';
import {Link,useNavigate,useParams} from 'react-router-dom'
import arrName from '/pages/Choosepage'
import arrActive from '/pages/Choosepage'
// import detail from './pages/Choosepage'

import React from 'react';
import { Bar } from "react-chartjs-2";
 
// const App1 = ({arrResult}) =>{
//   return arrResult
  
//   }

  // console.log(App1())
 function Graph ({ arrName , arrActive }){
  return ( <div>
            
            {/* <Link to="/">Back to Home</Link> */}
      <Plot
        data={[
            {
                // x:,
                // y:,
                type: 'bar',
                mode: 'lines+markers',
                marker: {color: 'purple'},
            },
            {type: 'bar', x: arrName, y: arrActive},
        ]}
        layout={ {width: 1600, height: 900, title: 'Overall' }}
        />
        </div>
        );
  }

    export default Graph;
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