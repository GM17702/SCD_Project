export const addToCart=(props, quantity, varient)=>(dispatch, getState)=>{
   
var cartItem = {
   ID : props.food_id,
   name: props.name,
    varient: varient,
   quantity: quantity,
    prices: props.prices,
   price: props.prices[0][varient]*quantity

}

dispatch({type : 'ADD_TO_CART', payload: cartItem})
const cartItems = getState().cartReducer.cartItems
localStorage.setItem('cartItems', JSON.stringify(cartItems))

}

export const deleteFromCart=(food)=>(dispatch, getState)=>{

dispatch({type : 'DELETE_FROM_CART', payload:food})
const cartItems = getState().cartReducer.cartItems
localStorage.setItem('cartItems', JSON.stringify(cartItems))


}