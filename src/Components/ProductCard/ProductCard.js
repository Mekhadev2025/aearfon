import React, { useState } from "react"
import "../ProductCard/ProductCard.css"
import image from "../../Assets/headphones/headphone1.webp"

export default function ProductCard(props){

const [count,setCount]=useState(0);
 
return(
 <>
  
<div className="product--container"> 
          <img src={image} alt="" className="product--image"></img>
       
<div className="product--title">Noise Pwr Headphones</div>
          <div className="product--qty">
                <button className="minus"  onClick={()=>setCount(count-1)}>-</button> 
                <div className="count">{count}</div>
                <button className="plus" onClick={ () =>setCount(count+1)}>+</button>
            </div> 

  <div className="product--price">$23</div>
 


</div>

</>
);

 
 
}