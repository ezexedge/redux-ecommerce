import {Nav,Navbar,Container} from 'react-bootstrap'

const Header = () => {
    return ( 
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Container>
        <Navbar.Brand href="/">Proshop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ml-auto"
          >
            <Nav.Link href="/cart"> <i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
            <Nav.Link href="/login"><i className="fas fa-user"></i> Signin</Nav.Link>
        
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
        </Container>
      </Navbar>
     );
}
 
export default Header;