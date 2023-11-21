import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../components/hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';

function Home() {
  //calling the useFetch hook
  const data = useFetch('https://dummyjson.com/products')
  console.log(data);

  const dispatch = useDispatch()

  return (
    <Row className='ms-5 me-3'style={{marginTop:'150px'}}>
      {data?.length>0?
        data?.map((item)=>(
          <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
      <Card style={{ width: '18rem', boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)' }}>
        <Card.Img variant="top" src={item.thumbnail} style={{height:'200px'}} />
          <Card.Body>
            <Card.Title>{item.title.slice(0,20)}...</Card.Title>
            <Card.Text>
              <p>{item.description.slice(0,40)}...</p>
              <p className='fw-bolder'>Price : {item.price}</p>
            </Card.Text>
           <div className='d-flex justify-content-between align-items-center'>
              <Button onClick={()=>dispatch(addToWishlist(item))} variant="outline-primary rounded me-1"><i className="fa-solid fa-heart text-warning"></i></Button>
              <Button onClick={()=>dispatch(addToCart(item))} variant="outline-primary rounded"><i className="fa-solid fa-cart-plus text-warning"></i></Button>
           </div>
          </Card.Body>
        </Card>
      </Col>
        ))
       : <p>Nothing to display</p>
      }
    </Row>
  )
}

export default Home