"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

let width = window.innerWidth;
let height = window.innerHeight;

let arraySpeel = [];

setup();
drawBase();
// snake();
document.onkeydown = snake;

function setup() {
    for (let i = 0; i < 100; i++) {
        let objetSp = {
            xRand: width - 100,
            yRand: height - 100,
            xSnake: width / 2,
            ySnake: height / 2,
            size: 30
        };
        arraySpeel.push(objetSp);
    }
}

/**
 * 
 * @param {KeyboardEvent} e 
 */
function snake(e) {
    console.log(e.key);
    for (let i = 0; i < arraySpeel.length; i++) {
        let objetSp = arraySpeel[i];
        for (let i = 0; i < 10; i++) {
            context.fillStyle = "green";
            context.fillRect(objetSp.xSnake, objetSp.ySnake, objetSp.size, objetSp.size);

        }
        if (e.key == "ArrowRight") {
            objetSp.xSnake += 5;
        } else if (e.key == "ArrowLeft") {
            objetSp.xSnake -= 5;
        } else if (e.key == "ArrowDown") {
            objetSp.ySnake += 5;
        } else if (e.key == "ArrowUp") {
            objetSp.ySnake -= 5;
        }
    }
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