const btn = document.querySelector("#b1");

const div = document.querySelector(".rgb");
document.querySelector("h1").style.textAlign = "center";
let h2 = document.createElement("h2");
btn.onclick = function () {
  //   btn.classList.add("b1");
  //   alert("fuck you");
  let a = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let c = Math.floor(Math.random() * 255);
  let color = `rgb(${a},${b},${c})`;
  document.body.style.backgroundColor = color;
  h2.style.textAlign = "center";
  h2.innerText = color;
  div.append(h2);
};
