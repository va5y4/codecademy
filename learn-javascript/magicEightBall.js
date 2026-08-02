let userName = "";
if (userName == "") {
  console.log("Hello!");
} else {
  console.log(`Hello, ${userName}!`);
}
let userQuestion = "";
console.log(`Please type your question ${userName}!`);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";
if ((randomNumber = 0)) {
  eightBall = "I don't think so.";
} else if ((randomNumber = 1)) {
  eightBall = "Yes for sure!";
} else if ((randomNumber = 2)) {
  eightBall = "It will rain today!";
} else if ((randomNumber = 3)) {
  eightBall = "It will snow today!";
} else if ((randomNumber = 4)) {
  eightBall = "Ok";
} else if ((randomNumber = 5)) {
  eightBall = `${userName} are you crazy?`;
} else if ((randomNumber = 6)) {
  eightBall = "Trololo!";
} else if ((randomNumber = 7)) {
  eightBall = "Mew";
} else if ((randomNumber = 8)) {
  eightBall = "Pspsps";
}
console.log(eightBall + " " + randomNumber);
