"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

let width = window.innerWidth;
let height = window.innerHeight;


let squares = [];
let rNumber = [1, 2, 3, 4];

let size = 50;
let x = Utils.randomNumber(size, width - size);
let y = Utils.randomNumber(size, height - size);
let xSpeed = 5;
let ySpeed = 5;

document.getElementById("draw").onclick = numner;

function update() {
    // drawSquare();
    drawRect();

    requestAnimationFrame(update);
}

function setup() {
    for (let i = 0; i < 1000; i++) {
        let square = {
            rN: Utils.randomNumber(1, 4),
            x: Utils.randomNumber(0, width),
            y: Utils.randomNumber(0, height),
            triangulo: function () {
                context.beginPath();
                context.moveTo(width / 4 * 3 + 20, height / 4 * 3 - 50);
                context.lineTo(width / 4 * 3 + 100, height / 4 * 3 + 75);
                context.lineTo(width / 4 * 3 - 50, height / 4 * 3 + 75);
                context.lineTo(width / 4 * 3 + 30, height / 4 * 3 - 50);
                context.stroke();
            },
            drawSquares: function () {
                if (this.x < width / 2 && this.y < height / 2) {
                    context.fillStyle = 'red';
                } else if (this.y > height / 2 && this.x > width / 2) {
                    context.fillStyle = 'blue';
                } else if (this.x > width / 2 && this.y < height / 2) {
                    context.fillStyle = "green";
                } else if (this.x < width / 2 && this.y > height / 2) {
                    context.fillStyle = 'yellow';
                }
                context.fillRect(this.x, this.y, 20, 20);
            }
        };
        squares.push(square);
    }
}

function drawRect() {
    context.fillRect(x, y, size, size);

    if (x > width - size || x < 0) {
        xSpeed *= -1;
    }
    if (y < 0 || y > height - size) {
        ySpeed *= -1;
    }

    x += xSpeed;
    y -= ySpeed;
}

function drawSquare() {
    context.fillStyle = "orange";
    context.fillRect(0, 0, width, height);

    for (let i = 0; i < squares.length; i++) {
        let square = squares[i];

        square.drawSquares();
    }
    context.fillStyle = "black";
    Utils.fillCircle(width / 2, height / 2, 75);

    // document.getElementById("render").onclick = numner;
}

function numner() {
    context.lineWidth = 20;

    let chooseNumners = rNumber[Utils.randomNumber(0, 3)];
    console.log(chooseNumners = rNumber[Utils.randomNumber(0, 3)]);

    for (let i = 0; i < rNumber.length; i++) {
        // drawSquare();
        let square = squares[i];

        context.fillStyle = "red";
        context.font = "bold " + 100 + "pt Arial";
        context.fillText(chooseNumners, width / 2 - 40, height / 2 + 45);
        if (chooseNumners == 1) {
            context.strokeRect(width / 8, height / 6, 140, 140);
        } else if (chooseNumners == 2) {
            Utils.strokeCircle(width / 4 * 3, height / 4, 75);
        } else if (chooseNumners == 3) {
            Utils.strokeEllipse(height / 5, height / 5 * 4, 100, 50);
        } else if (chooseNumners == 4) {
            square.triangulo();
        }
    }
    context.fillStyle = 'white';
}

setup();
update();
drawSquare();
numner();