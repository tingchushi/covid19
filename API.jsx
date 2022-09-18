import { useState, useEffect } from 'react'

function API () {

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

}

export default API;