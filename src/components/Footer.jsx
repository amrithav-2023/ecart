import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{width:'100%',height:'300px'}} className='d-flex align-items-center justify-content-center flex-column bg-primary text-light'>
      <div className='footer d-flex align-items-center justify-content-evenly w-100'>
        <div className="website" style={{width:'400px'}}>
          <h4 style={{overflowY:'hidden'}}><i class="fa-solid fa-cart-shopping text-warning me-3"></i>{' '}
            E-CART</h4>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aut, voluptatum quae sint neque repellat, inventore amet minima laborum, fugit adipisci? Officiis ad atque repellat, enim architecto vel provident quasi.</h6>
            <h6>Lorem, ipsum dolor sit amet consectetur.</h6>
        </div>
        <div className="link d-flex flex-column">
          <h4 style={{overflowY:'hidden'}}>Links</h4>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home Page</Link>
          <Link to={'/cart'} style={{textDecoration:'none',color:'white'}}>Cart Page</Link>
          <Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}>Wishlist Page</Link>
        </div>
        <div className="guides d-flex flex-column">
          <h4 style={{overflowY:'hidden'}}>Guides</h4>
          <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'white'}}>React</Link>
          <Link to={'https://react-bootstrap.github.io'} style={{textDecoration:'none',color:'white'}}>React Bootstrap</Link>
          <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}}>Bootswatch</Link>
        </div>
        <div className="contact">
          <h4>Contact Us</h4>
          <div className='d-flex mb-3'>
            <input type="text" className='form-control' placeholder='Enter your email id' />
            <button className='btn btn-warning text-white ms-3'>Subscribe</button>
          </div>
          <div className='d-flex justify-content-evenly mt-4'>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-facebook fa-2x"></i></Link>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-twitter fa-2x"></i></Link>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-linkedin fa-2x"></i></Link>

          </div>
        </div>
      </div>
      <p className='mt-5'>Copyright C 2023 Media Player. Built with React.</p>
    </div>
  )
}

export default Footer