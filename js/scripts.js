//Business Logic
function constructCardValues() {
  let cardValues = Array.from({ length: 9 }, (value, index) => index);
  cardValues.push("Jack", "Queen", "King", "Ace");
  return cardValues.reverse();
} 

//UI logic
function printCard(value, suit, index) {
  const h1 = document.querySelector("#title");
  const cardElement = document.createElement("p");

  cardElement.append(value + " of " + suit);
  if (suit === "Diamonds" || suit === "Hearts") {
    cardElement.style.color = "red";
  } 
  h1.after(cardElement);
  if (index === 0) {
    const br = document.createElement("br");
    document.querySelector("p").after(br);
  }
}

window.addEventListener("load", function() {
  const inputSuits = ["Clubs", "Spades", "Hearts", "Diamonds"]
  const cardSuits = inputSuits.sort().reverse();
  
  cardSuits.forEach(suit => {
    const cardValues = constructCardValues();
    cardValues.forEach((value, index) => {
      if (Number.isInteger(value)){
        value += 2;
      }
      printCard(value, suit, index);
    });
  });
});