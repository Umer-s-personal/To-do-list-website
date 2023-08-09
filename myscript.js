function divofnum(x, y) {
  console.log("Done");
  return x + y;
}
let a = 23.57;
let b = 34.05;
let c = 45.79;

console.log("Sum of a and b", a + b);
console.log("Sum of a and c", a + c);
console.log("Sum of b and c", b + c);
function myfunction() {
  console.log(
    "My name is Muhammad Umer Alam and I am learning java script here and my age is " +
      16
  );
}
myfunction();

const car = { type: "Fiat", model: "500", color: "white" };

// Display some data from the object:

const person = {
  firstname: "Muhammad Umer",
  lastname: "Alam",
};

// Display data from the object:
document.getElementById("demo").innerHTML =
  person.firstname + "" + person.lastname;

function displaytext() {
  return (document.getElementById("msg-task").innerHTML =
    "Your task can't be created right now because this website is under development" +
    "");
}
