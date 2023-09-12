import PropsType from 'prop-types'

const Cart = ({cart, handleRmoveFromCart}) => {
    // console.log(cart);
    return (
        <div>
            <h3 className="text-center text-2xl ">Cart length : {cart.length}</h3>
            <div className=" flex justify-center gap-3 mt-4">
                {
                    cart.map(bottle => <div key={bottle.id}>
                        <img className="w-[100px]" src={bottle.img} ></img>
                        <button onClick={() => handleRmoveFromCart(bottle.id)} className='btn '>Remove</button>
                    </div>)
                }
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropsType.array.isRequired,
    handleRmoveFromCart : PropsType.func.isRequired
}

export default Cart;