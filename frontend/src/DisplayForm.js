import { useState,useEffect } from "react";
import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';


function DisplayForm(){
         const[listofCustomers,setlistofCustomers]=useState([{}]);
        // React.useEffect(() => {
        // {async()=>{
        //     axios.get("http://localhost:3001/getusers").then((response )=>{
        //         setlistofCustomers(response.data)
        //         console.log(response)
        //     } )();
        // },[]);

       useEffect(() => {
            (async () =>
            {
              await fetch('http://localhost:3001/getusers').then(
                response => response.json()
              ).then(
                data => setlistofCustomers(data))
           })();
        
          }, []);

        return(
            <div className="CustomerDetails">
                {(typeof listofCustomers.user ==='undefined')?(
                    <p> Loading</p>
                ):(
            
                
                listofCustomers.user.map((customer,i)=>(
                    <MDBTable>
      <MDBTableHead light>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Email</th>
          <th scope='col'>Name</th>
          <th scope='col'>Password</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <th scope='row'>1</th>
          <td>{customer.name}</td>
          <td>{customer.email}</td>
          <td>{customer.password}</td>
        </tr>
         
      </MDBTableBody>
    </MDBTable>
                     
                
                
                ))
                )}
                </div>
            
            
                  
                    
                    

        );

//end of first bracket
}
export default DisplayForm;