import { Button , Card} from 'react-bootstrap'

function Card1({search, removeAll, removeList}) {

    return (
<Card style={{ width: '70rem' }}>
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
    <Button href="/charts" >Plot Graph</Button>
    </Card.Body>
    </Card>
    )
}

export default Card1;