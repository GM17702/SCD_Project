
import React, {useState} from 'react'
import { Modal } from 'react-bootstrap';
export default function Food({props}) {


  const [Quantity, setQuantity] = useState(1);
  const [Varient, setVarient] = useState("Chicken_biryani");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{margin:"100px"}} className="shadow-lg p-3 mb-5 bg-white rounded">
      <div>
        <h1>{props.name}</h1>
        <img src= {props.image} className="img-fluid" style={{height:'200px', width:'200px'}}/> 
        </div>
    <div className='flex-container'>
<div className='w-100 m-1'>
<p>Varients</p>
<select className="form-control" value={Varient} onChange={(e)=>(setVarient(e.target.value))}>
{props.varients.map(varient=>{
  return <option value  = {varient}>{varient}</option>
})} 

</select>
</div>

<div className='w-100 m-1'>
<p>Quantity</p>
<select className="form-control"  value={Quantity} onChange={(e)=>(setQuantity(e.target.value))}>
  {[...Array(10).keys()].map((x,i)=>{
    return <option value={i+1}>{i+1}</option>
  })}

 
</select>
</div>

    </div>
    

    <div className='flex-container'>
<div className='w-100'>
<h1>
  Price: {props.prices[0][Varient]*Quantity} Rs/-
</h1>
</div>

<div className='w-100'>
<button className='btn'>ADD TO CART</button>
</div>
    </div>



    <Modal.Dialog show={show}>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
        <button className='btn'>Close</button>
      </Modal.Footer>
    </Modal.Dialog>
    </div>
  )
}
