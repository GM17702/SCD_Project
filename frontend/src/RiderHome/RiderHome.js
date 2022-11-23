import React from 'react'
import Img1 from './fooddeliveryimg1.jpg';
import Img2 from '../RiderLogin/riderlogin.jpg';
import Img3 from './foodeliveryimg3.png';
import { MDBRow, MDBCol, MDBBtn} from 'mdb-react-ui-kit';
import Card from 'react-bootstrap/Card';
import profilelogo from './profilelogo.png';
import orderlogo from './orderlogo.png';
import deliverylogo from './deliveryicon.PNG';
import {Link, useLocation} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';

export default function RiderHome() {


  const location = useLocation();
  const data = location.state;
  
  const[emailprop] = React.useState(data.email);


  return (
    
    <div >
        <MDBRow className='mb-10'>
        <Carousel variant="dark" controls={false}>
            <Carousel.Item controls={false} dealy={2000}>
                <img
                className="d-block w-100"
                src={Img1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={Img2}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item dealy={2000}>
                <img
                className="d-block w-100"
                src={Img3}
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>

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
                    <Link to='/rider/RiderProfile' state={{email : emailprop}}>
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
                <Link to='/rider/RiderOrders' state={{email : emailprop}}>
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
                    <Link to='/rider/RiderDeliveries' state={{email : emailprop}}>
                    <MDBBtn outline color='danger'>Complete Delivery</MDBBtn>
                    </Link>
                </Card.Body>
            </Card>
            </MDBCol>
           
            </MDBRow>
            </section>
    </div>
    
  )
}