import { coloresCSS } from "./data.js";

let root = document.querySelector("#root"); 

coloresCSS.forEach((cada_elemento)=>{
    let div = document.createElement('div');
    div.className = cada_elemento.color;
    div.textContent = cada_elemento.color;

    root.appendChild(div);

});