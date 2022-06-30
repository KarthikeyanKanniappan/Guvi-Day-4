// Task 2: Simple Programs todo for Operators
var a = 5;
var b = 10;
var c = 15;
//1. Square of a number
let square = a * a;
console.log(square);

// 2.Swapping 2 numbers
let swap = function (a, b) {
  let temp = a;
  a = b;
  b = temp;
  return `${a}, ${b}`;
};
console.log(swap(a, b));

// 3.Celsius to Fahrenheit conversion
let me = 90; // in degree
let Fahrenheit = me * 1.8 + 32;
console.log(Fahrenheit);

// 4.Calculate Simple Interest
let si = function (p, n, r) {
  let pnr = p * n * r;
  return pnr / 100;
};
console.log(si(10000, 2, 1));

// 5.Display the asterisk pattern as shown below(No loop needed)
let pattern = function (num) {
  if (num == 0) {
    return;
  } else {
    pattern(num - 1);
    console.log("*****");
  }
};
pattern(5);

// 6.Iterate through the string array and print it contents
var strArray = [
  "<option>Jazz</option>",
  ,
  "<option>Blues</option>",
  ,
  "<option>New Age</option>",
  ,
  "<option>Classical</option>",
  ,
  "<option>Opera</option>",
];
for (let i = 0; i < strArray.length; i++) {
  console.log(strArray[i]);
}

// 7.write a code to count the elements in the array . Don’t use length property

var myArray = [11, 22, 33, 44, 55];
sum = 0;
for (let i = 0; i < myArray.length; i++) {
  sum += 1;
}
console.log(sum);

// 8.Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.

let friendString = "Mari MaryJane Munnabai Jeff AAKchandran";
let friends = friendString.split(" ");
for (let i = 0; i < friends.length; i++) {
  name1 = friends[i];
  if (name1 === "Mari") {
    friends[i] = "Munnabai";
  }
  break;
}
console.log(friends);

// 9.Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.

const friendString1 = "Mari MaryJane CaptianAmerica Munnabai Jeff AAKchandran";
let friends1 = friendString1.split(" ");
for (let i = 0; i < friends1.length; i++) {
  name11 = friends1[i];

  if (name11 === "CaptianAmerica") {
    break;
  } else console.log(friends1[i]);
}

//10.Find the average in the array below.
// Make sure you add only the numbers and do avg.

const friendsInfo = [
  6,
  12,
  "Mari",
  1,
  true,
  "Munnabai",
  "200",
  "CaptianAmerica",
  8,
  10,
];
let arr = [];
for (let i = 0; i < friendsInfo.length; i++) {
  let type = typeof friendsInfo[i];
  if (type === "number") {
    arr.push(friendsInfo[i]);
  }
}
console.log(arr);
let added = arr.reduce((acc, el) => acc + el, 0);

let average = added / arr.length;
console.log(average);
