import { Button , Card} from 'react-bootstrap'

function Card2({details, addToFavorite, live, handleClick}) {

    return (

<Card style={{ width: '30rem' }}>
<Card.Body>
  <Card.Title>{details[live]?.region.province}  {details[live]?.region.name}</Card.Title>
  <Card.Subtitle className="mb-2 text-muted">Longitude : {details[live]?.region.lat}<br /> Latitude : {details[live]?.region.long}</Card.Subtitle>
  <Card.Text>
  <ul style={{fontSize: 18}}>
    <li> Index : {live}</li> 
    <li> Active Cases : {details[live]?.active.toLocaleString()}</li>
    <li>Confirmed Cases :{details[live]?.confirmed.toLocaleString()}</li>
    <li>Confirmed Diff :{details[live]?.confirmed_diff.toLocaleString()}</li>
    <li>Recovered: {details[live]?.recovered.toLocaleString()}</li>
    <li>Recovered Diff: {details[live]?.recovered_diff.toLocaleString()}</li>
    <li>Fatality Rate (%): {(details[live]?.fatality_rate * 100 ).toFixed(2)}</li>
    <li>Death: {details[live]?.deaths.toLocaleString()}</li>
    <li>Death Diff: {details[live]?.deaths_diff}</li>
    <li>Date: {details[live]?.date}</li>
  </ul>
  </Card.Text>
  <Button onClick={addToFavorite} >Add to Favs</Button>
</Card.Body>
</Card>
    )
}

export default Card2;