
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
            <Nav.Link href="/analysis">Analysis</Nav.Link>
            <Nav.Link href="/charts">Charts</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Navbar bg="dark" variant="dark" className='footer'/>
    </>
  );
}

export default NavBar1;