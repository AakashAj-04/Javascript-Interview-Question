// Find Duplicate Number in Array :
const arrNum = [1, 2, 8, 3, 9, 8, 9];
const duplicate = arrNum.filter(
  (ele, index, arr) => arr.indexOf(ele) !== index
);
console.log(duplicate);

//
// Find Max and Min value in Given Array :
const arrNumber = [1, 4, 5, 20, 10, 23, 7, 13];
const maxFunction = (arr) => {
  return arr.reduce(function (pre, cur) {
    return pre > cur ? pre : cur;
  });
};
const minFunction = (arr) => {
  return arr.reduce(function (pre, cur) {
    return pre < cur ? pre : cur;
  });
};
console.log("Max Value", maxFunction(arrNumber));
console.log("Min Value", minFunction(arrNumber));

//
// Difference b/w == and ===
// == for value and === both value and types
var x = 7;
var y = "7";
console.log(x == y); // value 7 == 7
console.log(x === y); // value and type - number === string

//
// Find 2nd Largest value inGiven Array:
const num = [8, 10, 34, 332, 222, 345];
const largestValue = (arr) => {
  firstLargestValue = Math.max(...arr); //use Math to find max_value
  index = arr.indexOf(firstLargestValue); // Find index of max_value
  arr.splice(index, 1); // using splice delete the index of max_value
  secondLargestValue = Math.max(...arr);

  return secondLargestValue;
};
console.log("secondLargestValue", largestValue(num));

//
//Diff b/w filter and find method:
const empArr = [
  { name: "Aakash", age: 24 },
  { name: "Aj", age: 29 },
  { name: "Priya", age: 19 },
  { name: "Ananya", age: 19 },
];
const filteredItem = empArr.filter((item) => {
  return item.age > 20;
});
const filterItem = empArr.find((item) => {
  return item.age < 20;
});
console.log("filter() Method", filteredItem);
console.log("find() Method", filterItem);

// Find missing Number in Given array 1 to 10
const missArr = [1, 2, 3, 4, 5, 7, 9, 10];
const missArray = [];
const missingValue = (arr) => {
  const minValue = Math.min(...missArr);
  const maxValue = Math.max(...missArr);
  for (let i = minValue; i < maxValue; i++) {
    if (arr.indexOf(i) < 0) {
      missArray.push(i);
    }
  }
  return missArray;
};
console.log(missingValue(missArr));

//
// Find even or odd number in given array
const numbers = [1, 3, 4, 5, 6, 7, 8, 13, 44];
const even = numbers.filter((item) => {
  return item % 2 === 0;
});
const odd = numbers.filter((item) => {
  return item % 2 !== 0;
});
console.log("even numbers", even);
console.log("odd numbers", odd);

//
// Sum of all elements in an array
const sumArr = [1, 2, 3, 4, 5];
var sumValue;
const sumOfNumbers = (arr) => {
  return arr.reduce((pre, cur) => {
    return pre + cur;
  });
};
console.log("Sum Total", sumOfNumbers(sumArr));

//
// Factorial
// const inputNum = prompt("enter the number");
const inputNum = 5;
var fact = 1;
if (inputNum < 0) {
  console.log(`factorial of ${inputNum} is not possible`);
} else {
  for (let i = 1; i <= inputNum; i++) {
    fact = fact * i;
  }
  console.log(`factorial of ${inputNum} is ${fact}`);
}

//
// Prime number in javascript
// var number = prompt("Enter the Number");
var number = 5;
if (number == 1) {
  console.log(`${number} is not prime neither composite`);
} else if (number < 1) {
  console.log(`prime number of ${number} is not possible`);
} else {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      var result = `${number} is not prime number`;
      break;
    } else {
      var result = `${number} is prime number`;
    }
  }
  console.log("Prime", result);
}

//
//Find Vowels from string
// var sentence = prompt("enter string");
var sentence = "Aakash";
const vowels = ["a", "e", "i", "o", "u"];
const countVowel = (str) => {
  var count = 0;
  for (let letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return count;
};
console.log("Vowel Count :", countVowel(sentence));

//
// Reverse a String
const reverseString = (str) => {
  var strToArr = str.split("");
  var arrReverse = strToArr.reverse();
  var strReverse = arrReverse.join("");
  return strReverse;
};
console.log("String Reverse :", reverseString("butter"));

//
//Palindrome in Javascript
// var palin = prompt("Enter sentence");
var palin = "Rayar";
palin = palin.toLowerCase();
const checkPalindrome = (str) => {
  var reverseString = str.split("").reverse().join("");

  if (reverseString === str) {
    return console.log(`${str} is palindrome`);
  } else {
    return console.log(`${str} is not palindrome`);
  }
};
checkPalindrome(palin);

//
// Swap two Variable
let a = 7;
let b = 5;
[a, b] = [b, a];
console.log(`value of a is${a} and value of b is ${b}`);

//
// Join 2 arrays and sort them.
const arr1 = ["2", "8", "4", "6"];
const arr2 = ["45", "23", "12", "11"];

//Concat method
const finalArray = arr1.concat(arr2);
const sortedArray = finalArray.sort(function (a, b) {
  return a - b;
});

//spread operator
const resultArray = [...arr1, ...arr2];
const sortedArray2 = resultArray.sort(function (a, b) {
  return a - b;
});
console.log(sortedArray2);

//
// Factor of a number
const fNum = prompt("Enter Positive Number");
for (let i = 0; i <= fNum; i++) {
  if (fNum % i == 0) {
    console.log("Factor", i);
  }
}
