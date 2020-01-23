function changeColor() {
  let color = document.getElementById("color").value;
  let body = document.getElementsByTagName("body").item(0);
  body.style.backgroundColor = color;
}
