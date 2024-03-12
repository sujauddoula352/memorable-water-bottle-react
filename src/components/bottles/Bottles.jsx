import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../bottle/Bottle";
import "./Bottles.css"
const Bottles = () => {
    const [bottles, setBottles] = useState([]);

    useEffect(() =>{
        fetch('bottles.json')
        .then(response => response.json())
        .then (data => setBottles(data))
    },[])

    const hendleAddToCard = bottle =>{
        console.log(bottle)

    }
    return (
        <div>
         <h2>Bottlkes Here:{bottles.length}</h2>
      <div className="bottle-container">
       {
            bottles.map( bottle => <Bottle 
                key={bottle.id} 
                bottle={bottle}
                hendleAddToCard = {hendleAddToCard}
            ></Bottle>)
         }

      </div>
      
        </div>
    );
};

export default Bottles;