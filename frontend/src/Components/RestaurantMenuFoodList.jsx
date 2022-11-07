import React  from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useEffect , useState } from 'react';

export default function RestaurantMenuFoodList() {

  const [show, setShow] = useState(false);
  const handleClose = () =>{ setShow(false); }
  const handleShow = () =>{ setShow(true); }

  const[foodinfo ,setfoodinfo] = React.useState([{}])
  var Dataa;


  useEffect(() => {
    (async () =>
      {
        await fetch("http://localhost:5000/Food").then(
          response => response.json()
        ).then(
          fooddata => setfoodinfo(fooddata))
     })();
  
    }, []);

  

    return (
        <div> 
        {(typeof foodinfo.food === 'undefined') ? (
         <p> Loading... </p>
           ) : (
         
            
          foodinfo.food.map((Dataa , i) => (
            <div  class="card rounded-3 mb-4">
              <div class="card-body p-4">
                <div class="row d-flex justify-content-between align-items-center">
                  <div class="col-md-2 col-lg-2 col-xl-2">
                    <img src={Dataa.FoodPic}
                        class="img-fluid rounded-3" alt="Cotton T-shirt"/>
                  </div>
                  <div class="col-md-3 col-lg-3 col-xl-3">
                    <p class="lead fw-normal mb-2"><h4>{Dataa.FoodName}</h4></p>
                    <p><span class="text-muted">Size: </span>M <span class="text-muted">Color: </span>Grey</p>
                    <p class="lead fw-normal mb-2">{Dataa.FoodDetails}</p>
                  </div>
                  <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                    <button class="btn btn-link px-2"
                      onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                      <i class="fas fa-minus"></i>
                    </button>
    
                    <input id="form1" min="0" name="quantity" value="2" type="number"
                      class="form-control form-control-sm" />
    
                    <button class="btn btn-link px-2"
                      onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                      <i class="fas fa-plus"></i>
                    </button>
                  </div>
                  <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                    <h5 class="mb-0">{Dataa.Price}$</h5>
                  </div>
                  <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                    <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg" onClick={handleShow}></i></a>
                  </div>
                </div>
              </div>
            </div>





))





      
 )}


<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
  <Modal.Title>ALERT!!</Modal.Title>
</Modal.Header>
<Modal.Body>Are you sure you want to Delete the food item?</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
    no
  </Button>
  <Button variant="primary"  onClick={handleClose}> 
    yes
  </Button>
</Modal.Footer>
</Modal> 
  
</div>


);



}