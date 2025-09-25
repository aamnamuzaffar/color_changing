const body = document.getElementById("b");
const p = document.getElementById("p");

body.addEventListener("click", function () {
  const r = Math.trunc(Math.random() * 225 + 1);
  const g = Math.trunc(Math.random() * 225 + 1);
  const b = Math.trunc(Math.random() * 225 + 1);

  body.style.backgroundColor = `rgb(${r},${g},${b}`;
  p.style.display = "none";
});
