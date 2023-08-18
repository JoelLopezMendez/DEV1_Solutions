"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

let width = window.innerWidth;
let height = window.innerHeight;

let arraySpeel = [];
let xPos1 = width / 2 - 120;
let xSpeed = 2;
let ySpeed = 2;
let xPos = Utils.randomNumber(50, width - 100);
let yPos = height / 8;

document.onkeydown = drawBarra;

setup();

function setup() {
    for (let i = 0; i < 100; i++) {
        let objetSp = {
            xRand: width - 100,
            yRand: height - 100,
            size: 200
        };
        arraySpeel.push(objetSp);
    }
    drawBase();
    drawPelota();


}

/**
 * 
 * @param {KeyboardEvent} eventData 
 */
function drawBarra(eventData) {
    console.log(eventData.key);
    if (eventData.key == "ArrowRight") {
        xPos1 += 10;
    }
    if (eventData.key == "ArrowLeft") {
        xPos1 -= 10;
    }
    context.fillStyle = "black";
    context.fillRect(50, 50, width - 100, height - 100);
    context.strokeRect(xPos1, height - 80, 200, 20);
}

function drawPelota() {
    context.fillStyle = "white";
    Utils.fillCircle(xPos, yPos, 20);

    if ((xPos > xPos1 && xPos > xPos1 + 100) && (yPos > xPos1 && yPos > xPos1 - 100)) {
        ySpeed *= -1;
    }
    if (yPos < 70) {
        ySpeed *= -1;
    }

    if (xPos > width - 75 || xPos < 75) {
        xSpeed *= -1;
    }

    xPos += xSpeed;
    yPos += ySpeed;

    requestAnimationFrame(drawPelota);
}

function drawBase() {
    context.fillRect(0, 0, width, height);
    for (let i = 0; i < arraySpeel.length; i++) {
        let objetSp = arraySpeel[i];

        context.lineWidth = 5;
        context.strokeStyle = "white";
        context.strokeRect(50, 50, objetSp.xRand, objetSp.yRand);
    }
}