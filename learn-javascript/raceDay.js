let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const age = 18;
if (age > 18 && registeredEarly) {
  raceNumber += 1000;
}
if (age > 18 && registeredEarly) {
  console.log("You will race at 9:30 am. Your number is " + raceNumber + ".");
} else if (age > 18 && !registeredEarly)
{
  console.log("You will race at 11:00 am. Your number is " + raceNumber + ".");
}
if (age < 18)
{
  console.log("You will race at 12:30 pm. Your number is " + raceNumber + ".")
} else if (age == 18)
console.log("Please see the registration desk.")
