 
 import ReactDOM from "react-dom";
 import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Layout from  "./Pages/Layout"
 import Home from "./Pages/Home";
 import Shop from "./Pages/Shop";
 import Contact from "./Pages/Contact.";
import About from "./Pages/About";
 import Cart from "../src/Pages/Cart"
 import  "../src/ index..css"
 
 export default function App() {
   return (
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Layout />}>
           <Route index element={<Home />} />
           <Route path="about" element={<About/>} />
           <Route path="contact" element={<Contact />} />
           <Route path="shop" element={<Shop/>} />
           <Route path="cart" element={<Cart/>} />
         </Route>
       </Routes>
     </BrowserRouter>
   );
 }
 
 ReactDOM.render(<App />, document.getElementById("root"));