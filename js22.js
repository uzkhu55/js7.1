// Huvirgah  "2020 Toyota Coralla" gedeg shig

const movie = {
  title: "Inception",
  director: "Christopher Nolan",
  year: 2010,
};

// const huvirgah = Object.values(movie);

// console.log(huvirgah);

const huvirgah = `${movie.title} ${movie.director} ${movie.year}`;

console.log(huvirgah);

const album = {
  title: "Abbey Road",
  artist: "The Beatles",
  releaseYear: 1969,
};

const album1 = `${album.title} ${album.artist} ${album.releaseYear}`;

console.log(album1);

const album2 = {
  title: "Thriller",
  artist: "Michael Jackson",
  releaseYear: 1982,
  genre: "Pop",
};

const album3 = `${album2.title} ${album2.artist} ${album2.releaseYear} ${album2.genre}`;

console.log(album3);

// Grade 60aas ih buyu tentsuu baih ueiin humuusiin neriig arrayd hadgal gedeg shig
// Salary 50000 buyu tentsuu
const employees = [
  { name: "John", salary: 50000 },
  { name: "Jane", salary: 60000 },
  { name: "Jim", salary: 45000 },
];

const ajilchid = employees.filter((a) => a.salary >= 50000);

console.log(ajilchid);

// Price 1000 aas ihiig
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 400 },
];

const ihiig = products.filter((b) => b.price >= 1000);

console.log(ihiig);

// title ni type ni number baival ter objectiig ol
const books = [
  { title: 1984, author: "George Orwell" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
];

const titlenumber = books.filter((c) => typeof c.title === "number");

console.log(titlenumber);

// Price 10 aas ih baigab baraanii nerig hevle. Hervee baihgui bol not found gej hevle. Ternary operator ashiglana gedeg bodlogo shig
// Price 150 aas ih iig
const gadgets = [
  { name: "Smartphone", price: 699 },
  { name: "Smartwatch", price: 199 },
  { name: "Bluetooth Speaker", price: 49 },
];
const ner = () => {
  const shalgah = gadgets
    .filter(({ price }) => price > 150)
    .map(({ name }) => name);

  return shalgah.length ? shalgah : "Not Found";
};

console.log(ner());

// Price 2 ih buyu tentsuu

const groceries = [
  { name: "Apple", price: 1 },
  { name: "Milk", price: 3 },
  { name: "Bread", price: 2 },
];
const suman = (shine) => {
  const shalgah1 = shine
    .filter(({ price }) => price >= 2)
    .map(({ name }) => name);
  return shalgah1.length ? shalgah1 : "HUD";
};

console.log(suman(groceries));

// Price 100 as ih
const furniture = [
  { name: "Chair", price: 45 },
  { name: "Table", price: 150 },
  { name: "Lamp", price: 25 },
];

const sumanpizda = (suralt) => {
  const jinhene = suralt
    .filter(({ price }) => price > 100)
    .map(({ name }) => name);
  return jinhene.length ? jinhene : "sda";
};

console.log(sumanpizda(furniture));

// Hun tus buriin  ovog neriig ashiglaad fullname iig ni hevle gedeg shig
const authors = [
  { firstName: "Mark", lastName: "Twain" },
  { firstName: "Ernest", lastName: "Hemingway" },
  { firstName: "Jane", lastName: "Austen" },
];

const fullname = authors.map(
  ({ firstName, lastName }) => `${firstName} ${lastName}`
);

console.log(fullname);

const students = [
  { firstName: "Alice", lastName: "Johnson" },
  { firstName: "Bob", lastName: "Brown" },
  { firstName: "Carol", lastName: "Davis" },
];

const fullnames = students.map(
  ({ firstName, lastName }) => `${firstName} ${lastName}`
);
console.log(fullnames);

const musicians = [
  { firstName: "Ludwig", lastName: "Beethoven" },
  { firstName: "Wolfgang", lastName: "Mozart" },
  { firstName: "Johann", lastName: "Bach" },
];

const fulname = musicians.map(
  ({ firstName, lastName }) => `${firstName} ${lastName}`
);

console.log(fulname);

// Zohiol tus buriig hden jiliin omno zohiogdoj baisniig ni hevle. Hugatsaag ni haruulsan shine keyless update hiine gedeg shig
const movies = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Dark Knight", year: 2008 },
];
const albums = [
  { title: "Abbey Road", year: 1969 },
  { title: "The Wall", year: 1979 },
  { title: "Thriller", year: 1982 },
];
const plays = [
  { title: "Hamlet", year: 1603 },
  { title: "A Midsummer Night's Dream", year: 1595 },
  { title: "Death of a Salesman", year: 1949 },
];

const dda = (bech) => {
  const real = bech.map((item) => {
    return {
      yearCreated: 2024 - item.year,
      ...item,
    };
  });
  return real;
};

console.log(dda(movies));

// Duriin id aar ni completed iig update hiih function bich

const events = [
  { id: 1, name: "Conference", attended: true },
  { id: 2, name: "Workshop", attended: false },
  { id: 3, name: "Meetup", attended: false },
];

// const appointments = [
//   { id: 1, description: "Dentist appointment", attended: true },
//   { id: 2, description: "Team meeting", attended: false },
//   { id: 3, description: "Lunch with a friend", attended: false },
// ];

const update = (hor) => {
  const updated = events.find(({ id }) => id === hor);
  if (!updated) return "Not found";

  updated.attended = true;

  return events;
};

console.log(update(2));
