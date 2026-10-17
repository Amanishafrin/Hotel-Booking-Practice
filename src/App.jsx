
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import Hotels from "./components/hotels";
import About from "./components/about";
import Product from "./components/Product.jsx";

function App() {
  return (
   <BrowserRouter>
   <Header/>
  <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/hotels" element={<Hotels/>}/>
  <Route path="/product/:image" element={<Product />} />

   </Routes>
   <Footer/>
    </BrowserRouter>
  );
}

export default App;