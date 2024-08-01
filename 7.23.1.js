const createPost = document.getElementById("createPost");
const modalContainer = document.getElementById("modalContainer");
const layer = document.getElementById("layer");
const modal = document.getElementsByClassName("modal")[0];
const garah = document.getElementById("garh");
const bji = document.getElementById("buta");

createPost.addEventListener("click", () => {
  modalContainer.style.display = "flex";
});

layer.addEventListener("click", () => {
  modalContainer.style.display = "none";
});

bji.addEventListener("click", () => {
  garah.innerHTML = document.getElementById("input").value;
});
