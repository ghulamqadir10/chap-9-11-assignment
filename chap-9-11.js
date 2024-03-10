let city = prompt("write your city name");
if (city === "karachi") {                           //===means check data type and value are same
  alert("welcome to the city of lights");
}
if (city !== "karachi") {                             //!== is not equal to
  alert("welcome to the beautiful city");
}

let gender = prompt("How would you describe your gender?");
if (gender === "male") {
  alert("Good Morning Sir");
}
if (gender === "female") {
  alert("Good Morning Ma,am");
}

let traffic_light_color = prompt("input traffic road signal light");
if (traffic_light_color === "red") {
  alert("Must Stop");
}
if (traffic_light_color === "yellow") {
  alert("Ready to move");
}
if (traffic_light_color === "green") {
  alert("Move now");
}

let remaining_fuel = prompt(
  "please input current remaining fuel in your car in litres"
);
if (remaining_fuel <= 0.25 + "litres") {
  alert("Please refill the fuel in your car");
}

let a = 4;
if (++a === 5) {
  console.log("givem condition for variable a is true");
}
let b = 82;
if (b++ === 83) {
  console, log("given condition for variable b is true");
}
let c = 40;
if (c++ === 13) {
  console.log("conditon 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}

let material_cost = 20000;
let labor_cost = 2000;
var total_cost = material_cost + labor_cost;
if (total_cost === material_cost + labor_cost) {
  alert("The cost equals");
}

if (true) {
  alert("True");
}
if (false) {
  alert("False");
}
if ("car" < "cat") {
  alert("car is smaller than cat");
}

// question 6

document.write(" <h2> Marks Sheet </h2> ");
let total_marks_s_1 = +prompt("please input total marks of subject 1");
let obt_marks_1 = +prompt("please input obtained marks of subject 1");

let total_marks_s_2 = +prompt("please input total marks of subject 2");
let obt_marks_2 = +prompt("please input obtained marks of subject 2");

let total_marks_s_3 = +prompt("please input total marks of subject 3");
let obt_marks_3 = +prompt("please input obtained marks of subject 3");

let total_marks = total_marks_s_1 + total_marks_s_2 + total_marks_s_3;
let total_obt_marks = obt_marks_1 + obt_marks_2 + obt_marks_3;

let percentage = (total_obt_marks / total_marks) * 100;

document.write("<h4>Total marks : " + total_marks + "</h4>");
document.write("<h4>Marks obtained :" + total_obt_marks + "</h4>");
document.write("<h4>Percentage " + percentage + " % </h4>");

if (percentage >= 80) {
  document.write("<h4>Grade: A-one" + "<br>" + "</h4>");
  document.write("<h4> Remarks: Excellent </h4>");
}

if (percentage >= 70 && percentage <= 79) {
  document.write("<h4>Grade: A" + "<br>" + "</h4>");
  document.write("<h4>Remarks: Good </h4>");
}

if (percentage >= 60 && percentage <= 69) {
  document.write("<h4>Grade: B" + "<br>" + "</h4>");
  document.write("<h4>Remarks: You need to improve</h4>");
}

if (percentage < 60) {
  document.write("<h4>Grade: Fail" + "<br>" + "</h4>");
  document.write("<h4>Remarks: Sorry</h4>");
}

// //  question 7

document.write("<h2>Guess Game</h2>");
let sec_num1 = 4;
let guess_num = +prompt("<h4>please input a num between 1 to 10</h4>");
if (guess_num === 4) {
  document.write("<h4>Bingo! Correct answer</h4>");
}
if (guess_num === 5) {
  document.write("<h4>Close enough to the correct answer.<h4>");
}
if (guess_num !== 4) {
  document.write("<h4>wrong answer<h4>");
}
if (guess_num !== 5) {
  document.write("<h4>wrong answer<h4>");
}

//     // question 8
document.write("<h2>Divisible number</h2>");
let divisible_num = +prompt(
  "please input a number i will tell you it is divisible by 3 or not"
);
if (divisible_num % 3 === 0) {
  document.write("<h4>number is divisible by 3<h4>");
}
if (divisible_num % 3 !== 0) {
  document.write("<h4>number is not divisible by 3</h4>");
}

// question 9\
let even_odd_num = +prompt("enter a num i will tell you evem and odd");
if (even_odd_num % 2 === 0) {
  document.write("<h4>" + even_odd_num + " is even" + "<br>" + "</h4>");
}
if (even_odd_num % 2 !== 0) {
  document.write("<h4>" + even_odd_num + " is odd" + "<br>" + "</h4>");
}

// question 10
let temp = +prompt("please input temperature number");
if (temp > 40) {
  document.write("<h4>it is too hot outside</h4>");
}
if (temp > 30 && temp <= 40) {
  document.write("<h4>The Weather today is Normal.</h4>");
}
if (temp > 20 && temp <= 30) {
  document.write("<h4>Today,s Weather is cool</h4>");
}
if (temp >= 10 && temp <= 20) {
  document.write("<h4>OMG! Today,s weather is so Cool.</h4>");
}
// question 11
document.write("<h2>Calculator</h2>");
let first_num = parseInt(
  prompt("<h4>please input a first number for calculation</h4>")
);
let second_num = parseInt(
  prompt("h4please input second number for calculation</h4>")
);
let operator = prompt("<h4>please enter an arithmetic operator</h4>");

if (operator === "+") {
  document.write(
    "<h4>first-num + second-num =",
    first_num + second_num,
    "</br>" + "</h4>"
  );
}

if (operator === "-") {
  document.write(
    "<h4>first-num - second-num = ",
    first_num - second_num,
    "</br>" + "</h4>"
  );
}
if (operator === "*") {
  document.write(
    "<h4>first-num * second-num = " + first_num * second_num + "</br>" + "</h4>"
  );
}
if (operator === "/") {
  document.write(
    "<h4>first-num / second-num = " + first_num / second_num + "</br>" + "</h4>"
  );
}
if (operator === "%") {
  document.write(
    "<h4>first-num % second-num = " +
      (first_num % second_num) +
      "</br>" +
      "</h4>"
  );
}
