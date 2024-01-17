// 1. Declare a variable called "num" then write an if else statement that will check if number is even or odd and print solution to the console
let num = 3;
let any = 2;

if (num % 2  == 0) {
  console.log("num is even")
} else {
 console.log("num is odd")
}
// 2. Declare a variable called "any" then write an if else statement that checks the data type and prints it to the console. If data type is a number also state whether that number is positive or negative.

function checkAny(anynum){
  anynum = any;
  console.log(typeof(anynum))

  if (typeof(anynum) == "number" && anynum >= 0) {
    console.log("Any is a positive number.")
  } else if (typeof(anynum) == "number" && anynum < 0) {
    console.log("Any is a negative number.")
  }
}

checkAny(any)

// 3a. Declare a string variable called "name" & create a name
let name = "Mimi"
// 3b. Declare a number variable called "time" & choose a number
let time = "24"
// 3c. Declare a string variavle called "adj" & choose a adjective
let adj = "runs"
// 3d. Declare a boolean variable named "choice" give it a value
let choice = "True"




























































































prompt1();
function prompt1() {
  try {
    console.log(
      `Hello ${name}, and welcome to PerScholas.
        Most people take over ${time} years to learn Software engineering, 
        but you learned the basics in only 15 weeks. 
        Nice work! Today we will learn loops 
        and you will have a ${adj} time learning the concepts`
    );

    if (choice) {
      console.log(`You chose true, so you must like queso more than salsa`);
    } else {
      console.log(`You chose false, so you must like salsa more than queso`);
    }
  } catch (err) {
    console.error(`Question number three wont run until all variable complete`);
  }
}
