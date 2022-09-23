import { Button , Card} from 'react-bootstrap'

function Card2({details, addToFavorite, live, handleClick}) {

    return (

<Card style={{ width: '30rem', backgroundColor:'lightgrey' }}>
<Card.Body style={{fontSize: 18, color:'grey', textAlign:'left'}}>
  <Card.Title>{details[live]?.region.province}  {details[live]?.region.name}</Card.Title>
  <Card.Subtitle className="mb-2 text-muted">Longitude : {details[live]?.region.lat}<br /> Latitude : {details[live]?.region.long}</Card.Subtitle>
  <Card.Text>
  <div style={{fontSize: 16, color:'grey', textAlign:'left'}}>
    <p> Index : {live}</p> 
    <p> Active Cases : {details[live]?.active.toLocaleString()}</p>
    <p>Confirmed Cases :{details[live]?.confirmed.toLocaleString()}</p>
    <p>Confirmed Diff :{details[live]?.confirmed_diff.toLocaleString()}</p>
    <p>Recovered: {details[live]?.recovered.toLocaleString()}</p>
    <p>Recovered Diff: {details[live]?.recovered_diff.toLocaleString()}</p>
    <p>Fatality Rate (%): {(details[live]?.fatality_rate * 100 ).toFixed(2)}</p>
    <p>Death: {details[live]?.deaths.toLocaleString()}</p>
    <p>Death Diff: {details[live]?.deaths_diff}</p>
    <p>Date: {details[live]?.date}</p>
  </div>
  </Card.Text>
  <Button onClick={addToFavorite} >Add to Favs</Button>
</Card.Body>
</Card>
    )
}

export default Card2;