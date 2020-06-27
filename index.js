//Dice 1
var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
var diceVal1 = "dice" + randomNumber1 + ".png";
var randomImage1 = "images/" + diceVal1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImage1);

//Dice 2
var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
var diceVal2 = "dice" + randomNumber2 + ".png";
var randomImage2 = "images/" + diceVal2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImage2);

//Winner
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
}
else{
  document.querySelector("h1").innerHTML = "Draw Losers 😂";
}
