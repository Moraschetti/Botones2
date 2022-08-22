let btns = document.querySelectorAll("button");

btns.forEach((boton) => {
  boton.addEventListener("click", mostrarBtn);
});
function mostrarBtn() {
  document.getElementById("imagen").classList.toggle("clase");
}
