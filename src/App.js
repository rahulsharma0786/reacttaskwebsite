import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Switch,Route} from "react-router-dom";
import toggle from "./images/toggle.png"
import admin from "./images/admin.jpg"
import Dashboard from "./Dashboard";
import Category from "./Category";
import Product from "./Product";
import Machine from "./Machine";
import Navbar from "./Navbar";


const App=()=>{
const [showNav,setShowNav]=useState(false)

return(
<>


<header >
<img src={toggle} class="toggler" onClick={()=>setShowNav(!showNav)}/>
<img src={admin} class="admin"/>
</header>


{<Navbar show={showNav}/>}
<Switch>

<Route exact path="/" component={Dashboard}/>
<Route exact path="/category" component={Category}/>
<Route exact path="/product" component={Product}/>
<Route exact path="/machine" component={Machine}/>


</Switch>



</>
)





}
export default App;