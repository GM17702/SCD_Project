import React, {useState, useEffect, useCallback} from "react";
import {
  MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTypography, MDBBtn, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalFooter, MDBModalHeader,
} from "mdb-react-ui-kit";
import { ToastContainer, toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './RiderOrder.css'

export default function OrderDetails() {
  

  const [basicModal, setBasicModal] = useState(false);
  const [totalPrice, setTotalPrice] = useState(false);
  const[orderInfo,setOrderInfo] = React.useState([{}])
  const[orderitemInfo,setOrderitemInfo] = React.useState([{}])

  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  const[emailprop] = React.useState(data.email);

  const toggleShow = (totalamount) =>{
    setBasicModal(!basicModal);
    setTotalPrice(totalamount)
  }
  
  const toggleShowOnly = () =>{
    setBasicModal(!basicModal);

  }

  useEffect(() => {
  (async () =>
    {
      await fetch("http://13.233.58.41:3001/orders").then(
        response => response.json()
      ).then(
        orderdata => setOrderInfo(orderdata))
   })();

  }, []);





  const handlingorderitems = useCallback((orderingid) => {
  
    console.log(orderingid+" is id");
    if (typeof orderingid!=='undefined')
    {
      
      (async () =>
        {
          await fetch(`http://13.233.58.41:3001/orderitems/${orderingid}`).then(
            response => response.json()
          ).then(
            itemdata => setOrderitemInfo(itemdata))
      })();
      orderingid= undefined;
    }
  
    }, []);



  


    const acceptdelivery = async(orderid) =>
    {
      
      let rideremail = emailprop;

        (async () =>
      {
          await fetch(`/acceptRiderOrder/${orderid}`,{

            method: 'put',
            body: JSON.stringify({orderid,rideremail}),
            headers: {'Content-Type': 'Application/json'}
  
        });

        toast.success('Delivery Accepted!', {position: toast.POSITION.TOP_RIGHT});

        const delay = async(ms) => new Promise(
          resolve => setTimeout(resolve, ms)
        );
        await delay(2000);
        navigate(0);
     })();
    }


    

  return (

    <div>
      {(typeof orderInfo.order === 'undefined') ? (
      <p> Loading... </p>
      ) : (
      orderInfo.order.map((neworder , i) => (
        <section key={i} className="vh-80">
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol size="12">
              <MDBCard
                className="card-stepper text-black"
                style={{ borderRadius: "16px" }}
              >
                <MDBCardBody className="p-5">
                  <div className="d-flex justify-content-between align-items-center mb-5">
                    <div>
                      <MDBTypography tag="h5" className="mb-3">
                        ORDER:{" "}
                        <span className="text-primary font-weight-bold">
                          #{neworder.orderid}
                        </span>
                      </MDBTypography>
                      <MDBTypography tag="h5" className="mb-1">
                        Pickup Restaurant: {" "}
                        <span className="text-primary font-weight-bold">
                          {neworder.orderpickup}
                        </span>
                      </MDBTypography>
                      <MDBTypography tag="h5" className="mb-1">
                        Delivery Location: {" "}
                        <span className="text-primary font-weight-bold">
                          {neworder.orderdestination}
                        </span>
                      </MDBTypography>
                    </div>
                    <div className="text-start">
                      <MDBBtn outline className="detailbutton" onClick={()=>{handlingorderitems(neworder.orderid);toggleShow(neworder.orderprice)}}><b>View Details</b></MDBBtn>
                      <MDBBtn className="updatebutton" onClick={() => acceptdelivery(neworder.orderid)}>Accept Delivery</MDBBtn>
                      <ToastContainer />
                    </div>
                  </div>
                  <ul
                    id="progressbar-2"
                    className="d-flex justify-content-between mx-0 mt-0 mb-5 px-0 pt-0 pb-2"
                  >
                    <li className="step0 active text-center" id="step1"></li>
                    <li className="step0 active text-center" id="step2"></li>
                    <li className="step0 text-muted text-end" id="step4"></li>
                    <li className="step0 text-muted text-end" id="step4"></li>
                  </ul>

                  <div className="d-flex justify-content-between">
                    <div className="d-lg-flex align-items-center">
                      <MDBIcon fas icon="clipboard-list me-lg-4 mb-3 mb-lg-0" style={{color: "#20ff27"}} size="3x" />
                      <div>
                        <p className="fw-bold mb-0">Order</p>
                        <p className="fw-bold mb-0">Confirmed</p>
                      </div>
                    </div>
                    <div className="d-lg-flex align-items-center">
                      <MDBIcon fas icon="clipboard-check me-lg-4 mb-3 mb-lg-0" style={{color: "#20ff27"}} size="3x" />
                      <div>
                        <p className="fw-bold mb-0">Order</p>
                        <p className="fw-bold mb-0">Validated</p>
                      </div>
                    </div>
                    <div className="d-lg-flex align-items-center">
                      <MDBIcon fas icon="shipping-fast me-lg-4 mb-3 mb-lg-0" style={{color: "#20ff27"}} size="3x" />
                      <div>
                        <p className="fw-bold mb-0">Order</p>
                        <p className="fw-bold mb-0">En Route</p>
                      </div>
                    </div>
                    <div className="d-lg-flex align-items-center">
                      <MDBIcon fas icon="home me-lg-4 mb-3 mb-lg-0" style={{color: "#20ff27"}} size="3x" />
                      <div>
                        <p className="fw-bold mb-0">Order</p>
                        <p className="fw-bold mb-0">Arrived</p>
                      </div>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        
        
      </section>
      ))
      
      )}

      {(typeof orderitemInfo.orderitem === 'undefined') ? (
        <p></p>
        ) : ( 
        <MDBModal staticBackdrop show={basicModal} setShow={setBasicModal} tabIndex="-1">
                <MDBModalDialog>
                  <MDBModalContent>
                    <MDBModalHeader className="border-bottom-0">
                      <MDBBtn
                        className="btn-close"
                        color="none"
                        onClick={toggleShowOnly}
                      ></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody className="text-start text-black p-4">
                    <MDBTypography tag="h5" className="mb-3">
                        ORDER:{" "}
                        <span className="text-primary font-weight-bold">
                          #{orderitemInfo.orderitem[0].orderid}
                        </span>
                      </MDBTypography>
                      <p className="mb-0" style={{ color: "#35558a" }}>
                        Order summary
                      </p>
                      <hr
                        className="mt-2 mb-4"
                        style={{
                          height: "0",
                          backgroundColor: "transparent",
                          opacity: ".75",
                          borderTop: "2px dashed #9e9e9e",
                        }}
                      />
                      {orderitemInfo.orderitem.map((newitem , j) => (
                      <div key={j} className="d-flex justify-content-between">
                        <p className="fw-bold mb-0">{newitem.itemname}   (Quantity: {newitem.itemquantity})</p>
                        <p className="text-muted mb-0">${newitem.itemprice}</p>
                      </div>
                      ))}

                      <div className="d-flex justify-content-between mt-3">
                        <p className="fw-bold">Total</p>
                        <p className="fw-bold" style={{ color: "#35558a" }}>
                          ${totalPrice}
                        </p>
                      </div>
                    </MDBModalBody>

                    <MDBModalFooter className="d-flex justify-content-center border-top-0 py-4">
                      <MDBBtn className="okaybutton" size="lg" ><b>Return</b></MDBBtn>
                    </MDBModalFooter>
                  </MDBModalContent>
                </MDBModalDialog>
        </MDBModal>
        )}
        

    </div>
  );
}
