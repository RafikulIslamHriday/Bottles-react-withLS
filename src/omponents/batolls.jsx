import { useEffect } from "react";
import { useState } from "react";
import Bottle from "./bololl";
import {addToLs, getStroedCart, removeCartFromLs} from "../localStroage";
import Cart from "./Cart";

const Bottles = () => {
    const [bottles, setBottles] = useState([])
    const [cart , setCart] = useState([])

    useEffect(()=>{
        fetch('batoll.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])

    useEffect(() => {
        
        if(bottles.length){
            const storedCart =getStroedCart()
            const saveCart = []
             for(const id of storedCart){
                const bottle = bottles.find(bottle => bottle.id === id)
               if(bottle){
                saveCart.push(bottle);
               }
            }
            setCart(saveCart)
        }
    },[bottles])

    const handdleAddToCard = (bottle) =>{
        const newCart = [...cart, bottle];
        setCart(newCart)
        // console.log(cart);
        addToLs(bottle.id)
        
    }
    const handleRmoveFromCart = id => {
        const remaingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remaingCart)
        
        removeCartFromLs(id)
    }
    return (
        <div className="mx-16 mt-3">
             <h2 className="text-center text-3xl">Bottles : {bottles.length}</h2>
 
                <Cart
                 cart= {cart}
                handleRmoveFromCart = {handleRmoveFromCart}></Cart>
              <div className=" grid grid-cols-3 gap-5 mt-10">
                {
                    bottles.map(bottle => <Bottle
                    key={bottle.id}
                    bottle = {bottle}
                    handdleAddToCard= {handdleAddToCard}
                     
                    ></Bottle>)
                }
             </div>
        </div>
    );
};

export default  Bottles;