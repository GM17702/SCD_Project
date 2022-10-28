
import React, {useState} from 'react'
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import menu from "../Data";
export default function Food({props}) {

  //const [Name, setName] = useState("Biryani");
  const [Quantity, setQuantity] = useState(1);
  const [Varient, setVarient] = useState("Chicken_biryani");
  

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch()



   const addtocart= async() =>
  {
    var food_id = props.food_id
    var name = props.name
    var varient = Varient
    var quantity = Quantity
    var price = props.prices[0][Varient]*Quantity
    await fetch('/menumanagement/create', {
      method: 'post',
      body: JSON.stringify({food_id,name, quantity, varient ,price}),
      headers: {'Content-Type': 'Application/JSON'}
    })
    dispatch(addToCart(props, Quantity, Varient))
  }

  return (
    <div className="shadow-lg p-3 mb-5 bg-white rounded">
      <div onClick={handleShow}>
        <h1>{props.name}</h1>
        <img src= {props.image} className="img-fluid" style={{height:'200px', width:'200px'}}/> 
        </div>


    <div className='flex-container'>
<div className='w-100 m-1'>
<p>Varients</p>
<select className="form-select" aria-label="Default select example" value={Varient} onChange={(e)=>(setVarient(e.target.value))}>
{props.varients.map(varient=>{
  return <option value  = {varient}>{varient}</option>
})} 

</select>
</div>

<div className='w-100 m-1'>
<p>Quantity</p>
<select className="form-select" aria-label="Default select example" value={Quantity} onChange={(e)=>(setQuantity(e.target.value))}>
  {[...Array(10).keys()].map((x,i)=>{
    return <option value={i+1}>{i+1}</option>
  })}

 
</select>
</div>

    </div>
    

    <div className='flex-container'>
<div className='w-100' >
<p className='price'> 
  Price: {props.prices[0][Varient]*Quantity } Rs/-
</p>
</div>

<div className='w-100'>
<button className="p-2 ms-1 bg-success text-white" onClick={addtocart}>ADD TO CART</button>
</div>
    </div>



    <Modal show={show}>
      <Modal.Header closeButton onClick={handleClose }>
        <Modal.Title>{props.name}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
      <img src= {props.image} className="img-fluid" style={{height:'400px'}}/> 
      <p>{props.description}</p>
      </Modal.Body>

      <Modal.Footer>
        <button className='btn' onClick={handleClose }>Close</button>
      </Modal.Footer>
    </Modal>
    </div>
  )
}
