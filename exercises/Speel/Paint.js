"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

let width = window.innerWidth;
let height = window.innerHeight;

let arraySpeel = [];

setup();
drawBase();
// paint();
window.onmousemove = paintBall;
document.onkeydown = paint;

function setup() {
    for (let i = 0; i < 100; i++) {
        let objetSp = {
            xRand: width - 100,
            yRand: height - 100,
            xPos: width / 2,
            yPos: height / 2,
            size: 30,
            h: 10,
            s: 10,
            l: 50
        };
        arraySpeel.push(objetSp);
    }
}

/**
 * 
 * @param {MouseEvent} e 
 */
function paintBall(e) {
    console.log(e.pageX + " " + e.pageY);
    for (let i = 0; i < arraySpeel.length; i++) {
        let ob = arraySpeel[i];
        context.fillStyle = Utils.hsl(ob.h, ob.s, ob.l);
        Utils.fillCircle(e.pageX, e.pageY, ob.size);
    }
}

/**
 * 
 * @param {KeyboardEvent} e 
 */
function paint(e) {
    console.log(e.code);
    for (let i = 0; i < arraySpeel.length; i++) {
        let ob = arraySpeel[i];

        if (e.key == "ArrowRight") {
            ob.h += 20;
        } else if (e.key == "ArrowLeft") {
            ob.h += 20;
        } else if (e.key == "ArrowDown") {
            ob.s -= 20;
        } else if (e.key == "ArrowDown") {
            ob.s += 20;
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