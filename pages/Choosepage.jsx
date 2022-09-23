import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import OverallGraph from './OverallChart'
import {Container ,ListGroup, Col} from 'react-bootstrap';  
import PieChart from '/pages/PieChart'
import Card1 from './Favlist'
import Card2 from './Countrydetails'
import DetailsChart from './DetailsCharts'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

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
  const [loading, setLoading] = useState(true)

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
    setTimeout(() => setLoading(false), 6000)
     },[])
    
    const addToFavorite = (event) => {
      const value2 = details[live]
      const index = search.findIndex(object => object?.region.lat === value2?.region.lat);
      if (index === -1) {
        search.push(value2);
      }
      setSearch([...search]);

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
   
      return (
       
      <div style={{color:'lightslategray', backgroundColor:'lightslategray',padding:'10px', paddingBottom:'10px', paddingTop:'10px'}}> 
         {loading === false ? (
        <h3> 
        <Container>
          <Form.Label className='formlabel'>Select a Country</Form.Label>
            <br />
            <br/>
            <br/>
          <Form.Control as="select" custom={+true} onChange={handleChange} className='dropdown'>
          
            {country(province,name)}
          </Form.Control> 
        </Container>
            <div style={{display:'flex',width:'auto', height:'auto',alignItems:'center', justifyContent: 'center', paddingLeft:'25%%'}}>
                <p style={{ left:'auto'}}><Card2 details={details} live={live} addToFavorite={addToFavorite} handleClick={handleClick} className='card'/></p>
                <p style={{padding:'50px'}}><PieChart  style={{ paddingTop:'50px' }} arrName={arrName} arrActive={arrActive} arrConfirmed={arrConfirmed} live={live} arrDetails={arrDetails} arrDeath={arrDeath} arrRecovered={arrRecovered} className='card'/></p>
            </div>
          <div className="App" style={{paddingTop:'0px', top: '0%'}}>
            <Tabs className="Tabs">
              <TabList>
                <Tab>Overview</Tab>
                <Tab>Favs List</Tab>
              </TabList>
            <TabPanel style={{display:'flex'}}>
              <p style={{padding:'120px'}}><OverallGraph arrName={arrName} arrActive={arrActive} arrConfirmed={arrConfirmed} live={live} arrDetails={arrDetails} arrDeath={arrDeath} arrRecovered={arrRecovered} className='card'/></p>
              </TabPanel>
   
              <TabPanel style={{padding: '0px'}}>
                <p style={{padding:'120px', color:'black'}}><Card1 search={search} removeAll={removeAll} removeList={removeList} handleClick={handleClick} className='card'/></p>
                <p><div style={{paddingLeft: '20px', paddingBottom:'0px'}}>
            {isShown && <DetailsChart search={search}/>}
          </div></p>
              </TabPanel>
            </Tabs>
          </div>
        </h3>) : ( 
          <div style={{height:'900px', textAlign:'center'}}>
            <div style={{color:'white'}}>Loading....</div><progress style={{height:'10px', width:'100px', justifyContent:'center'}} ></progress>
          </div>)}
          {/* <h1>1</h1> */}
          {/* <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1> */}
      </div>
  )
}
export default Choosepage