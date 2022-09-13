import { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import {Link} from 'react-router-dom'
import Graph from '../graph'


// https://rapidapi.com/axisbits-axisbits-default/api/covid-19-statistics/
 
function Choosepage() {
  const [name, setName] = useState([]);
  const [province, setProvince] = useState([])
  const [active, setActive] = useState([])
  const [confirmed, setConfirmed] = useState([])
  const [live, setLive] = useState('');
  const [details, setDetails] = useState([])
  
  const arrResult = []
  const arrName = name;
  const arrActive = active;
  const arrConfirmed = confirmed
 
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
      arrResult[index] = value;
  
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

      setDetails(arrResult)
      setName(countryName)
      setProvince(province)
      setActive(activeCase)
      setConfirmed(confirmedCase)
   
    })
  }

  console.log(details[live])


  useEffect(() => {
    arr()
     },[])
     
    // console.log(name)
    const handleChange = (event) => {
      console.log('change');
      console.log("event",setLive(event.target.value))
    }

//https://thewebdev.info/2022/02/07/how-to-map-multiple-arrays-with-javascript/
    const country = (name, province) => name.map((x, i) => {
      return (
        <option value={i}>
          {[x, " " + province[i]]}
        </option> 
        
    )})

    console.log(name[live])
    console.log(active[live])
    console.log(confirmed[live]);
    console.log(province[live])
    

      return (
      <div> 
        <div>
        <Container>
                  <Form.Label className='formlabel'>Select a Country</Form.Label>
                  <br />
                  <Form.Control as="select" custom={+true} onChange={handleChange} className='dropdown'>
                     {country(province,name)}
                  </Form.Control>
        </Container>
        <br />
          <h4>Selected: {live} </h4>
          <Graph arrName={arrName} arrActive={arrActive} arrConfirmed={arrConfirmed}/>
          <br />
          <br />
          <div>
          <Link to="/charts/">Home</Link>
          </div>
      </div>
      
</div>
  )
}
export default Choosepage

