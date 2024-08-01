// objectoos duriin keyg ni function parametereer damjuulahad utgiig avdag bolgoh

const book = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
];

const b = book.map((a) => a.title);
console.log(b);

// grade 60 aas ih buyu tentsuu baih humuusiin neriig arrayd hadgal

const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 59 },
  { name: "Charlie", grade: 72 },
];

const morethand = students.filter((suragch) => suragch.grade >= 60);
const dhd = morethand.map((bak) => bak.name);
console.log(dhd);

// price 10 aas ih bga baraanii neriig hevle hervee baihgui bol not found gej hevle  ternary operator ashgilana

const products = [
  { name: "Pen", price: 5 },
  { name: "Notebook", price: 12 },
  { name: "Eraser", price: 1 },
];

const shalg = products.filter((check) => check.price > 10);
const check = shalg.map((dda) => dda.name);

console.log(check);

// anme aa avna map

// function gfg() {
//   let une = shalg;
//   let result = une > 10 ? "Pen" : "bich";

//   console.log(result);
// }
// gfg();

// hun tus buriin ovog neriig ashiglad fullname hevle

// ${}- uurchlugduh bolomjtoi

const people = [
  { firstname: "John", lastName: "Doe" },
  { firstname: "Jane", lastName: "Smith" },
  { firstname: "Emily", lastName: "Jones" },
];

const fullname = people.map(
  (person) => `${person.firstname} ${person.lastName}`
);

console.log(fullname);

// fullname:function () {
// return `FullName is ${person.firstname},${person.lastName}`;
// }
// console.log(people.Fullname);
