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

// // Day 3 Take home

// //1. Prompts your user for their name.
// //2. Next, ask the user's favorite color. 
// //(Provide the user with the basic 10 colors as options i.e. red, orange, yellow, 
// //green, blue, pink, purple, black, white, and grey).
// //3. Depending on the color, write 9 different responses for the possible answers. 
// //Include the user's name in the response message

// // var userName = prompt("Enter yoru full name", "Harry Potter");
// // var favoriteColor = prompt("Enter your favorite color", 
// // "red, orange, yellow, green, blue, pink, purple, black, white, gray");

// // switch (favoriteColor) {
// //     case "red" : 
// //         alert(userName + ", you are reddish and your favorite color is " + favoriteColor + ".");
// //         break;
// //     case "orange" :
// //         alert(userName + ", you are orangish and your favorite color is " + favoriteColor + ".");
// //         break;
// //     case "yellow" :
// //         alert(userName + ", you are yellowish and your favorite color is " + favoriteColor + ".");
// //         break;
// //     case "green" :
// //         alert(userName + ", you are greenish and your favorite color is " + favoriteColor + ".");
// //         break;
// //     case "blue" :
// //         alert(userName + ", you are blueish and your favorite color is " + favoriteColor + ".");
// //         break;
// //     case "pink" :
// //         alert(userName + ", you are pinkish and yoru favorite color is " + favoriteColor + ".");
// //         break;
// //     case "purple" :
// //         alert(userName + ", you purplish and your favorite color is " + favoriteColor + ".");
// //         break;
// //     case "black" :
// //         alert(userName + ", you are blakish and yrou favorite color is " + favoriteColor + ".");
// //         break;
// //     case "white" :
// //         alert(userName + ", you are whitish and favorite color is " + favoriteColor + ".");
// //         break;
// //     case "gray" :
// //         alert(userName + ", you are grayish and yoru favorite color is " + favoriteColor + ".");
// //         break;
// //     default :
// //         alert(userName + ", your favorite color is UNKNOWN");

// // }

// //Day 4 TakeHome

// // 1. Creates an array of things you need or want to do this weekend by collecting three todos from the user.
// // 2. Using a for loop, change the items in the array by adding days they should be completed to each index.
// // 3. Using a while loop, find the task that will take the longest and log it to the console.
// // 4. Using a do while loop, add the string 'done' to all the tasks other than the one that will take the longest
// // 5. Finally, alert all the tasks that are marked done in the todo array.

// var taskList = [];
// //todoList[][0] - task, string
// //todoList[][1] - days needed to complete task, number, must be > 0
// //todoList[][2] - "not done"/"done", string
// const maxTasks = 3;
// var i = 0; //conter
// var longTaskIndex = -1; //longest duration task

// //Collect work item and days it will take to complete, initialize to "not done"

// for (let i = 0; i < maxTasks; i++) {
//     let j = i+1;
//     let task = prompt(`Enter task number ${j} you need to complete - `, "Clean clothes" );
//     let duration = prompt(`Enter days it will take to complete ${task} task - `);
//     //var due =prmpt(`what day you wany done day/mnth/yr');
//     //due = new Date(due);
//     taskList.push([task,(((Number(duration) == NaN) || (Number(duration) <=0)) ? null : Number(duration)),"not done"]);
// }
// console.log("all tasks initialy -", taskList);

// //var now = new Date().getTime();
// //let oneDay = 24 * 60 * 1000;
// //var diffDay = Math.round((todosWithDays[j][1].getTime() - now))/oneDay);
// //sortedWithIndicies.push([diffDays, todosWithDays[j]]);
// //sortedWithINdicies.sort();
// //console.log(sortedWithIndicies[sortedWithIndicies.length -1][1], `will take teh longest`);


// //Find the longest duration work item
// i = 0;
// while (i < maxTasks) {
//     if (taskList[i][1] != null) { //valid duration
//         if (longTaskIndex >= 0) { 
//             if (taskList[longTaskIndex][1] < taskList[i][1]) {
//                 longTaskIndex = i;
//             }
//         } else {
//             longTaskIndex = i;
//         }
//     }
//     i++;
// }
// if (longTaskIndex == null) {
//     alert(`Invalid durations`);
// } else {
//     alert(`Longest task is ${taskList[longTaskIndex][0]} and task duration is ${taskList[longTaskIndex][1]} days`);

//     //Mark "done" to all tasks except the longest duration task using do whole.
//     i = 0;
//     do {
//         if ((i != longTaskIndex) && (taskList[i][1] != null)) {
//                 taskList[i][2] = "done";
//         }
//         i++;
//     } while (i < maxTasks);

//     //Alert all the tasks that are marked done in the todo array.
//     for (i = 0; i < maxTasks; i++) {
//         if (taskList[i][2] == "done") {
//             alert(`Task in "done" state - ${taskList[i][0]}`);
//         }
//     }

// }

// console.log(taskList);

//Day 5 take home
//SQUARE a NUMBER ********************************
var number = 0;
var squared = -1;

//numberSquare definition
//x - number to be squared, if string  then teh first number is sued for squaring.
//returns square of the number if x is a number
//returns -1 if x is not a number 
function numberSquare(x) {
    let parsed = parseInt(x);
    if (isNaN(parsed)) {
        alert("Not a number, please reenter a valid number");
        return [NaN, -1];
    } else {
        return [parsed, parsed * parsed] ;
    }
}

//prompt for number, return square if a valid number is entered; otherwise loop till a valid number given
do { 
    number = prompt("Enter the number to be SQUARED ?", 5);
    var x = numberSquare(number);
    number = x[0];
    squared = x[1]
} while (squared < 0);

alert(`Square of ${number} is ${squared}.`);

//Manipulate string*********************************

// In a second function, capitalize the first letter of a string and add a period (.) to the end of the string if it doesn't already end with a period
// Create a string that will flip the position of the first and second half of a string. For example, the string “abcdef” would be returned as “defabc”. Hint: use substring.
// BONUS: If you are bored by all that, write a function that checks if a given string is a palindrome

//global variables
var inputString;
var newString1;
var newString2;

//changeString function changes given string - makes first letter upplercase and adds "." if it's nto there.
function changeString(cString) { 
    let nString; // new string to be returned
    let firstLetter = cString.charAt(); //get first character in teh string
    let firstUpLetter = firstLetter.toUpperCase(); //convert letter to upper case
    (cString.endsWith(".")) ? nString = firstUpLetter + cString.substr(1) : nString = 
        firstUpLetter + cString.substr(1) + ".";
    return nString;
}

//flipString function flips first and second half of a string
function flipString(cString) {
    let nString; //new string to be returned
    let halfLength;
    if (cString.length == 1) {
        return cString; //no need to flip, string one letter long
    } else {
        halfLength = Math.trunc(cString.length / 2);
        let firstHalfString = cString.substr(0,halfLength);
        let secondHalfString = cString.substr(halfLength, (cString.length - halfLength));
        nString = secondHalfString + firstHalfString;
        return nString;
    }
}

while (true) { //make first letter to uppercase and add period if it is not there
    inputString = prompt("Enter the string to MODIFY - ", "hello I am John");
    if (inputString.length > 0) {  //check for empty string
        newString1 = changeString(inputString);
        alert(`New String is ${newString1}, Input string was ${inputString}`);
        break;
    }
}
//flip position of first and second half of string
while (true) {
    inputString = prompt("Enter the string to be FLIPPED halflength- ", "aaaabbbbbb" );
    if (inputString.length > 0) {  //check for empty string
        newString2 = flipString(inputString);
        alert(`New String is ${newString2}, Input string was ${inputString}`);
        break;
    }
}