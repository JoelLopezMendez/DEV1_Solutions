"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

let width = window.innerWidth;
let height = window.innerHeight;

let arrayBalls = [];

setup();
window.onmousemove = ball;

function setup() {
    for (let i = 0; i < 100; i++) {
        let objectBall = {
            amount: []
        };
        arrayBalls.push(objectBall);
    }
}

/**
 * 
 * @param {MouseEvent} e 
 */
function ball(e) {
    for (let i = 0; i < arrayBalls.length; i++) {
        let objectBall = arrayBalls[i];
        if (objectBall.amount > 10) {
            // objectBall.amount.shift();
            context.fillStyle = "black";
            context.fillRect(0, 0, width, height);
        }

        context.fillStyle = "red";
        Utils.fillCircle(e.pageX, e.pageY, 20);
    }
}