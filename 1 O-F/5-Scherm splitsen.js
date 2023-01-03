"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawRandomCircles();

function drawRandomCircles() {

    context.fillRect(0, 0, width, height);

    for (let i = 0; i < 10000; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;

        let distance = Utils.calculateDistance(x, y, width / 2, height / 2);
        if (distance < 250) {
            //los circulos no salen de esta distacia de 250
            if (y < height / 2 && x < width / 2) {
                context.fillStyle = "red";
            } else if (y < height / 2 && x > width / 2) {
                context.fillStyle = "yellow";
            } else if (y > height / 2 && x < width / 2) {
                context.fillStyle = "green";
            } else {
                context.fillStyle = "blue";
            }
            Utils.fillCircle(x, y, 5);
        }
    }
}


// splistIn3();

// function splistIn3() {
//     context.fillRect(0, 0, width, height);
//     for (let i = 0; i < 100000; i++) {
//         let x = Math.random() * width;
//         let y = Math.random() * height;
//         if (y > height / 3 * 2) {
//             context.fillStyle = "blue";
//         } else if (y > height / 3) {
//             context.fillStyle = "white";
//         } else {
//             context.fillStyle = "red";
//         }
//         Utils.fillCircle(x, y, 2);
//     }
// }



// splistIn4kant();

// function splistIn4kant() {
//     context.fillRect(0, 0, width, height);

//     for (let i = 0; i < 100000; i++) {
//         let x = Math.random() * width;
//         let y = Math.random() * height;
//         if (x < width / 4 * 3 && y < height / 4 * 3 && x > width / 4 && y > height / 4) {
//             context.fillStyle = "white";
//         } else {
//             context.fillStyle = "blue";
//         }
//         Utils.fillCircle(x, y, 2);
//     }
// }