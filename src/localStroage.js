const getStroedCart = () =>{
    const stroedCartString = localStorage.getItem('cart')

    if(stroedCartString){
        return JSON.parse(stroedCartString)
    }
    return []
}

const savecartToLs = cart => {
    const cartStringfied = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringfied)
}

const addToLs = id => {
    const cart = getStroedCart();
    cart.push(id);
    savecartToLs(cart)
} 

const removeCartFromLs = (id) => {
    const cart = getStroedCart()
    const remainingCart = cart.filter(idx => idx !== id);
    savecartToLs(remainingCart)
}

export {addToLs, getStroedCart, removeCartFromLs};