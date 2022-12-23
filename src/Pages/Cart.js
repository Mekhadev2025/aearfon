
import Navbar from "./Navbar";
import "./Styles/Cart.css"
import CheckoutCard from "../Components/CheckoutCard/CheckoutCard"
import ProductCard from "../Components/ProductCard/ProductCard"
export default function Cart(props){
    return(
    <>
    <Navbar/>

      <div className="rectangle">
               <ProductCard  img={props.cardimg}
             title={props.title}
             price={props.price}
             orgprice={props.orgprice} />
               <CheckoutCard/>
         
      </div>
     
    
    </>
    
    
    
     );
}