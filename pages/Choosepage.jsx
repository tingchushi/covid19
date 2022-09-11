import { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import {Link} from 'react-router-dom'
import App1 from '../graph'

// https://rapidapi.com/axisbits-axisbits-default/api/covid-19-statistics/
 
function Choosepage() {
  const [name, setName] = useState([]);
  const [province, setProvince] = useState([])
  const [active, setActive] = useState([])
  const [confirmed, setConfirmed] = useState([])
  const [live, setLive] = useState('');
  
  const arrResult = active;
  const arrNew = [1,2,3,4,5,6,7,8]
  
  const arr = () =>{
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f42d8fa1a7msh98395db0e1a5533p179806jsnc430cce8857b',
        'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com'
      }
    };
    
    fetch('https://covid-19-statistics.p.rapidapi.com/reports', options)
      .then(response => response.json())
      .then((data) => {
  
      const datas = data.data;
  
      datas.forEach(function(value, index) {
      arrResult[index] = value;(datas);
  
    });
      
      const countryName = [];
      const province = [];
      const activeCase = [];
      const confirmedCase = [];
  
    for (var key in arrResult){
      countryName.push(arrResult[key].region.name)
      province.push(arrResult[key].region.province)
      activeCase.push(arrResult[key].active)
      confirmedCase.push(arrResult[key].confirmed)
    }
  
      setName(countryName)
      setProvince(province)
      setActive(activeCase)
      setConfirmed(confirmedCase)
   
    })

  }
  useEffect(() => {
    arr()
     },[])
     
    //  console.log(name)
    //  console.log(active)
    //  console.log(confirmed)
    console.log(arrResult)
  


    const handleChange = (event) => {
      console.log('change');
      console.log("event",setLive(event.target.value));
    }


//https://thewebdev.info/2022/02/07/how-to-map-multiple-arrays-with-javascript/
    const country = (name, province) => name.map((x, i) => {
      return (
        <option key={i}>
          {[x, " " + province[i]]}
        </option> 
    )})
    // console.log[name]


      return (
      <div> 
        <div>
        <Container>
          <Row>
            <Col>
              <Form>
                <Form.Group controlId="exampleForm.SelectCustom">
                  <Form.Label>Select a Country</Form.Label>
                  <br />
                  <Form.Control as="select" custom={+true} onChange={handleChange} style={{marginLeft: "0"}}>
                     {country(province,name)}
                  </Form.Control>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
          <h4>Selected: {live} </h4>
          <App1 arrResult={arrResult}/>
          <Link to="/charts/">Home</Link>
      </div>
      
</div>
  )
}
export default Choosepage

