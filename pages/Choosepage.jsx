import { useState, useEffect } from 'react'
// import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import {Link} from 'react-router-dom'
import Graph from '../graph'
import { Button , Card} from 'react-bootstrap'
// import ListGroup from 'react-bootstrap/ListGroup'
import {Container ,ListGroup, Col} from 'react-bootstrap';  


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
      setDetails(data.data)
   
    })
  }
  // console.log(details)
  // console.log(details[live]?.active)
  // console.log(details[live]?.confirmed)
  // console.log(details[live]?.region.name)
  // console.log(details[live]?.region.iso)
  // console.log(details[live]?.region.lat)
  // console.log(details[live]?.region.long)
  // console.log(details[live]?.active)
  // console.log(details[live]?.confirmed)
  // console.log(details[live]?.confirmed_diff)
  // console.log(details[live]?.recovered)
  // console.log(details[live]?.recovered_diff)
  // console.log(details[live]?.fatality_rate)
  // console.log(details[live]?.deaths)
  // console.log(details[live]?.deaths_diff)
  
  useEffect(() => {
    arr()
     },[])
     
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
          <h8>
            {/* Selected: {live} */}
            {/* <br />
            <br /> */}
            <ul>
                {/* <li> Index : {live}</li> 
                <li> Country Name : {details[live]?.region.province}  {details[live]?.region.name}</li>
                <li> Active Cases : {details[live]?.active}</li>
                <li>Location : Longitude{details[live]?.region.lat}, Latitude{details[live]?.region.long}</li>
                <li>Confirmed Cases :{details[live]?.confirmed}</li>
                <li>Confirmed Diff :{details[live]?.confirmed_diff}</li>
                <li>Recovered: {details[live]?.recovered}</li>
                <li>Recovered Diff: {details[live]?.recovered_diff}</li>
                <li>Fatality Rate: {details[live]?.fatality_rate}</li>
                <li>Death: {details[live]?.deaths}</li>
                <li>Death Diff: {details[live]?.deaths_diff}</li> */}
                <Card style={{ width: '30rem' }}>
                <Card.Body>
                  <Card.Title>{details[live]?.region.province}  {details[live]?.region.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Longitude : {details[live]?.region.lat}<br /> Latitude : {details[live]?.region.long}</Card.Subtitle>
                  <Card.Text>
                  <ul>
                    <li> Index : {live}</li> 
                    {/* <li> Country Name : {details[live]?.region.province}  {details[live]?.region.name}</li> */}
                    <li> Active Cases : {details[live]?.active}</li>
                    {/* <li>Location : Longitude{details[live]?.region.lat}, Latitude{details[live]?.region.long}</li> */}
                    <li>Confirmed Cases :{details[live]?.confirmed}</li>
                    <li>Confirmed Diff :{details[live]?.confirmed_diff}</li>
                    <li>Recovered: {details[live]?.recovered}</li>
                    <li>Recovered Diff: {details[live]?.recovered_diff}</li>
                    <li>Fatality Rate: {details[live]?.fatality_rate}</li>
                    <li>Death: {details[live]?.deaths}</li>
                    <li>Death Diff: {details[live]?.deaths_diff}</li>
                  </ul>
                  </Card.Text>
                  <Button href="/pricing">Add to Favs</Button>
                  <Button href="#">Another Link</Button>
                </Card.Body>
              </Card>

            </ul>
            
            <div>  
          </div>   
              
          </h8>
          <Link to="/pricing">
            <Graph arrName={arrName} arrActive={arrActive} arrConfirmed={arrConfirmed}/>
          </Link>
          <br />
          <br />
          <div>
              <Link to="/">
              <Button>Home</Button>
            </Link>
          </div>
      </div>
      
</div>
  )
}
export default Choosepage

