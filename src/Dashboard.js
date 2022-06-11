import React from "react";
import Todo from "./images/todo3.jpg"


const Dashboard=()=>{
return(
<>

<div class="container pt-5">
<div class="row ">
<div class="col-lg-4 col-md-4 col-sm-4 col-12  m-auto mb-5">
<div class="box">
<h4 className="text-dark">Total Product</h4>
<h3>5</h3>
<img class="todo" src={Todo} ></img>
</div>
</div>

<div class="col-lg-4 col-md-4 col-sm-4 col-12  m-auto mb-5 ">
<div class="box">
<h4 className="text-dark">Total Category</h4>
<h3 className="text-center">3</h3>
<img class="todo" src={Todo} ></img>
</div>
</div>

<div class="col-lg-4 col-md-4 col-sm-4 col-12  m-auto mb-5">
<div class="box">
<h4 className="text-dark">Total Machine</h4>
<h3>2</h3>
<img class="todo" src={Todo} ></img>

</div>
</div>
</div>
</div>



</>

)




}
export default Dashboard;