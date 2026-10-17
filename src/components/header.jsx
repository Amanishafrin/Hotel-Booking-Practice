import hotel from "../assets/hotel.png";
import { FiAlignJustify } from "react-icons/fi";
import beach from "../assets/beach.png";
import { useNavigate } from "react-router-dom";
import { GoHome } from "react-icons/go";

function Header() {
  let style = { backgroundColor: "red" };
  let navigate = useNavigate();

  function goHome() {
    navigate("/");
    
  }
  function goHotels(){
    navigate("/hotels");
  }
  
  return (
    <>
     <div className="home">
      <img src={hotel} height="50px" width="50px"/>
  
    <form className="input-group" style={{width:"700px",marginLeft:"20%"}} >
      <input type="search" className="form-control" style={{width:"20px",}} />
      <input type="submit" value="search" className="btn " style={{color: "white", backgroundColor: "#087E8B",fontFamily:"Times New Roman, Times, serif"} }/>
    </form>
 <nav>
  <div className="navigation">
  <button onClick={goHome}>Home</button>
  <button onClick={goHotels}>Hotels</button>
  </div>
 </nav>
 </div>

 <div className="image">
  <img src={beach} height="570px"/>
 </div>
     
   
    
    </>
  );
}
export default Header;
