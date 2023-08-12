/*function pintar(){
    ele.style.backgroundColor = 'yellow'
    }
    const ele = document.getElementById("ele1")
    */

const ele = document.getElementById("ele1");
ele.addEventListener("click", function () {
    ele.style.backgroundColor = "yellow";
});

const element = document.getElementById("element1");
const pintar = (color = "green") => {
    element.style.backgroundColor = color;
};

function colorear() {
    pintar("yellow");
}

element.addEventListener("click", colorear);
