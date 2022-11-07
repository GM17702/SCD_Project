import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


export default function Footer(){
return (
    <footer id="footer" class="footer" style={{position : "absolute", width : "100%"}} >
    <div class="container text-center">

      
      <ul class="social-links" >
        <li><FontAwesomeIcon className="logos" icon={faFacebook} size="4x" /></li>
        <li><FontAwesomeIcon className="logos"  icon={faGoogle}  size="4x" /></li>
        <li><FontAwesomeIcon className="logos"  icon={faGithub}  size="4x" /></li>
        <li><FontAwesomeIcon className="logos"  icon={faLinkedin}  size="4x" /></li>
        
      </ul>
      <p><span>©2022   |   Ghulam Muhammad  |   Faizan Javed  |  Zaryab Hassan  | Ghazanfar Ijaz </span></p>
                   All rights reserved.
    </div>
  </footer>

)};