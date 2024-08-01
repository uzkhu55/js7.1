const innerContainer = document.querySelectorAll(".inner-container");
const numbers = document.querySelectorAll(".number");

numbers.forEach((number, index) => {
  number.setAttribute("id", `number-${index}`);
});

numbers.forEach((number) => {
  number.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("a", event.target.id);
  });
});

numbers.forEach((number) => {
  number.addEventListener("dragstart", (event) => {
    event.target.style.backgroundColor = "red";
  });
});

innerContainer.forEach((inner) => {
  inner.addEventListener("dragover", (event) => {
    event.preventDefault();
  });
});
innerContainer.forEach((inner) => {
  inner.addEventListener("drop", (event) => {
    if (inner.children.length === 0) {
      const daragdsan = event.dataTransfer.getData("a");
      const daragd = document.getElementById(daragdsan);
      event.target.appendChild(daragd);
    }
  });
});
