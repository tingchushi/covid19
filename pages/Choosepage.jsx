import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import {BrowserRouter, Link} from 'react-router-dom'
import OverallGraph from './OverallChart'
import { Button , Card} from 'react-bootstrap'
import {Container ,ListGroup, Col} from 'react-bootstrap';  
import PieChart from '/pages/PieChart'
import Card1 from './Card1'
import Card2 from './Card2'
import DetailsChart from './DetailsCharts'
// import { PieChart } from 'bizcharts'



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
  const [isShown, setIsShown] = useState(false);
  const [status, setStatus] = useState("idle");

  
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
      countryName.push(arrResult[key].region.name);
      province.push(arrResult[key].region.province);
      activeCase.push(arrResult[key].active);
      confirmedCase.push(arrResult[key].confirmed);
      recoveredCase.push(arrResult[key].recoverd);
      deathCase.push(arrResult[key].deaths);
      fatalityRate.push(arrResult[key].fatality_rate);
    }
    
      setDetails(arrResult);
      setName(countryName);
      setProvince(province);
      setActive(activeCase);
      setConfirmed(confirmedCase);
      setRecovered(recoveredCase);
      setDeath(deathCase);
      setFatalityRate(fatalityRate);
      setDetails(data.data);
   
    })
  }

  useEffect(() => {
    arr()
     },[])
    
    const addToFavorite = (event) => {
      // const arr2 = search
      const value2 = details[live]
      
      const index = search.findIndex(object => object?.region.lat === value2?.region.lat);
      
      if (index === -1) {
        search.push(value2);
      }
      
      // 👇️ [{ id: 1 }, { id: 2 }, { id: 3 }]
      // console.log(search)
      // console.log(arr2);
      setSearch([...search]);
        // setSearch([...search, details[live]]);
    }

    const removeList = (event) => {
      console.log(event.target.getAttribute('data-key'));
      let x = event.target.getAttribute('data-key');
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

    const handleClick = event => {
      setIsShown(current => !current);
    };

    
//https://thewebdev.info/2022/02/07/how-to-map-multiple-arrays-with-javascript/
    const country = (name, province) => name.map((x, i) => {
      return (
        <option value={i}>
          {[x, " " + province[i]]}
        </option> 
        
    )})

      // console.log(death)

      return (
      <div style={{color:'lightslategray', backgroundColor:'lightslategray',padding:'10px', paddingBottom:'10px', paddingTop:'1px'}}> 
        <h3>
        <Container>
          <Form.Label className='formlabel'>Select a Country</Form.Label>
            <br />
          <Form.Control as="select" custom={+true} onChange={handleChange} className='dropdown'>
            {country(province,name)}
          </Form.Control>
        </Container>
          <div style={{padding:'8px', borderRadius: '5px'}}/>
          {/* https://bobbyhadz.com/blog/react-onclick-show-component#:~:text=To%20show%20or%20hide%20another,based%20on%20the%20state%20variable. */}
          <div className="cardContainer" style={{paddingLeft:'10px'}}>
              <div style={{padding : "10px"}}>
                <Card2 details={details} live={live} addToFavorite={addToFavorite} handleClick={handleClick} className='card'/>
              </div>
              <div style={{padding : "10px"}}>
                 <Card1 search={search} removeAll={removeAll} removeList={removeList} handleClick={handleClick} className='card'/>
              </div>
          </div>
          <div className='cardContainer' style={{paddingLeft:'10px'}}>
            <div style={{padding:'10px',borderRadius: '5px'}}>
              <PieChart arrName={arrName} arrActive={arrActive} arrConfirmed={arrConfirmed} live={live} arrDetails={arrDetails} arrDeath={arrDeath} arrRecovered={arrRecovered} className='card'/>
            </div>
            <div style={{padding:'10px', paddingBottom:'20px'}}>

              <OverallGraph arrName={arrName} arrActive={arrActive} arrConfirmed={arrConfirmed} live={live} arrDetails={arrDetails} arrDeath={arrDeath} arrRecovered={arrRecovered} className='card'/>
            </div>
          </div>
          <div style={{backgroundColor:'lightslategray',paddingLeft: '20px', paddingBottom:'5px'}}>
            {isShown && <DetailsChart search={search}/>}
          </div>
        </h3>
      </div>
  )
}
export default Choosepage

