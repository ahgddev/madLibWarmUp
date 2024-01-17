// 1. Declare a variable called "num" then write an if else statement that will check if number is even or odd and print solution to the console

// 2. Declare a variable called "any" then write an if else statement that checks the data type and prints it to the console. If data type is a number also state whether that number is positive or negative.

// 3a. Declare a string variable called "name" & create a name
// 3b. Declare a number variable called "time" & choose a number
// 3c. Declare a string variavle called "adj" & choose a adjective
// 3d. Declare a boolean variable named "choice" give it a value




























































































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
