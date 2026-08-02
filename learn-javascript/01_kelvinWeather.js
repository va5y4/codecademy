// The value of today's forecast
const kelvin = 0;

// Convert kelvin to celsius
const celsius = kelvin - 273;

// Convert celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32;

// Round down Fahrenheit
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);