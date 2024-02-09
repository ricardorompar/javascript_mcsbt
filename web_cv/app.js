// const hello = "Hello, World!";
// const a = 4;
// const b = 2;
// const result = a > b ? "A is larger" : "A is smaller";
// alert(hello + " " + result);
// console.log(result);
// for (let i = 0; i < 3; i++) {
//   alert("This is message number " + parseInt(i));
// }

//
// Exercise: find the equivalent temperature in degrees farenheit
// do it within a function
function getValue() {
  var inputVal = parseFloat(prompt("Enter a temperature value in °C"));
  return inputVal;
}

const computeFarenheit = function (celsius) {
  return (celsius * 9) / 5 + 32;
};

output = computeFarenheit(getValue());

alert(`The temperature in Farenheit is ${String(output)}°F`);

//
let a = [3, 2, 1, 4, 3];
let b = a.reduce((e, acc) => e + acc, 0);
let c = a.map((e, acc) => e * acc, 1);
console.log(a);
