import React, { useEffect, useState } from 'react';
import "../styles/cart.css";

const Cart = ({cart, setCart, handleChange,props }) => {
    const [price, setPrice] = useState(0);
     
    //To remove item from your cart
    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !==id);
        setCart(arr);
        handlePrice();
    }

    //To update price  in cart
    const handlePrice =() =>{
        let ans =0;
        cart.map((item) => (ans += item.amount * item.price));
        setPrice(ans);
    }

    useEffect(() => {
        handlePrice();
    });
    
    return (
        <article>
            <div className="cart_box">
                <div className='cart_img'> Products </div>
                <div className='cart_quantity'> Quantity </div>
                <div className='cart_price'>Price</div>
                <div>
                    Remove
                </div>

            </div>
            {
                cart.map((item)=> (
                    <div className='cart_box' key={item.id}>
                        
                        <div className='cart_img'>
                            <img src={item.img} alt=""/>
                            <p>{item.title}</p>
                        </div>
                                 
                        <div>
                            <button onClick={()=> handleChange(item, -1)}>-</button>  
                            <button>{item.amount}</button>
                            <button onClick={()=> handleChange(item, 1)}>+</button>
                        </div>
                        <div className='cart_price'>
                            <span>${item.price}</span>
                        </div>

                        <div className='cart_remove'>
                        <button onClick={() => handleRemove(item.id)}>Remove</button>
                        </div>
                    </div>
                ))
            }

            <div className="total">
                <span> Cart Total : ${price}</span>
                <span> <button>PROCEED TO CHECKOUT</button> </span>
            </div>
        </article>
    );
    
  };

export default Cart;
