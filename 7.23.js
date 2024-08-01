const prevous = document.getElementById("b");
const zurag = document.getElementById("imgid");
const next = document.getElementById("d");

let catdch = 1;
const arr = ["suka.jpg", "idi.png", "blyat.jpeg"];
zurag.src = arr[catdch];

prevous.addEventListener("click", () => {
  if (catdch == 0) {
    catdch = arr.length - 3;
    prevous.style.display = "none";
  } else {
    catdch--;
    next.style.display = "block";
  }
  zurag.src = arr[catdch];
});

next.addEventListener("click", () => {
  if (catdch == arr.length - 2) {
    if (catdch == arr.length - 1) {
    }
    catdch = arr.length - 1;
    prevous.style.display = "block";
    next.style.display = "none";
  } else {
    catdch++;
  }
  zurag.src = arr[catdch];
});
