import React, {useRef} from 'react'
//import Img1 from './fooddeliveryimg1.jpg';
//import Img2 from '../RiderLogin/riderlogin.jpg';
//import Img3 from './foodeliveryimg3.png';
import { MDBRow, MDBCol, MDBBtn,} from 'mdb-react-ui-kit';
import Card from 'react-bootstrap/Card';
import profilelogo from './profilelogo.png';
import orderlogo from './orderlogo.png';
import deliverylogo from './deliveryicon.PNG';
import {Link, useLocation} from 'react-router-dom'

export default function RiderHome() {


  const location = useLocation();
  const data = location.state;
  const emailreference = useRef();
  var email;
 
 const setEmail=() => {

    if (data == null) {

        email = emailreference.current;
        console.log("Email remained was " + email);
    }
    else
    {
        emailreference.current = data.email;
        email = emailreference.current;
        console.log("Email sent was " + email);
    }
 }


  return (
    
    <div >
        {setEmail()}
        <MDBRow className='mb-10'>
        {/* <MDBCarousel showIndicators showControls dark fade dealy={2000}>
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={1}
                src={Img1}
                alt='...'
            >
            </MDBCarouselItem>

            <MDBCarouselItem
                className='w-100 d-block'
                itemId={2}
                src={Img2}
                alt='...'
            >
            </MDBCarouselItem>

            <MDBCarouselItem
                className='w-100 d-block'
                itemId={3}
                src={Img3}
                alt='...'
            >
            </MDBCarouselItem>
        </MDBCarousel> */}
         </MDBRow>

    <section className="text-center">
         <MDBRow className='row-cols-1 row-cols-md-5 g-4 mb-10'>
         <MDBCol></MDBCol>
            <MDBCol>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={profilelogo}
                style={{ width:'80%',   position:'relative', left: '10%', marginTop: '20px'}}
                 />
                <Card.Body>
                    <Link to='/rider/RiderProfile' state={{email}}>
                    <MDBBtn outline color='info'>Manage Profile</MDBBtn>
                    </Link>
                </Card.Body>
            </Card>
            </MDBCol>
            <MDBCol>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={orderlogo}
                style={{ width:'80%',   position:'relative', left: '10%', marginTop: '20px'}}
                 />
                <Card.Body>
                <Link to='/rider/RiderOrders'>
                <MDBBtn outline color='warning'>Manage Orders</MDBBtn>
                </Link>
                </Card.Body>
            </Card>
            </MDBCol>
            <MDBCol>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={deliverylogo}
                style={{ width:'80%',   position:'relative', left: '10%', marginTop: '20px'}}
                 />
                <Card.Body>
                    <MDBBtn outline color='danger'>Complete Deliveries</MDBBtn>
                </Card.Body>
            </Card>
            </MDBCol>
           
            </MDBRow>
            </section>
    </div>
    
  )
}