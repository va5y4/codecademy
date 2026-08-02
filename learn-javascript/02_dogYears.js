//My age
const myAge = 20;
//Value which will change
let earlyYears = 2;
earlyYears *= 10.5;
//Set later years
let laterYears = myAge - 2;
//Multiply later years by 4
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
//Sum of early and later years to one variable
let myAgeInDogYears = earlyYears + laterYears;
//My name in lowercase
let myName = "eagle".toLowerCase();
//Print name age and age in dog years
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
