import React from 'react'
import {Col,Row} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';

function WishList() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  //console.log(wishlistArray);


  const dispatch = useDispatch()

  const handleWishlist = (item)=>{
    dispatch(addToCart(item))
    dispatch(removeFromWishlist(item.id))
  }

  return (
    <div style={{marginTop:'150px'}}>
      <Row className='me-3 ms-5 mb-5'>
        { wishlistArray?.length>0?
          wishlistArray?.map((item)=>(
            <Col>
          <Card style={{ width: '18rem', boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)' }}>
          <Card.Img variant="top" src={item.thumbnail} style={{height:'200px'}} />
            <Card.Body>
              <Card.Title>{item.title.slice(0,20)}...</Card.Title>
              <Card.Text>
                <p>{item.description.slice(0,40)}...</p>
                <p className='fw-bolder'>Price :{item.price} </p>
              </Card.Text>
             <div className='d-flex justify-content-between align-items-center'>
                <Button onClick={()=>dispatch(removeFromWishlist(item.id))} variant="outline-primary rounded me-1"><i className="fa-solid fa-trash text-warning"></i></Button>
                <Button onClick={()=>handleWishlist(item)} variant="outline-primary rounded"><i className="fa-solid fa-cart-plus text-warning"></i></Button>
             </div>
            </Card.Body>
          </Card>
          </Col>
          )):<div style={{height:'50vh'}} className='d-flex justify-content-center align-items-center flex-column'>
            <img src="https://cdn.pixabay.com/photo/2013/07/12/14/53/cart-148964_640.png" alt="no image" style={{height:'40vh'}} className='mb-3' />
            <h3>Your wishlist is empty</h3>
            <button className='btn btn-warning rounded'><Link to={'/'} style={{textDecoration:'none',color:'white'}}> <i className='fa-solid fa-arrow-left'></i> Back to home</Link></button>
          </div>
        }
      </Row>
    </div>
  )
}

export default WishList