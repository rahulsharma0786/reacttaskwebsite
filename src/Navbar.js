import React from "react"
import logo from "./images/logo.png"

import { Link } from "react-router-dom";


const Navbar=({show})=>{
  return(
<>
<div className={show ? "sidenav active" : "sidenav"}>
<img src={logo} alt="logo" className="logo"/>
<ul>
<li><Link to="/"><i class="fas fa-qrcode"></i>Dashbord</Link></li>
<li><Link to="/category"><i class="fas fa-link"></i>Category</Link></li>
<li><Link to="/product"><i class="fas fa-calendar-week"></i>Product</Link></li>
<li><Link to="/machine"><i class="fas fa-sliders-h"></i>Machine</Link></li>



</ul>





</div>
</>

    )

}


export default Navbar;