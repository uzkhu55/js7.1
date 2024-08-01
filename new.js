const items = [
  { name: "item 1", price: 30 },
  { name: "item 2", price: 20 },
  { name: "item 3", price: 50 },
];

const allprices = items.reduce((sum, item) => sum + item.price, 0);

console.log(allprices);

// const books = [
//   { title: "Book 1", author: "Author 1" },
//   { name: "Book 2", author: "Author 2" },
//   { name: "Book 3", author: "Author 3" },
// ];

// const a = books.map((author) => author.author);

// console.log(a);

// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Author 3" },
// ];

// const b = users.find((dda) => dda.name === "Bob");

// console.log(b);

// // bob gsn nertei object ol

const book = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
];

// objectoos duriin keyg ni function parametereer damjuulahad utgiig avdag bolgoh

const b = book.map((a) => a.title);
console.log(b);
w;
