import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import {Link} from 'react-router-dom'
import Graph from './Graph'
import { Button , Card} from 'react-bootstrap'
import {Container ,ListGroup, Col} from 'react-bootstrap';  
import LineGraph from '/pages/LineGraph'



// https://rapidapi.com/axisbits-axisbits-default/api/covid-19-statistics/
 
function Choosepage() {
  const [name, setName] = useState([]);
  const [province, setProvince] = useState([])
  const [active, setActive] = useState([])
  const [confirmed, setConfirmed] = useState([])
  const [death, setDeath] = useState([])
  const [recovered, setRecovered] = useState([])
  const [fatalityRate, setFatalityRate] = useState([])
  const [live, setLive] = useState(0);
  const [details, setDetails] = useState([])
  const [search, setSearch] = useState([])

  
  const arrResult = []
  const arrName = name;
  const arrActive = active;
  const arrConfirmed = confirmed;
  const arrDetails = details;
  const arrDeath = death;
  const arrRecovered = recovered;
  const arrFatalityRate = fatalityRate;

 
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
      const recoveredCase = [];
      const deathCase = [];
      const fatalityRate = [];
  
    for (var key in arrResult){
      countryName.push(arrResult[key].region.name)
      province.push(arrResult[key].region.province)
      activeCase.push(arrResult[key].active)
      confirmedCase.push(arrResult[key].confirmed)
      recoveredCase.push(arrResult[key].recoverd)
      deathCase.push(arrResult[key].deaths)
      fatalityRate.push(arrResult[key].fatality_rate)
    }
    
      setDetails(arrResult)
      setName(countryName)
      setProvince(province)
      setActive(activeCase)
      setConfirmed(confirmedCase)
      setRecovered(recoveredCase)
      setDeath(deathCase)
      setFatalityRate(fatalityRate)
      setDetails(data.data)
   
    })
  }

  useEffect(() => {
    arr()
     },[])
    
// console.log(typeof province)

// console.log(details)
    const addToFavorite = () => {
      setSearch([...search, details[live]])
    }

    const removeList = (event) => {
      console.log(event.target.getAttribute('data-key'))
      let x = event.target.getAttribute('data-key')
      setSearch(() => search.filter((_, index) => index != x));
    }

    const handleChange = (event) => {
      console.log('change');
      console.log("event",setLive(event.target.value))
    }

    const removeAll = () => {
      console.log("remove all")
      console.log(search.length)
      setSearch(() => search.splice(0,search.length))

    }

//https://thewebdev.info/2022/02/07/how-to-map-multiple-arrays-with-javascript/
    const country = (name, province) => name.map((x, i) => {
      return (
        <option value={i}>
          {[x, " " + province[i]]}
        </option> 
        
    )})

      // console.log(death)

      return (
      <div> 
        <h3>
        <Container>
          <Form.Label className='formlabel'>Select a Country</Form.Label>
            <br />
          <Form.Control as="select" custom={+true} onChange={handleChange} className='dropdown'>
            {country(province,name)}
          </Form.Control>
        </Container>
          <br />
          <div className="cardContainer">
            <div>
              <ul>
                  <Card style={{ width: '30rem' }}>
                  <Card.Body>
                    <Card.Title>{details[live]?.region.province}  {details[live]?.region.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Longitude : {details[live]?.region.lat}<br /> Latitude : {details[live]?.region.long}</Card.Subtitle>
                    <Card.Text>
                    <ul style={{fontSize: 18}}>
                      <li> Index : {live}</li> 
                      <li> Active Cases : {details[live]?.active}</li>
                      <li>Confirmed Cases :{details[live]?.confirmed}</li>
                      <li>Confirmed Diff :{details[live]?.confirmed_diff}</li>
                      <li>Recovered: {details[live]?.recovered}</li>
                      <li>Recovered Diff: {details[live]?.recovered_diff}</li>
                      <li>Fatality Rate: {details[live]?.fatality_rate}</li>
                      <li>Death: {details[live]?.deaths}</li>
                      <li>Death Diff: {details[live]?.deaths_diff}</li>
                      <li>Date: {details[live]?.date}</li>
                    </ul>
                    </Card.Text>
                    <Button onClick={addToFavorite}>Add to Favs</Button>
                  </Card.Body>
                </Card>
              </ul>
            </div>
            <div>  
              <ul>
              <Card style={{ width: '60rem' }}>
                <Card.Body>
                  <Card.Title>
                    <div>
                    <div>
                      Favourite List: 
                      <table className='customers'>
                          <tr>
                            <th>Country</th>
                            <th>Active Cases</th>
                            <th>Confirmed Cases</th>
                            <th>Confirmed Delta</th>
                            <th>Recovered</th>
                            <th>Recovered Delta</th>
                            <th>Fatality Rate</th>
                            <th>Death</th>
                            <th>Death Delta</th>
                            <th>Cancel</th>
                          </tr>
                          {search.map(function(d, idx){
                             return (<tr key={idx}>
                             <td>  {d?.region.province} {d?.region.name}</td> 
                             <td>  {d?.active} </td> 
                             <td>  {d?.confirmed} </td> 
                             <td>  {d?.confirmed_diff}</td> 
                             <td>  {d?.recovered}</td>
                             <td>  {d?.recovered_diff}</td>
                             <td>  {d?.fatality_rate}</td>
                             <td>  {d?.deaths}</td>
                             <td>  {d?.deaths_diff}</td>
                             <td><button data-key={idx} key={idx} onClick={(idx)=>removeList(idx)}>x</button></td>
                            </tr>)}
                            )}
                        </table>
 
                      </div>

                    </div>
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                  <Card.Text>
        
                  </Card.Text>
                  <Button onClick={removeAll}>Reset All</Button>
                  <h1></h1>
                  <Button arrName={arrName} arrActive={arrActive} arrConfirmed={arrConfirmed} live={live} arrDetails={arrDetails} arrDeath={arrDeath} arrRecovered={arrRecovered} href="/charts" >Plot Graph</Button>
                </Card.Body>
              </Card>
              </ul>
            </div>   
          </div>
            <LineGraph arrName={arrName} arrActive={arrActive} arrConfirmed={arrConfirmed} live={live} arrDetails={arrDetails} arrDeath={arrDeath} arrRecovered={arrRecovered}/>
            <Graph arrName={arrName} arrActive={arrActive} arrConfirmed={arrConfirmed} live={live} arrDetails={arrDetails} arrDeath={arrDeath} arrRecovered={arrRecovered} />
          <br />
          <br />
          <div>
              <Link to="/">
              <Button>Home</Button>
            </Link>
          </div>
      </h3>
      
</div>
  )
}
export default Choosepage

