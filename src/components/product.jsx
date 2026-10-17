import { useParams } from "react-router-dom";
import HotelsData from "./json";


function Product() {
  const { image } = useParams();

  let displayProduct = HotelsData.find((v) => v.id == image);
  

  return (
    <div id="pro">
      <div className="product-container">
        <div className="product-image">
          <img
            src={displayProduct.image}
            alt={displayProduct.name}
            style={{
              width: "200px",
              height: "150px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </div>

        <div className="product-details">
          <h3>Details</h3>
          <p>Name:{displayProduct.name}</p>
          <p>Location:{displayProduct.location}</p>
          <p>Currency:{displayProduct.currency}</p>
          <p>Rating:{displayProduct.rating}</p>
          
        </div>
      </div>
    </div>
  );
}

export default Product;
