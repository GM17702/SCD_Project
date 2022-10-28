import React ,{useState, useEffect}from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllFoods} from '../actions/foodAction'
import menu from "../Data";
import Food from "../components/Food";
export default function Home(){

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllFoods())
    }, [])
    
    return(
       <div>
     
        <div className="row justify-content-center">

            {menu.map(props=>{
              
               return   <div className="col-md-3 m-3">  <div> <Food props = {props} /></div>
            </div>
            })}
        </div>
     
       </div>
    )
}

