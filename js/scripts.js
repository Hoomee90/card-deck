//UI logic

function constructCardValues() {
  let cardValues = Array.from({ length: 9 }, (value, position) => position);
  cardValues.push("Jack", "Queen", "King", "Ace");
  return cardValues
}

window.addEventListener("load", function() {
  const cardSuits = ["Clubs", "Diamonds", "Hearts", "Spades"];
  const h1 = document.querySelector("#title");
  
  cardSuits.forEach(suit => {
    cardValues = constructCardValues();
    cardValues.forEach(card => {
      if (card) {

      } else {

      }
    });
  });
});