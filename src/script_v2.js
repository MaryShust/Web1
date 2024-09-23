"use strict";

let x, y, r;

window.onload = function () {
  function setOnClick(element) {
    element.onclick = function () {
      x = this.value;
      buttons.forEach(function (element) {
        element.style.boxShadow = "";
        element.style.transform = "";
      });
      this.style.boxShadow = "0 0 40px 5px #f41c52";
      this.style.transform = "scale(1.05)";
    }
  }

  let buttons = document.querySelectorAll("input[name=x-value]");
  buttons.forEach(setOnClick);

  document.getElementById("outputContainer").innerHTML = localStorage.getItem("session");
};

function setPointer(serverAnswer) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(serverAnswer, "text/html");
  const row = doc.querySelectorAll('tr')[1];
  if (!row) return;

  const cells = row.getElementsByTagName("td");
  const last = cells[3];

  let pointer = document.getElementById("pointer");

  pointer.style.visibility = "visible";
  pointer.style.fill = last.innerHTML.includes("success") ? "#09a53d" : "#a50909";

  pointer.setAttribute("cx", x * 60 * 2 / r + 150);
  pointer.setAttribute("cy", -y * 60 * 2 / r + 150);
}