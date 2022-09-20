import { Button , Card} from 'react-bootstrap'

function Card1({search, removeAll, removeList, handleClick}) {

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
             <td>  {d?.active.toLocaleString()} </td> 
             <td>  {d?.confirmed.toLocaleString()} </td> 
             <td>  {d?.confirmed_diff.toLocaleString()}</td> 
             <td>  {d?.recovered.toLocaleString()}</td>
             <td>  {d?.recovered_diff.toLocaleString()}</td>
             <td>  {(d?.fatality_rate * 100).toFixed(2)}</td>
             <td>  {d?.deaths.toLocaleString()}</td>
             <td>  {d?.deaths_diff.toLocaleString()}</td>
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
    <div sytle={{padding:'100px'}}>
    <Button onClick={removeAll} style={{marginRight: '3px'}}>Reset All</Button>
    <Button onClick={handleClick} search={search} >Plot Graph</Button>
    </div>
    </Card.Body>
    </Card>
    )
}

export default Card1;