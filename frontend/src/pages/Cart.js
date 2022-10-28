import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import { addToCart, deleteFromCart } from '../actions/cartActions'
const Cart = () =>{

    const cartstate = useSelector(state=> state.cartReducer)
    const cartItems = cartstate.cartItems
    var subtotal = cartItems.reduce((x, item)=> x+item.price, 0)
    const dispatch = useDispatch()
  
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
                                <button className="p-2 ms-1 bg-success text-white" color="white" onClick={()=>{dispatch(deleteFromCart(item))}}>DELETE</button>
                                   
                                </div>
                            </div>
                            })}
                    </div>
                    <div className="col-md-4">
                        <h2 style = {{fontSize: '45px'}}>Total Price: {subtotal}/- </h2>
                        <button className="p-2 ms-1 bg-success text-white" color="white" > Confirm Order</button>
                    </div>
            </div>
        </div>
    )
}

export default Cart