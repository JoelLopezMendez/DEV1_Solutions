"use strict";
import context from "../../Scripts/Context.js";
import * as Utils from "../../Scripts/Utils.js";

let width = window.innerWidth;
let height = window.innerHeight;

let arraySnows = [];


setup();
moveSnow();
window.onmousemove = snow;

function setup() {
    for (let i = 0; i < 20; i++) {
        let objectSnow = {
            x: Utils.randomNumber(0, width),
            y: 0,
            rN: Utils.randomNumber(2, 5)
        };
        arraySnows.push(objectSnow);
    }

}

/**
 * 
 * @param {MouseEvent} e 
 */
function snow(e) {
    context.fillStyle = "#33FCFF";
    context.fillRect(0, 0, width, height);

    for (let i = 0; i < arraySnows.length; i++) {
        let objectSnow = arraySnows[i];

        context.strokeStyle = "#ffFCFF";
        context.strokeRect(objectSnow.x + e.pageX, objectSnow.y, 20, 20);
    }
    // requestAnimationFrame(snow);
}

function moveSnow() {
    for (let i = 0; i < arraySnows.length; i++) {
        let objectSnow = arraySnows[i];

        objectSnow.y += objectSnow.rN;
    }
    requestAnimationFrame(moveSnow);
}