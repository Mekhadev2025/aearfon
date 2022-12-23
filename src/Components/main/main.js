import image from "../../Assets/mainimg.jpg"
import "./Main.css"
import oneliner from "../../Assets/oneliner.svg"
import mic from "../../Assets/mic.svg"
import bluetooth from "../../Assets/bluetooth.svg"
import sweat from "../../Assets/sweat.svg"
import aux from "../../Assets/aux.svg"
import image2 from "../../Assets/headp.webp"
import slogan from "../../Assets/feel.svg"
export default function Main(){
    return(
    <div className="body">


<div className="main">
   <div> 
    <img src={oneliner} className="oneliner" alt=""></img>
    <p className="text-liner">Introducing the all new <b>Soul-Stirring </b>and <b>Sustainable</b> sound experience</p></div>
  <img src={image} className="mainimag" alt=""></img>
</div>
<div className="main--body"  >

<div className="section2">
 
<div className="features">
   <img className="box" src ={mic} alt=""></img>
   <p>Hands Free Mic For Calls</p>
   </div>

   <div className="features">
   <img className="box" src={bluetooth} alt=""></img>
   <p>Bluetooth v<b>5.0</b></p>

   </div>

   <div className="features">
   <img className="box" src={sweat} alt=""></img>
   <p className="sweat">Sweat Resistant</p>
   </div>
   <div className="features">
   <img className="box" src={aux} alt=""></img>
   <p>Aux support</p>
   </div> 
</div>
</div>
 <div className="section3">
<img src={image2} className="image2" alt=""></img>
<div className="footer--container">
<img src={slogan} className="slogan" alt=""></img>
<button className="shopnow"><b>SHOP NOW</b></button></div>
 </div>




</div>    
    );

}