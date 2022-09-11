import {Link} from 'react-router-dom'

function Navbar() {
    return (
      <nav>
        <ul>
          <li>
                <Link to="/">Country</Link>
            </li>
            <li>
                <Link to="/case">Cases</Link>
            </li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;