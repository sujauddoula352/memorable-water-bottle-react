const getStoredCard  = () =>{
    const storedCardString = localStorage.getItem('card')
    if(storedCardString){
        return JSON.parse(storedCardString)
    }
 return [];
}

const saveCardToLS = card =>{
    const cardStringified = JSON.stringify(card);
    localStorage.setItem('card', cardStringified)
}

const addToLS = id =>{
const card = getStoredCard();
card.push(id);
saveCardToLS(card);
}
export { addToLS, getStoredCard}