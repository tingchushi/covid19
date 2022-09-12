import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Currencypage from '/pages/Currencypage'
import Homepage from '/pages/Homepage'
// import Pricepage from '/pages/Pricepage'
import currencies from './list'
import Layout from "/layouts/Layout";
import Choosepage from "../pages/Choosepage";
import App1 from "../graph";
// import graph from './graph'



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route
              path="Analysis"
              element={<Choosepage />}
          />
          </Route>
          {/* <Route path="/charts" element={<Pricepage />} /> */}
          <Route path='/charts' element={<App1 />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
