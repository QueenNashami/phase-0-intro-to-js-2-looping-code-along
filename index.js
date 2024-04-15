// Code your solutions in this file

// The for loop example
function wrapGifts(gifts) {
    let wrappedGifts = [];
    for (let i = 0; i < gifts.length; i++) {
      wrappedGifts.push(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return wrappedGifts;
  }
  
  // The writeCards function
  function writeCards(names, event) {
    let thankYouCards = [];
    for (let i = 0; i < names.length; i++) {
      thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouCards;
  }
  
  // The countDown function
  function countDown(num) {
    while (num >= 0) {
      console.log(num--);
    }
  }
  
  // Testing the functions
  const gifts = ["teddy bear", "drone", "doll"];
  const names = ["Charlie", "Samip", "Ali"];
  
  console.log(wrapGifts(gifts));
  console.log(writeCards(names, "birthday"));
  countDown(10); 