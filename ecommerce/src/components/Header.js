import React from 'react';
import {useDispatch,useSelector} from 'react-redux'

import {LinkContainer} from 'react-router-bootstrap'
import {Nav,Navbar,Container, NavDropdown} from 'react-bootstrap'
import {logout} from '../actions/userActions'
const Header = () => {

  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)

  const {userInfo} = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

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

                {userInfo ?
                
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer  to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>

                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                  </NavDropdown.Item>
                </NavDropdown>

                
                :
                
                (
                  <>
                              <Nav.Link href="/login">

                  <i className="fas fa-user"></i> Signin
                  </Nav.Link>

                  </>
                 )
                
                }

        
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