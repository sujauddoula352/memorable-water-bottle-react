import './Bottle.css';
const Bottle = ({bottle, hendleAddToCard}) => {
 const {name, img, price} = bottle;
    return (
        <div className="bottle">
            <h3>bottle : {name}</h3>
            <img src= {img} alt="" />
            <p>price: ${price}</p>
            <button onClick={()=>hendleAddToCard(bottle)}>Purchas</button>
        </div>
    );
};

export default Bottle;