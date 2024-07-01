const arr = [1, 2, 234, 123, 556, 123, 9, 19, 12, 976];

// ugugdsun massiveiin niilbeiig olj butsaa

// let niilber = 0;
// for (let i = 0; i < arr.length; i++) {
//   niilber += arr[i];
// }

// console.log(niilber);

// // dundjiig ol

// let niilber1 = 0;
// for (let i = 0; i < arr.length; i++) {
//   niilber1 += arr[i];
// }
// let dundaj = niilber1 / arr.length;
// console.log(dundaj);

// // hamgiin ih toog ol

// let maxa = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (maxa < arr[i]) {
//     maxa = arr[i];
//   }
// }
// console.log(maxa);

// urvuug butsaa Hello

// const a = "hello";
// let urvuu = "";
// for (let i = a.length - 1; i >= 0; i--) {
//   urvuu += a[i];
// }
// console.log(urvuu);

// // davhardaaguigee shalga

let ab = "hello";

for (let i = 0; i <= ab.length; i++) {
  for (let j = i + 1; j <= ab.length; j++) {
    if (ab[i] == ab[j]) {
      console.log(ab[i], ab[j]);
    }
  }
}

// massive iin ogtoltsol olj butsaa

let a = [1, 2, 234, 123, 556, 123, 9, 19, 12, 976];
let b = [99, 123, 544, 998];
let ogtoltsol = "";

for (let i = 0; i <= a.length; i++) {
  for (let j = 0; j <= b.length; j++) {
    if (a[i] == b[j]) {
      console.log(a[i], b[j]);
      break;
    }
  }
}

// tegsh too

// let a = 10;

// for (let i = 0; i < a; i++) {
//   if(i += a % 2;)
// }
// console.log(a);
// let n = 20;
// let a = 0;

// for (let i = 1; i < n; i++) {
//   if (i % 2 == 0) {
//     a += 1;
//   }
// }
// console.log(a);
