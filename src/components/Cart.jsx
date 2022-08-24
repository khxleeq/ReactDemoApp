import React, { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([]);
  const [itemIndex, setitemIndex] = useState(1);
  return (
    <div className="App">
      {cart.length === 0 && <p>Cart: (empty)</p>}
      {cart.length > 0 && <p>Cart: {cart.toString()}</p>}
      <button
        onClick={() => {
          setCart([...cart, ` item ${itemIndex}`]);
          setitemIndex(itemIndex + 1);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
