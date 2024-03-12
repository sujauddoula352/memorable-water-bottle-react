import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../bottle/Bottle";
import "./Bottles.css"
import { addToLS, getStoredCard } from "../../utilities/localStorage";
const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const[card, setCard]=useState([]);

    useEffect(() =>{
        fetch('bottles.json')
        .then(response => response.json())
        .then (data => setBottles(data))
    },[])
 // loade card from local storage

    useEffect(() =>{
        if(bottles.length > 0){
        const storedCart = getStoredCard();
    const saveCard = [] ;
        for( const id of storedCart){
            const bottle = bottles.find( bottle => bottle.id == id);
            if(bottle){
                saveCard.push(bottle)
            }
        }
        setCard(saveCard);

    }

},[bottles])
    const hendleAddToCard = bottle =>{
    const newCard = [...card, bottle];
    setCard(newCard);
    addToLS(bottle.id);
   

    }
    return (
        <div>
         <h2>Bottles Available:{bottles.length}</h2>
         <h3> Card : {card.length} </h3>
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