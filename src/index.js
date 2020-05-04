import "./a.css";
import x from "./x.js";
import a from "./xm.jpg";
console.log(a);

const div = document.getElementById("test");
div.innerHTML = `<img src="${a}">`;

const button = document.createElement("button");
button.innerText = "懒加载";
button.onclick = () => {
  const promise = import("./lazy");
  promise.then(
    (module) => {
      module.default();
    },
    () => {}
  );
};

div.appendChild(button);
