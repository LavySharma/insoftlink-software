import React from 'react';
import Button from '@mui/material/Button';
import photo1 from '../Assets/service-image1.jpg';
export default function Services(){
return <div class="container px-4">
  <div class="row gx-5">
    <div class="col">
     <div class="p-3 border bg-light">
         <h1> Website Design and Development</h1>
         <p>InSoftLink Software holds expertise in designing fresh and innovative websites. Whether you want a static, dynamic or responsive website our expert graphic designers and developers deliver the best possible solutions to the clients.</p>
         <Button variant="text">Know More</Button>
     </div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">
          <img src = {photo1}/>
      </div>
    </div>
  </div>
</div>
} 


