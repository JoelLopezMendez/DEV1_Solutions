"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    drawBlockyGradient();
    context.strokeRect(50, 50, 300, 300);

}

function drawBlockyGradient() {
    let i = 0;
    while (i <= 300) {
        context.fillStyle = Utils.rgb(i, i, i);
        context.fillRect(50 + i, 50, 50, 300);
        i = i + 50;
    }
}



// draw();

// function draw() {
//     context.lineWidth = 2;
//     drawGradientCircles();
//     context.strokeStyle = "black";
//     context.strokeRect(50, 50, 300, 300);
// }

// function drawGradientCircles() {
//     let i = 0;
//     while (i <= 5) {
//         let gray = i / 5 * 255;
//         context.fillStyle = Utils.rgb(gray, gray, gray);
//         Utils.fillAndStrokeCircle(200, 200, 150 - i * 25);
//         i = i + 1;
//     }
// }