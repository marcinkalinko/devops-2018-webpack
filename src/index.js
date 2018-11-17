import "./style.css";
import Placeholder from "./placeholder.png";

function component() {
  let element = document.createElement("div");
  element.innerHTML = "Hello webpack";
  element.classList.add("hello");

  let myIcon = new Image();
  myIcon.src = Placeholder;
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
