"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

//drawTurtle
let speed = 20;
let x = width / 2;
let y = height - 75;

document.onkeydown = getKey;

/**
 * 
 * @param {KeyboardEvent} e 
 */
function getKey(e) {
    console.log(e.key);
    if (e.key == "ArrowUp") {
        y -= speed;
    }
    if (e.key == "ArrowDown") {
        y += speed;
    }

    if (e.key == "ArrowLeft") {
        x -= speed;
    }

    if (e.key == "ArrowRight") {
        x += speed;
    }
}


main();

function main() {
    drawRoad();
    drawTurtle();
    requestAnimationFrame(main);
}

function drawTurtle() {
    context.fillStyle = "darkgreen";
    Utils.fillCircle(x, y, 30);
    Utils.fillCircle(x, y - 40, 20);
    Utils.fillCircle(x - 30, y - 25, 10);
    Utils.fillCircle(x - 30, y + 25, 10);
    Utils.fillCircle(x + 30, y - 25, 10);
    Utils.fillCircle(x + 30, y + 25, 10);
}

function drawRoad() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, width, height);

    for (let i = 0; i < 3; i++) {
        if (i % 2 == 0) {
            context.fillStyle = "gray";
        } else {
            context.fillStyle = "lightGray";
        }
        context.fillRect(0, 200 + i * 150, width, 150);
    }
}