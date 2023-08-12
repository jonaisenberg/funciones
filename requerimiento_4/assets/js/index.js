let ele = document.getElementById("unico");
let ele1 = document.getElementById("unico1");
let ele2 = document.getElementById("unico2");
let ele3 = document.getElementById("unico3");

ele.addEventListener("click", function () {
    ele.style.backgroundColor = "black";
});

ele1.addEventListener("click", function () {
    ele1.style.backgroundColor = "black";
});

ele2.addEventListener("click", function () {
    ele2.style.backgroundColor = "black";
});

ele3.addEventListener("click", function () {
    ele3.style.backgroundColor = "black";
});

const colores = document.getElementById("key");
const crearDiv = (color) => {
    const agregar = document.querySelector("body");
    const añadir = document.createElement("div");
    añadir.style.width = "200px";
    añadir.style.height = "200px";
    añadir.style.backgroundColor = color;
    agregar.appendChild(añadir);
};

document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "a":
            colores.style.backgroundColor = "pink";
            break;
        case "s":
            colores.style.backgroundColor = "orange";
            break;
        case "d":
            colores.style.backgroundColor = "aqua";
            break;
        case "q":
            crearDiv("purple");
            break;
        case "w":
            crearDiv("grey");
            break;
        case "e":
            crearDiv("brown");
            break;
    }
});
