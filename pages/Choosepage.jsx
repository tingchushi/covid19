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
  const [live, setLive] = useState(0);
  const [details, setDetails] = useState([])
  const [search, setSearch] = useState([])

  
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

  useEffect(() => {
    arr()
     },[])
    

const detail = [
  {
    id: 1,
    name: "Rahvayana",
    // image: require("./assets/rahvayana.jpg"),
    description:
      "Yang menulis di buku ini belum tentu saya, sebab Rahwana tak mati-mati. Gunung kembar Sondara-Sondari yang mengimpit Rahwana cuma mematikan tubuhnya semata. Jiwa Rahwana terus hidup. Hidupnya menjadi gelembung-gelembung alias jisim. Siapa pun bisa dihinggapi gelembung itu, tak terkecuali saya.   Yang menulis di buku ini barangkali gelembung-gelembung itu, jisim…",
    author: "Sujiwo Tejo"
  },
  {
    id: 2,
    name: "Tuhan Maha Asyik",
    // image: require("./assets/tuhan.jpg"),
    description:
      "Melalui kisah-kisah yang dikemas dalam dialog polos ala dunia bocah, Sujiwo Tejo dan Buya MN. Kamba coba mengajak kita ”bermain-main” untuk memperkenalkan ke-Maha Asyik-an Tuhan. Tuhan sangat asyik ketika Dia tidak kita kurung paksa dalam penamaan-penamaan dan pemaknaan-pemaknaan. Dia tak terdefinisikan. Dia tak terkmaknakan. Dia ada sebelum definisi dan makna…",
    author: "Sujiwo Tejo"
  },
  {
    id: 3,
    name: "Sabdo Cinta Angon Kasih",
    // image: require("./assets/sabdo.jpg"),
    description:
      "Mbok Jamu berselendang ungu itu menjadi sumber kebahagiaan bagi orang-orang yang datang dan pergi membeli dagangannya. Bukan karena rambut hitam kehijauannya, lereng keningnya yang bening, atau kecantikannya yang tiada tara. Para pria menjadi platinum member jamunya karena Mbok Jamu pintar memosisikan diri sebagai konco wingking. Perempuan yang posisinya selangkah di…",
    author: "Sujiwo Tejo"
  },
  {
    id: 4,
    name: "Talijiwo",
    // image: require("./assets/talijiwo.jpg"),
    description:
      "Sudah berapa lama kau terjebak dengan beragam kesibukan yang tak habis-habis itu? Berhentilah berbusa-busa tentang kemerdekaan bila ternyata kau sendiri tak punya waktu luang. Padahal, hanya di dalam waktu luang manusia bisa berpikir dan merenung tentang bagaimana seyogianya mengisi kemerdekaan hidup. Maka, waktu luang itu jangan dimampatkan lagi dengan melulu…",
    author: "Sujiwo Tejo"
  }
]
    const addToFavorite = () => {
      setSearch([...search, details[live]])
      console.log(search)
    }

    const removeList = (event) => {
      // console.log(search)
      // console.log(event.target.value)
      setSearch(() => search.filter((_, index) => index !== 0));
    }


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
                    <Button href="#">Another Link</Button>
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
                                      <td><button onClick={removeList}>x</button></td>
                            </tr>)}
                            )}
                        </table>
 
                      </div>

                    </div>
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                  <Card.Text>
        
                  </Card.Text>
                  <Button></Button>
                  <Button href="#"></Button>
                </Card.Body>
              </Card>
              </ul>
            </div>   
          </div>
            <Graph arrName={arrName} arrActive={arrActive} arrConfirmed={arrConfirmed} />
            <LineGraph arrName={arrName} details={details} live={live}/>
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

