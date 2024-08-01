// const gurvaljin = (a, b, c) => {
//   return a + b + c;
// };

// const result = gurvaljin(1, 2, 3);
// console.log(result);

// const niilber = (a, b, c, d, e) => {
//   const utga = a + b + c + d + e;
//   return parseInt(utga);
// };

// const result = niilber(1, 3, 5, 7, 8.7);
// console.log(result);

// const talbaibagurvaljin = (a, b) => {
//   const talbai = a * b;
//   const peri = (a + b) * 2;

//   return [talbai, peri];
// };
// const result = talbaibagurvaljin(10, 5);
// console.log(result);

// const minute = (a) => {
//   const putga = parseInt(a % 60);
//   const b = (a - putga) / 60;
//   return [putga, b];
// };
// const result = minute(98);
// console.log(result[0], "minute", result[1], "second");

// const ntoo = (a) => {
//   let multi = 1;

//   for (let i = 1; i < a; i++) {
//     if (i % 2 === 0) {
//       multi *= i;
//     }
//   }
//   return multi;
// };
// const result = ntoo(10);
// console.log(result);

const usuh = (a, b, c) => {
  let numbers = [a, b, c];

  numbers.sort((x, y) => x - y);

  return numbers;
};
const result = usuh(5, 1, 7);
console.log(result);

// const fruits = ["apples", "banana", "cherry"];
// fruits.forEach((el, i) => {
//   console.log(el[0]);
// });
