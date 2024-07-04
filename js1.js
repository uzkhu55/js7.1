// uggdsun gurvaljnii perimeteriig ol

// let a = 10;
// let b = 10;
// let c = 20;
// let d = a + b + c;
// console.log(d);

// бүхэл тооны нийлбэрийг ол

// let a = 1;
// let b = 3;
// let c = 5;
// let d = 7;
// let e = 8.7;

// let ab = a + b + c + d + e;
// let ac = ab % 1;
// let bc = ab - ac;
// console.log(bc);

// ugudsun tegsh untsugtiin talbai ba perimetr ol

// let a = 10;
// let b = 5;

// let c = a * b;
// let d = (a + b) * 2;

// console.log(c, d);

// ugudsun sekund min bolgo

// let a = 98;

// let b = a % 60;

// console.log("sek", b);

// let c = (a - b) / 60;

// console.log("min", c);

// ugudsun sek tsag minut sek bolgo

// let a = 1297;

// let b = a % 60;

// console.log("Second", b);

// let c = (a - b) / 60;

// console.log("Minute", c);

// let d = c / 60;

// console.log("Hour", d);

// 2

// let a = 79425;

// let b = parseInt(a / 3600);

// console.log("Hour", b);

// let e = b * 3600;
// let ee = a - e;

// let c = parseInt(ee / 60);

// console.log("Minute", c);

// let eee = c * 60;
// let niit = a - (e + eee);

// console.log("Second", niit);

// ugugdsun sek ruu shiljuul

// let minut = 875;
// let sec = 88;

// let a = minut * 60;
// let b = a + sec;
// console.log(b);

// ugugdsun sek ruu shiljuul

// let hour = 83;
// let min = 84;
// let sec = 85;

// let a = hour * 360;
// let b = min * 60;
// let c = a + b + sec;

// console.log(c);

// ugudsun tsagiig honog tsagt shiljuul

// let ugugdsun = 38;

// let a = parseInt(ugugdsun / 24);
// console.log("Day", a);

// let b = ugugdsun % 24;
// console.log("Hours", b);

// ugugdsun honog tsagiig shiljuul

// let uhonog = 4;
// let utsag = 40;

// let a = uhonog * 24;
// let b = a + utsag;
// console.log(b);

// jil sar ruu shiljuul

// let usar = 106;

// let a = parseInt(106 / 12);
// console.log("Years", a);

// let b = 106 % 12;
// console.log("Months", b);

// bagiig ol

// let a = 11;
// let b = 9;
// let c = 4;
// let d = 5;

// let e = Math.min(a, b, c, d);

// console.log(e, "smallest");

// console.log("smallest", Math.min(2, 9, 4, 5));

// toonii 5 aas baga toonuudiin urjver ol

// let a = 2;
// let b = 9;
// let c = 4;
// let d = 3;

// let e = 1;

// let i = 0;

// if (a < 5) {
//   e *= a;
//   i++;
// }
// if (b < 5) {
//   e *= b;
//   i++;
// }
// if (c < 5) {
//   e *= c;
//   i++;
// }
// if (d < 5) {
//   e *= d;
//   i++;
// }
// if (i >= 2) {
//   console.log(e);
// } else {
//   console.log(0);
// }

// toonii 5 aas ih toonuudiin urjver ol

let a = 11;
let b = 9;
let c = 4;
let d = 3;

let urjver = 1;
let count = 0;

if (a > 5) {
  urjver *= a;
  count++;
}
if (b > 5) {
  urjver *= b;
  count++;
}
if (c > 5) {
  ``;
  urjver *= c;
  count++;
}
if (d > 5) {
  urjver *= d;
  count++;
}
if (count >= 2) {
  console.log(urjver);
  ``;
} else {
  console.log(0);
}
