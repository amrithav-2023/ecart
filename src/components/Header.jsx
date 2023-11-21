import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';

function Header() {
  //to access state useSelector hook is used
  const wishlist = useSelector((state)=>state.wishlistReducer) //here the state represents store
  //console.log(wishlist);
  const cart = useSelector((state)=>state.cartReducer)
  //console.log(cart);
  return (
    <Navbar expand="lg" className="bg-primary position-fixed top-0 w-100" style={{zIndex:'1'}}>
      <Container>
    <Navbar.Brand><Link to={'/'} style={{textDecoration:'none',color:'white'}}><i class="fa-solid fa-cart-shopping fa-bounce text-warning me-3"></i>E-CART</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='btn border rounded me-5 mt-3'><Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}><i class="fa-solid fa-heart text-warning me-1"></i>Wishlist<Badge bg="secondary" className='ms-1'>{wishlist.length}</Badge></Link></Nav.Link>
            <Nav.Link className='btn border rounded me-5 mt-3'><Link to={'/cart'} style={{textDecoration:'none',color:'white'}}><i class="fa-solid fa-cart-shopping text-warning me-1"></i>Cart<Badge bg="secondary" className='ms-1'>{cart.length}</Badge></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header