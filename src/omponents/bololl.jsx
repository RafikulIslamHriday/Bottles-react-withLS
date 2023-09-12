 import PropTypes from 'prop-types'
const Bottle = ({bottle, handdleAddToCard}) => {
    
    // console.log(bottle);
    const {name, img, price} = bottle
    return (
        <div className="text-center p-3 border-2 border-sky-500">
            <div >
                <img src={img} alt="" className="bottle-img mx-auto"  />
            </div>
            <h3 className="text-xl">Bottle: {name}</h3>
            <p>Price: {price}</p>
            <button className="btn px-3 py-2 bg-sky-500 rounded-lg " onClick={() => handdleAddToCard(bottle)}>Purches</button>
        </div>
    );
};
Bottle.propTypes = {
    bottle : PropTypes.object.isRequired,
    handdleAddToCard : PropTypes.func.isRequired,
 }

export default Bottle;