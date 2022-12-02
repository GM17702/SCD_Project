import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
export default function Navbar() {

    const cartstate = useSelector(state=>state.cartReducer)
   
    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-success rounded">
            <a className="navbar-brand" href="#">Resturant</a>
                <a className="navbar-brand" href="#">BhrosaRakhJani</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                            <a className="nav-link" href="/">Home </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Customer_Profile">Profile </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Customer_Cart">Cart {cartstate.cartItems.length}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Logout </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    )
   
}
