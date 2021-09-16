var randomNumber1 = Math.floor(6*Math.random())+1;
var randomNumber2 = Math.floor(6*Math.random())+1;
var randomImage1 = "images/dice"+randomNumber1+".png";
var randonImage2 = "images/dice"+randomNumber2+".png";
document.querySelector(".img1").setAttribute("src",randomImage1);
document.querySelector(".img2").setAttribute("src",randonImage2);

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "⚡Player 1 wins!!";
}
else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "🚈PLayer 2 wins!!";
}
else{
  document.querySelector("h1").innerHTML = "DRAW!!";
}
