let canvas = document.getElementById("my_canvas");
let context = canvas.getcontext("2d")

const speed = 4;
let position =0;
let movespeed = speed;
let radius = 40;

function moveball() {
    if(position + radius > 640) {
        movespeed = -speed
    } else if(position -radius < 0){
        movespeed =speed;
    }
    position += movespeed;
}