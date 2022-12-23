import "../Card/Card.css"
 
 
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
export default function Card(props)
{

 
return(
    <>
    <div className="card--container">
             <img src={props.cardimg} className="card--image"/>
             <p className="card--title">{props.title}</p>
             <div className="price">
             <p className="card--price">${props.price}</p>
             <p className="card--orgprice">${props.orgprice}</p>
             
             </div>
           
             
             <Link to="/cart" className='LINK'>ADD TO CART</Link>
      </div>
    </>
);


}

/*
 <img src={`../images/${props.cardimg}`}  alt="not found"  className="card--image">
             </img>*/