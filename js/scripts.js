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

// var userName = prompt("Enter yoru full name", "Harry Potter");
// var favoriteColor = prompt("Enter your favorite color", 
// "red, orange, yellow, green, blue, pink, purple, black, white, gray");

// switch (favoriteColor) {
//     case "red" : 
//         alert(userName + ", you are reddish and your favorite color is " + favoriteColor + ".");
//         break;
//     case "orange" :
//         alert(userName + ", you are orangish and your favorite color is " + favoriteColor + ".");
//         break;
//     case "yellow" :
//         alert(userName + ", you are yellowish and your favorite color is " + favoriteColor + ".");
//         break;
//     case "green" :
//         alert(userName + ", you are greenish and your favorite color is " + favoriteColor + ".");
//         break;
//     case "blue" :
//         alert(userName + ", you are blueish and your favorite color is " + favoriteColor + ".");
//         break;
//     case "pink" :
//         alert(userName + ", you are pinkish and yoru favorite color is " + favoriteColor + ".");
//         break;
//     case "purple" :
//         alert(userName + ", you purplish and your favorite color is " + favoriteColor + ".");
//         break;
//     case "black" :
//         alert(userName + ", you are blakish and yrou favorite color is " + favoriteColor + ".");
//         break;
//     case "white" :
//         alert(userName + ", you are whitish and favorite color is " + favoriteColor + ".");
//         break;
//     case "gray" :
//         alert(userName + ", you are grayish and yoru favorite color is " + favoriteColor + ".");
//         break;
//     default :
//         alert(userName + ", your favorite color is UNKNOWN");

// }

//Day 4 TakeHome

// 1. Creates an array of things you need or want to do this weekend by collecting three todos from the user.
// 2. Using a for loop, change the items in the array by adding days they should be completed to each index.
// 3. Using a while loop, find the task that will take the longest and log it to the console.
// 4. Using a do while loop, add the string 'done' to all the tasks other than the one that will take the longest
// 5. Finally, alert all the tasks that are marked done in the todo array.

var taskList = [];
//todoList[][0] - task, string
//todoList[][1] - days needed to complete task, number
//todoList[][2] - not done/done, string
const maxTasks = 3;
var i = 0; //conter
var longTaskIndex = 0; //longest duration task

//Collect work item and days it will take to complete, initialize to "not done"

for (let i = 0; i < maxTasks; i++) {
    let j = i+1;
    let task = prompt(`Enter task number ${j} you need to complete - `, "Clean clothes" );
    let duration = prompt(`Enter days it will take to complete ${task} task - `);
    taskList.push([task,duration,"not done"]);
}
console.log("all tasks initialy -", taskList);

//Find the longest duration work item
i = 0;
while (i < maxTasks) {
    if (taskList[longTaskIndex][1] < taskList[i][1]) {
      longTaskIndex = i;
    }
    i++;
}
alert(`Longest task is ${taskList[longTaskIndex][0]} and task duration is ${taskList[longTaskIndex][1]} days`);

//Mark "done" to all tasks except the longest duration task using do whole.
i = 0;
do {
    if (i != longTaskIndex) {
        taskList[i][2] = "done";
    }
    i++;
} while (i < maxTasks);

//Alert all the tasks that are marked done in the todo array.
for (i = 0; i < maxTasks; i++) {
    if (taskList[i][2] == "done") {
        alert(`Task in "done" state - ${taskList[i][0]}`);
    }
}

console.log(taskList);