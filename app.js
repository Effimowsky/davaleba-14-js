// Davaleba-1

const Array = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < Array.length; i++) {
  sum += Array[i];
}
console.log(sum);

// Davaleba-2

const person = [
  {
    Name: "Omar",
    Age: 26,
    Adress: "Tbilisi",
  },
];

// Davaleba-3

console.log(
  `My name is:` + person[0].Name,
  `My age is:` + person[0].Age,
  `And my adress is:` + person[0].Adress
);

// Davalebs-4

if (person[0].Age < 19) {
  console.log("I am teenager");
} else if (person[0].Age === 19) {
  console.log("I am 19 years old");
} else {
  console.log("I am adult");
}
