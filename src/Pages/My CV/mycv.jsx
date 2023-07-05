import React, { useState } from "react";
import Header from "../../Components/Header/header";
import "./mycv.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const MyCv = () => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    alert(`${quantity} items added to cart successfully`);
  };

  const fruits = [
    {
      name: "mango",
      description: "This is a fresh mango from Sir Rakesh field",
      photo:
        "https://images.unsplash.com/photo-1630552358140-c50ab1c5f8be?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODY4NDMxNTF8&ixlib=rb-4.0.3&q=85",
    },
  ];
  return (
    <div>
      <Header />
      <h1>My Resume Page</h1>
      <div className="fruits">
        {fruits.map((fruit, index) => (
          <ul key={index}>
            <li>
              <h2>{fruit.name}</h2>
              <img
                src={fruit.photo}
                alt="fruits"
                height="200px"
                width="200px"
              />
              <p>{fruit.description}</p>
              <div className="rating">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div className="quantity">
                <button onClick={handleDecrement}>-</button>
                <span>{quantity} kg</span>
                <button onClick={handleIncrement}>+</button>
              </div>
              <button onClick={handleAddToCart}>Add to Cart</button>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default MyCv;
