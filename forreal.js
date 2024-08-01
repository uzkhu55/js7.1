const a = document.getElementById("b");
a.addEventListener("click", () => {
  const too = document.getElementById("c").innerHTML;
  document.getElementById("c").innerHTML = Number(too) + 1;
});

// const b = document.getElementById("d");
// b.addEventListener("mousein", () => {});

const b = document.getElementById("tagaa");

b.addEventListener("click", () => {
  const first = document.getElementById("first");
  const second = document.getElementById("second");
  const a = document.getElementById("bvl");
  switch (a.value) {
    case "-":
      document.getElementById("c").innerHTML = first.value - second.value;
      break;
    case "+":
      document.getElementById("c").innerHTML =
        parseInt(first.value) + parseInt(second.value);
      break;
    case "*":
      document.getElementById("c").innerHTML = first.value * second.value;
      break;
    case "/":
      document.getElementById("c").innerHTML = first.value / second.value;
      break;
  }
});
// c.addEventListener("click", () => {
//   const first = document.getElementById("first");
//   const second = document.getElementById("second");
//   document.getElementById("nemelt").innerHTML = ;
// });
