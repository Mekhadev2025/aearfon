
import footerlogo from "../../Assets/footerlogo.svg"
import "./Footer.css"
import playstore from"../../Assets/Googleplay.svg"
import ios from"../../Assets/ios.avif"
export default function Footer(){
return (
<>
<div className="footer">
    <hr></hr>
    <div className="footer--logocontainer">
    <img src={footerlogo} className="footerlogo" alt=""></img>
    </div>
  
        <div className="footer--store">
     
    <p className="footer-download">Download the App</p>
         <div className="footersec2"> 
                  <img src={playstore} className="playstore" alt=""></img>
                  <img src={ios} className="ios" alt=""></img>
          </div>
        </div> 
</div>
</>
);
}