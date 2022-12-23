import Card from "../Components/Card/Card"
import Image from "../Assets/prodimage.svg"
import head from "../Assets/headphones/headphone1.webp"
import card2 from  "../Assets/headphones/headphone2.svg"
import card3 from "../Assets/headphones/headphone3.webp"
import card4 from "../Assets/headphones/headphone4.webp"
import card5 from "../Assets/headphones/headphone5.jpg"
import card6 from "../Assets/headphones/headphone6.webp"
import card10 from "../Assets/headphones/headphone10.webp"
import card9 from "../Assets/headphones/headphone9.jpeg"
import "../Pages/Styles/Shop.css"
import { BrowserRouter, Route, Link } from "react-router-dom";

import { FaAngleDown} from "react-icons/fa";
import arrow from "../Assets/arrow.png"
export default function shop()
{

return( 
<>
<div className="productimg">
  <img src={Image}></img> 
  </div>

<div className="search--container">
 
  <button >
  Colors  
     </button>
  <button>Price</button>
  <button>Playtime </button>
  <button>Instacharge  </button>
  <button>Charging Time  </button>
  <button>Charging Port </button>
  <button>Tru Bass Technology </button>
  <button>Driver </button>
  <button>Water Rssistance </button>
  <button>Dual Pairing </button>
  <button>Hands Free Calling </button>
  <button>Active Noise Cancellation </button>
</div>





  <div className="cards--box">
  <Card
 
 cardimg={head}
 title="Defy Anc Headphones"
 price="18"
 orgprice="100" 
 
    />

<Card
   cardimg={card2}
  title="Two Headphones"
  price="23"
  orgprice="50"
    />
 <Card
 
    cardimg={card4}
    title="Noise PwR Headphones"
    price="20"
    orgprice="50"
 />
 
   

<Card
  cardimg={card3}
  title="Two Headphones"
  price="23"
  orgprice="50"
  
 
    />

<Card
 
 cardimg={card5}
 title="Defy Anc Headphones"
 price="18"
 orgprice="100" 
 
    />

<Card
 
 cardimg={card6}
 title="Noise PwR Headphones"
 price="20"
 orgprice="50"
/>

<Card
  cardimg={card10}
  title="Two Headphones"
  price="23"
  orgprice="50"
  
 
    />
<Card
 
 cardimg={head}
 title="Defy Anc Headphones"
 price="18"
 orgprice="100" 
 
    />


 <Card
 
 cardimg={card9}
 title="Noise PwR Headphones"
 price="20"
 orgprice="50"
/>

    </div>
 
</>
  


);






}

















     /*
        const cards = data.map(item => {
            return (
                <Card
                    key={item.id}
                    {...item}
                     />
            )
        })      
 
   return (<>  
  

 <div className="cards--box">
  {cards}
  </div>
</>

)

}



 <Card
 
cardimg={head}
title="Defy Anc Headphones"
price="18"
orgprice="100"*/