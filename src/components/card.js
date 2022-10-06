import React from "react";

const Cards = ({ item, handleClick }) => {
  const { title, color, price, img } = item;
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{color}</p>
        <p>
          <button onClick={() => handleClick(item)}>
            <span><i class="fa fa-cart-plus" aria-hidden="true"></i> </span>
          </button> &nbsp;
          Price - ${price}
        </p>
      </div>
    </div>
  );
};

export default Cards;