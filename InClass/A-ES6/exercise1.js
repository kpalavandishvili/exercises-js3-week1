// Turn this function into an arrow function
// function arrow() {
//   return "es6 is awesome!";
// }
const arrow = () => "es6 is awesome!";
console.log("es6 is awesome!");


//Use the es6 syntax for default parameter
// function defaultParameter(name) {
//   var name = name || "sam";
//   return name;
// }
const defaultParameter = (name = "sam") => name;
console.log("sam");


// Use the spread operator to combine arr1 and arr2
// function combineArrays(arr1, arr2) {
//   return arr1.concat(arr2);
// }
const combineArrays = (arr1, arr2) => [...arr1, ...arr2] ;
console.log("this is spread operator");

//use destructuring to return the object's cyf property
// function destructuring(obj) {
//   return obj.cyf;
// }
const destructuring = (obj) => {
  const { cyf } = obj;
}
console.log("this returns object's cyf property");

// use template literal to return a string with the sum of a and b
// function templateString(a, b) {
//   return "The sum is equal to " + (a + b).toString();
// }
const templateString = (a, b) => `The sum is equal to ${(a + b).toString()}`;
console.log("this returns a string");