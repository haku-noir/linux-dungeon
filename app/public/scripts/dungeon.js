"use strict";
var data = [
    [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
    [6, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 6],
    [6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 6],
    [6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 6],
    [6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 6],
    [6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 6],
    [6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 6],
    [6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 6],
    [6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6],
    [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
];
var gc, px = 12, py = 8;


function init() {
    gc = document.getElementById("floor").getContext("2d");
    onkeydown = mykeydown;
    repaint();
}

function up(){ mykeydown({keyCode:38}); }
function down(){ mykeydown({keyCode:40}); }
function left(){ mykeydown({keyCode:37}); }
function right(){ mykeydown({keyCode:39}); }

function mykeydown(a) {
    var dx0 = px, dx1 = px, dy0 = py, dy1 = py;
    switch (a.keyCode) {
        case 37: dx0--; dx1-=2;
            break;
        case 38: dy0--; dy1-=2;
            break;
        case 39: dx0++; dx1+=2;
            break;
        case 40: dy0++; dy1+=2;
            break;
    }

    if ((data[dy0][dx0] & 0x2) == 0) { 
        px = dx0;
        py = dy0;
    } else if ((data[dy0][dx0] & 0x6) == 2) { 
        if ((data[dy1][dx1] & 0x2) == 0) {               
            data[dy0][dx0] ^= 2;    
            data[dy1][dx1] |= 2;    
            px = dx0;
            py = dy0;
        }
}
    repaint();
}

function repaint() {
    gc.fillStyle = "black";
    gc.fillRect(0, 0, 1000, 500);

    for (var y = 0 ; y < data.length ; y++) {
        for (var x = 0 ; x < data[y].length ; x++) {
            if (data[y][x] == 6) {
                gc.drawImage(kabe, x * 50, y * 50, 50, 50);
            }
            if (data[y][x] == 1) {
                gc.drawImage(monn, x*50, y*50, 50, 50);
            }
        }
    }
    gc.drawImage(yuusya,px * 50, py * 50, 50, 50);
}




