"use-strict";

const l = console.log;
// JavaScript Assignment 13

/*
1. Write a JavaScript program to get an array from the user and return the:
a) Sum of all elements in the array using reduce()
b) Average of all elements in the array using reduce()
Sample Input:
[ 1, 2, 3, 4, 5 ]
Output:
15
3
*/

// =>
const inputArray = [1, 2, 3, 4, 5];

// a)
/**
 *
 * @param {*} arr
 * @returns sum of all the elements
 */
const sumOfAllElements = (arr) => {
  return arr.reduce((acc, item) => (acc += item), 0);
};

l(sumOfAllElements(inputArray));

// b)
/**
 *
 * @param {*} arr
 * @returns average of all the elements
 */
const averageOfElements = (arr) => sumOfAllElements(arr) / arr.length;

l(averageOfElements(inputArray));

// --------------------------------------------------------------------------------------------------------------------------------------------------

/*
2. Write a JavaScript program to
a) Calculate grades on basis of marks
>90 = A
>80 = B
>70 = C
>60 = D
>50 = E
else = F
b) Map the grades of each student
c) Group students according to the grades they have received and display.
Sample Input:
let students = [
{ name: "John", marks: “92” },
{ name: "Oliver", marks: “85” },
{ name: "Michael", marks: “79” },
{ name: "Dwight", marks: “95”},
{ name: "Oscar", marks: “64” },
{ name: "Kevin", marks: “48” },
];
Output:

{
'A': [ { name: "John", grade: “A” },
{ name: "Dwight", grade: “A” } ],
'B': [ { name: "Oliver", grade: “B” } ],
'C': [ { name: "Michael", grade: “C” } ],
'D': [ { name: "Oscar", grade: “D” } ],
'E': [ ],
'F': [ { name: "Kevin", grade: “F” } ],
}
*/

// Answer
// =>
const students = [
  { name: "John", marks: 92 },
  { name: "Oliver", marks: 85 },
  { name: "Michael", marks: 79 },
  { name: "Dwight", marks: 95 },
  { name: "Oscar", marks: 64 },
  { name: "Kevin", marks: 48 },
];

/**
 *
 * @param {*} marks
 * @returns grade based on marks provided
 */
const caseForGradeAssignment = (marks) => {
  switch (true) {
    case marks >= 90:
      return "A";
    case marks >= 80:
      return "B";
    case marks >= 70:
      return "C";
    case marks >= 60:
      return "D";
    case marks >= 50:
      return "E";
    default:
      return "F";
  }
};

/**
 *
 * @param {*} students
 * @returns assign grades to each student within the object
 */
const assignGrades = (students) =>
  students.map((item) => {
    item["grades"] = caseForGradeAssignment(item.marks);
    return item;
  });

/**
 *
 * @param {*} students
 * @returns group of students with common grades
 */
const groupGrades = (students) =>
  assignGrades(students).reduce((acc, item) => {
    !acc[item.grades]
      ? (acc[item.grades] = [item])
      : acc[item.grades].push(item);
    return acc;
  }, {});

// Output

l(assignGrades(students));
l(groupGrades(students));
