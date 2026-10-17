import { useNavigate } from "react-router-dom";
import HotelsData from "./json";
import { useState } from "react";

function Hotels() {
  const navigate = useNavigate();
  let [count, setCount] = useState(Array(HotelsData.length).fill(0));
  function increment(index) {
    let newcount = [...count];
    if (newcount[index]< HotelsData[index].maxRooms){
    newcount[index] += 1;
    setCount(newcount);
  }
  else{
    alert(`only ${HotelsData[index].maxRooms}available`);
  }
}
  function decrement(index) {
    let newcount = [...count];
    
    if (newcount[index] > 0) {
      newcount[index] -= 1;
      setCount(newcount);
    }
  }

  return (
    <div id="hotels">
      <div className="hotel-grid">
        {HotelsData.map((v, i) => (
          <div className="hotel-item" key={v.id}>
            <div className="card">
              <img
                src={v.image}
                alt={v.name}
                onClick={() => navigate(`/product/${v.id}`)}
                style={{ cursor: "pointer" }}
              />

              <div className="card-body">
                <h5>{v.name}</h5>
                <div className="room-section">
                  <h4>Rooms:</h4>

                 <div className="room-count">
  <button onClick={() => increment(i)}>+</button>

  <h3>{count[i]}</h3>

  <button onClick={() => decrement(i)}>-</button>
</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hotels;
