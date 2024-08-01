// const numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map((numba) => numba * numba);

// console.log(squares);

const prices = [100, 200, 300, 400];

const huvi = prices.map((price) => (price / 100) * 20 + price);

console.log(huvi);

// const prices = [100, 200, 300, 400];

// const huvi = prices.map((price) => price - (price / 100) * 10);

// console.log(huvi);

// const numbers = [1, 2, 3, 4, 5];

// const finda = numbers.findIndex((too) => too === 3);
// console.log(finda);

// const numbers = [1, 2, 3, 4, 5];

// const finda = numbers.filter ((too) => too !== 3);
// console.log(finda);

// const numbers = [1, 2, 3, 4, 5];

// const dund = numbers.findIndex(
//   (too, index) => index === Math.floor(numbers.length / 2) + 1
// );
// console.log(dund * 10);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const sond = numbers.filter((oloh) => oloh % 2 !== 0);
// console.log(sond);

// const names = ["John", "Jane", "James", "Alice", "Bob"];

// const jaa = names.filter((joloh) => joloh[0] === "J");
// console.log(jaa);

const size = [1, 1, 1, 1, 1, 1, 1, 1];
const size2 = [];

size.forEach((coffee) => {
  if (coffee % 2 === 1) {
    size2.push("#*");
  }
});

console.log(size2);
