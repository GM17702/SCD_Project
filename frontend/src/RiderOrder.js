import React, {useState} from "react";
import {
  MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTypography, MDBBtn, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalFooter, MDBModalHeader,
} from "mdb-react-ui-kit";
import './RiderOrder.css'

export default function OrderDetails6() {

  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <>
      <section className="vh-100">
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
                          #Y34XDHR
                        </span>
                      </MDBTypography>
                      <MDBTypography tag="h5" className="mb-1">
                        Pickup Restaurant: {" "}
                        <span className="text-primary font-weight-bold">
                          McDonalds
                        </span>
                      </MDBTypography>
                      <MDBTypography tag="h5" className="mb-1">
                        Delivery Location: {" "}
                        <span className="text-primary font-weight-bold">
                          Sector A, Bahria Enclave
                        </span>
                      </MDBTypography>
                    </div>
                    <div className="text-start">
                      <MDBBtn outline className="detailbutton" onClick={toggleShow}><b>View Details</b></MDBBtn>
                      <MDBBtn className="updatebutton">Accept Delivery</MDBBtn>
                      
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

        <MDBModal staticBackdrop show={basicModal} setShow={setBasicModal} tabIndex="-1">
                <MDBModalDialog>
                  <MDBModalContent>
                    <MDBModalHeader className="border-bottom-0">
                      <MDBBtn
                        className="btn-close"
                        color="none"
                        onClick={toggleShow}
                      ></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody className="text-start text-black p-4">
                    <MDBTypography tag="h5" className="mb-3">
                        ORDER:{" "}
                        <span className="text-primary font-weight-bold">
                          #Y34XDHR
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

                      <div className="d-flex justify-content-between">
                        <p className="fw-bold mb-0">Ether Chair   (Quantity: 1)</p>
                        <p className="text-muted mb-0">$1750.00</p>
                      </div>


                      <div className="d-flex justify-content-between">
                        <p className="fw-bold">Total</p>
                        <p className="fw-bold" style={{ color: "#35558a" }}>
                          $2125.00
                        </p>
                      </div>
                    </MDBModalBody>

                    <MDBModalFooter className="d-flex justify-content-center border-top-0 py-4">
                      <MDBBtn className="okaybutton" size="lg" ><b>Return</b></MDBBtn>
                    </MDBModalFooter>
                  </MDBModalContent>
                </MDBModalDialog>
              </MDBModal>
      </section>
    </>
  );
}
