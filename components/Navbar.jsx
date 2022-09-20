
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'


function NavBar1() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className='header'>
        <Container>
        <a class="navbar-brand" href="#">
    <img src="https://cdn-icons-png.flaticon.com/512/2913/2913584.png" width="50" height="50" alt="" />
  </a>
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