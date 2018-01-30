// var sentence = "asdfffg";
// console.log(sentence);

// var digits = 45;
// console.log(digits);

// var fact = true;
// console.log(fact);

// let firstNumber = 22;
// console.log(firstNumber);

// {
//     const truth = "asdfsffffff";
// console.log(truth);

// }

// const truth = "aaaaa";
// console.log(truth);

// let rightNow = new Date();
// console.log(rightNow);

// var iLikePI = Math.PI;
// console.log(iLikePI);

// var string = "LaLaLaLa";

// var newString = new String("LaLaLaLa")

// console.log(string);
// console.log(newString.toUperCase);

// var myArray = ["Hellow world", 22, true, null];
// console.log(myArray.length);

// var myObject = {
//     myString: "Hello World",
//     myNumber: 42
// }

// let helloMessage = alert("Hay, this is my laptop");
// let confirmMessage = confirm("Is yoru name Jesus?");

// console.log(confirmMessage);

// let promptMessage = prompt("tell me teh password....", "password");
// console.log(promptMessage);

// var firstName = prompt("Your first Name...","First Name")
// var lastName = prompt("Your last name...", "Last Name");
// console.log(firstName);
// alert(lastName);

// let birthDay = prompt("What is yoru birthdate ?", "Please respond as 01/01/2011");
// confirm(new Date(birthDay));

// var first1Number = prompt("enter a number", 10);
// var second2Number = prompt("enter 2nd number", 10);
// alert("Using parseInt - " + (parseInt(first1Number, 10) + parseInt(second2Number, 10)));
// alert("Using Number - " + (Number(first1Number) + Number(second2Number)));
// alert("Using divide by 1 - " + ((first1Number/1) + (second2Number/1)));

//This is gh=pages branch

//Day 3 Take Home

// Day 3 Take home

//1. Prompts your user for their name.
//2. Next, ask the user's favorite color. 
//(Provide the user with the basic 10 colors as options i.e. red, orange, yellow, 
//green, blue, pink, purple, black, white, and grey).
//3. Depending on the color, write 9 different responses for the possible answers. 
//Include the user's name in the response message

var userName = prompt("Enter yoru full name", "Harry Potter");
var favoriteColor = prompt("Enter your favorite color", 
"red, orange, yellow, green, blue, pink, purple, black, white, gray");

switch (favoriteColor) {
    case "red" : 
        alert(userName + ", you are reddish and your favorite color is " + favoriteColor + ".");
        break;
    case "orange" :
        alert(userName + ", you are orangish and your favorite color is " + favoriteColor + ".");
        break;
    case "yellow" :
        alert(userName + ", you are yellowish and your favorite color is " + favoriteColor + ".");
        break;
    case "green" :
        alert(userName + ", you are greenish and your favorite color is " + favoriteColor + ".");
        break;
    case "blue" :
        alert(userName + ", you are blueish and your favorite color is " + favoriteColor + ".");
        break;
    case "pink" :
        alert(userName + ", you are pinkish and yoru favorite color is " + favoriteColor + ".");
        break;
    case "purple" :
        alert(userName + ", you purplish and your favorite color is " + favoriteColor + ".");
        break;
    case "black" :
        alert(userName + ", you are blakish and yrou favorite color is " + favoriteColor + ".");
        break;
    case "white" :
        alert(userName + ", you are whitish and favorite color is " + favoriteColor + ".");
        break;
    case "gray" :
        alert(userName + ", you are grayish and yoru favorite color is " + favoriteColor + ".");
        break;
    default :
        alert(userName + ", your favorite color is UNKNOWN");

}