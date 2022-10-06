import React, { useState } from "react";
import Shop from "./components/shop";
import Navbar from "./components/navbar";
import Cart from "./components/cart";
import Thanks from "./components/Thanks";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [isComplete,setisComplete]=useState(false)
  // If the item is already present in array , it simply return otherwise it push in cart array

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

   //Increments or Decrements quantity of item

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };


  return (

    <React.Fragment>
    {!isComplete?
    <>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Shop handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange}  isComplete={isComplete} setisComplete={setisComplete} />
      )}
      </>
      :
      <Thanks  isComplete={isComplete} setisComplete={setisComplete}  />
      }
    </React.Fragment>

  );
};

export default App;