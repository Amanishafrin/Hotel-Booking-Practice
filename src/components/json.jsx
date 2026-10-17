import banyan from "../assets/banyan.jpg";
import padma from "../assets/padma.jpg";
import savoy from "../assets/savoy.jpg";
import obe from "../assets/obe.jpg";
import taj from "../assets/taj.jpg";
let Hotels=[
    {id:1,name: "Luxury City View Suite", location: "Kuala Lumpur, Malaysia",price:1990,currency:"MYR", rating: 4.8,image:banyan,maxRooms:20},
    {id:2,name:"Padma Resort Legian",location:"Bali",price:3000,currency:"USD",rating:4.9,image:padma,maxRooms:25},
   {id:3,name:" Savoy Ooty",location:"Ooty, Tamil Nadu, India",price:5000,currency:"INR",rating:4.2,image:savoy,maxRooms:15},
   {id:4,name:"The Oberoi, Bengaluru",location:"MG Road, Bengaluru,India",price:10000,currency:"INR",rating:4.7,image:obe,maxRooms:20},
   {id:5,name:"Taj Wayanad Resort & Spa",location:"Padinjarathara, Wayanad",price:15000,currency:"INR",rating:4.8,image:taj,maxRooms:26},

];
console.log(Hotels.map((v) => v.image));
console.log(Hotels);
export default Hotels;
