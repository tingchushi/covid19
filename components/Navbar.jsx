import {Link} from 'react-router-dom'

// function Navbar() {
//     return (
//       <nav>
//         <ul>
//           <li>
//                 <Link to="/">Home</Link>
//             </li>
//             <li>
//                 <Link to="/case">Case Analysis</Link>
//             </li>
//         </ul>
//       </nav>
//     );
//   }
  
//   export default Navbar;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'

function NavBar1() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className='header'>
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/case">Analysis</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Navbar bg="dark" variant="dark" className='footer'/>
    </>
  );
}

export default NavBar1;