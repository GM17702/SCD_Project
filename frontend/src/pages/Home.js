import React from "react";
import menu from "../Data";
import Food from "../components/Food";
export default function Home(){
    return(
       <div>
        <div className="row">

            {menu.map(props=>{
              
               return   <div className="col-md-4">  <div> <Food props = {props} /></div>
            </div>
            })}
        </div>
       </div>
    )
}

