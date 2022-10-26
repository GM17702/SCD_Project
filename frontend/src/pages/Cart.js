import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import { addToCart, deleteFromCart } from '../actions/cartActions'
const Cart = () =>{

    const cartstate = useSelector(state=> state.cartReducer)
    const cartItems = cartstate.cartItems
    
    const dispatch = useDispatch()
  
    /*
    <h1 style={{display: 'inline'}}>quantity: </h1>
    <i className="fa fa-plus" aria-hidden="true" onClick={()=>{dispatch(addToCart(item, ( parseInt(item.quantity)+parseInt(1)), item.varient ))}}></i>
    <b>{item.quantity}</b>
    <i className="fa fa-minus" aria-hidden="true" onClick={()=>{dispatch(addToCart(item, ( parseInt(item.quantity)-parseInt(1)), item.varient ))}}></i> 
    */
    return(
        <div>
            <div className="row justify-content-center">
                    <div className="col-md-6">
                            <h2 style={{ fontWeight: "bold"}}>My Cart</h2>
                            
                            {cartItems.map(item=>{
                                
                                return <div className="flex-container">
                                    
                                <div className="text-start m-1 w-100">
                                    <h1>{item.ID}</h1>
                                    <h1>{item.name} [{item.varient}]</h1>
                                    <h1>Price : {item.quantity} * {item.prices[0][item.varient]} = {item.price}</h1>
                                    <hr/>
                                </div>
                               
                                <div className="m-1 w-100">
                                <button className='btn' onClick={()=>{dispatch(deleteFromCart(item))}}>DELETE</button>
                                   
                                </div>
                            </div>
                            })}
                    </div>
                    <div className="col-md-4">

                    </div>
            </div>
        </div>
    )
}

export default Cart