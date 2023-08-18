"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let arraySnakes = [];
let amount = 10;
let speel = true;

spel();
setup();


function setup() {
    context.textAlign = "center";
    context.fillStyle = "white";
    for (let i = 0; i < amount; i++) {
        let objectSnake = {
            space: height / 5,
            x: 40,
            y: 40
        };
        arraySnakes.push(objectSnake);
    }
}

function spel() {
    if (speel == true) {
        draw();
    }
}

function draw() {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);
    
    for (let i = 0; i < arraySnakes.length; i++) {
        let objectSnake = arraySnakes[i];
        drawSnail(objectSnake.x, objectSnake.y + i * 70, objectSnake.space / 3, 1 + i);

        objectSnake.x += Utils.randomNumber(2, 5);

        if (objectSnake.x > width / 2) {
            speel = false;
        }
    }
    requestAnimationFrame(draw);
}

function drawSnail(x, y, sizeY, number) {
    let sizeDiff = sizeY / 4 / 5;
    context.beginPath();
    context.fillStyle = "green";
    context.ellipse(x + sizeY / 24, y + sizeY / 4, sizeY / 2, sizeY / 8, 0, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.ellipse(x + sizeY / 2, y + sizeY / 8, sizeY / 4, sizeY / 8, Math.PI / 4 * 3, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.ellipse(x + sizeY / 2 + sizeY / 16, y - sizeY / 8, sizeY / 16, sizeY / 8, 0, 0, Math.PI * 2);
    context.fill();
    context.strokeStyle = "orange";
    context.fillStyle = "darkorange";
    for (let i = 0; i < 5; i++) {
        context.beginPath();
        context.arc(x, y, sizeY / 3 - sizeDiff * i, 0, Math.PI * 2);
        context.fill();
        context.stroke();
    }
    context.fillStyle = "black";
    context.font = "bold " + sizeY / 5 + "pt Arial";
    context.fillText(number, x, y + sizeY / 8);
}