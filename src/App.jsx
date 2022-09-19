import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from '/pages/Homepage'
import Layout from "/layouts/Layout";
import Choosepage from "../pages/Choosepage";
import DetailsChart from "../pages/DetailsCharts";
import API from "../API";
import Footer from "../Footer";

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
          <Route path='/Analysis/charts' element={<DetailsChart API={API}/>} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </BrowserRouter>
    <Footer className='footer' ></Footer>
    </>
  )
}

export default App
