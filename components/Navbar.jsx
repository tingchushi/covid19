import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbar1() {
    return (
      <nav>
        <ul>
          <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Analysis">Analysis</Link>
            </li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar1;