/**
 * 2.4 - Custom Functions
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 * 
 * This is a playground. Feel free to play.
 **/ 


// Example custom function using Number() and prompt()
function circle_area() {

    let radius = Number(prompt("What is the radius of the circle?"));

    console.log(`The area is: ${Math.PI * radius**2}`);

}

/*****  Your code goes below  *****/

function to_fahrenheit() {

   let celsius = Number(prompt("What is the temperature in Celcius?"))

   let fahrenheit = Math.round((celsius * 9/5) + 32)

   console.log(`${celsius}° Celsius is equal to ${fahrenheit}° Fahrenheit`)

}

// Part 2

function to_celcius() {

let fahrenheit = Number(prompt("What is the temperature in Fahrenheit?"))

let celsius = Math.round((fahrenheit - 32) * 5/9)

console.log (`${fahrenheit}° Fahrenheit is equal to ${celsius}° Celcius`)

}

// Part 3
