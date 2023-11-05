import { useState } from "react";
import "./App.css";
import InventoryCard from "./InventoryCard.jsx";
import CartList from "./CartList.jsx";
import { products } from "./products.js";

export default function GroceriesApp() {
    //defining a variable cart and function setCart
    const [cart, setCart] = useState([]);

    // function to add product
    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    //function to remove product
    const removeFromCart = (productId) => {
        const updatedCart = cart.filter((item) => item.id !== productId);
        setCart(updatedCart);
    };

    //function to empty cart
    const emptyCart = () => {
        setCart([]);
    };

    //calcultate total
    //const Total(nums){
        //return nums.reduce((prevNum, curNum) => prevNum+ curNum, 0)}
       const Total =({ cart }) => {
        let total =0;
        for(const item of cart){
            const price = parseFloat(item.price.replace("$",""));
            total += price;
        }
        return total;
    };
   
    //rendering
    return(
        <div className="GroceriesApp-Container">
            <InventoryCard products={ products } addToCart={addToCart} />
            <CartList cart={cart} removeFromCart= {removeFromCart} 
            emptyCart={emptyCart} 
            Total={Total}/>
        </div>
    );
}
