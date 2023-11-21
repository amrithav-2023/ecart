import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice'


function Cart() {

  const dispatch = useDispatch()
  const [total,setTotal] = useState(0) // initialized as 0 cz we need to add numbers if we use '' it will cause concatination
  const navigate = useNavigate()

  const cartArray = useSelector((state)=>state.cartReducer)
  //console.log(cartArray);

  //function to find sum of given array price
  const getTotal = ()=>{
    if(cartArray.length>0){
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2)) 
    }else{
      setTotal(0)
    }
  }
  console.log(total);

  useEffect(()=>{
    getTotal()
  },[cartArray])

  //function to empty the cart and set alert
  const handleCart = ()=>{
    alert('Thankyou....Your order is placed successfully')
    dispatch(emptyCart())
    navigate('/')
  }

  return (
    <div style={{marginTop:'150px'}}>

      {cartArray?.length>0?
        <div className='row w-100'>

       <div className='col-lg-6 m-5'>
          <table className='table shadow border'>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Image</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartArray?.map((item,index)=>(
              <tr>
                <td>{index+1}</td>
                <td>{item.title}</td>
                <td><img style={{width:'100px',height:'100px'}} src={item.thumbnail} alt="No image" /></td>
                <td>{item.price}</td>
                <td>
                  <Button onClick={()=>dispatch(removeFromCart(item.id))} variant="outline-primary rounded me-1"><i className="fa-solid fa-trash text-warning"></i></Button>
                </td>
              </tr>
              ))
              }
            </tbody>
          </table>
        </div>

        <div className='col-lg-4 m-5 d-flex justify-conent-center aligh-items-center flex-column'>
            <div className='border shadow p-5'>
              <h3 className='text-warning text-center'>Cart Summary</h3>
              <h4>Total number of products : <span className='fw-bolder fs-4 text-primary'>{cartArray.length}</span> </h4>
              <h4>Price : <span className='fw-bolder fs-4 text-primary'>{total}</span> </h4>
              <button onClick={handleCart} className='btn btn-warning rounded w-100'>CheckOut</button>
            </div>
        </div>
        
      </div>:
          <div style={{height:'50vh'}} className='d-flex justify-content-center align-items-center flex-column mb-5'>
            <img src="https://cdn.pixabay.com/photo/2013/07/12/14/53/cart-148964_640.png" alt="no image" style={{height:'40vh'}} className='mb-3' />
            <h3>Your wishlist is empty</h3>
            <button className='btn btn-warning rounded'><Link to={'/'} style={{textDecoration:'none',color:'white'}}> <i className='fa-solid fa-arrow-left'></i> Back to home</Link></button>
          </div>
      }

    </div>
  )
}

export default Cart