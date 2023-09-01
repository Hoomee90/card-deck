//Business Logic
function constructCardValues() {
  let cardValues = Array.from({ length: 9 }, (value, position) => position);
  cardValues.push("Jack", "Queen", "King", "Ace");
  return cardValues
} 

//UI logic
function printCard(value, suit) {
  const h1 = document.querySelector("#title");

  cardElement = document.createElement("p");
  cardElement.append(value + " of " + suit);
  h1.after(cardElement);
}

window.addEventListener("load", function() {
  const cardSuits = ["Clubs", "Diamonds", "Hearts", "Spades"];
  
  cardSuits.forEach(suit => {
    cardValues = constructCardValues();
    cardValues.forEach(value => {
      if (Number.isInteger(value)){
        value += 2
      }     
      printCard(value, suit);
    });
  });
});