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
    var user = document.getElementById("user").value;
    getUserdata(user)
        .then((userdata) => {
            loc = getLoc(userdata.did);
            px = loc.x;
            py = loc.y;
            repaint();
        });
}

function getUserdata(user) {
    return new Promise((resolve) => {
        var url = "http://localhost/api/userdata?user=" + user;
        var xhr = new XMLHttpRequest();

        xhr.open('GET', url);
        xhr.send();

        xhr.onload = function() {
            var userdata = JSON.parse(xhr.responseText);
            console.log(userdata);
            resolve(userdata);
        }
    });
}

function getLoc(did) {
    var did_s = String(did).match(/.{2}/g);
    console.log(did_s)
    var loc = {
        f: parseInt(did_s[0]),
        x: parseInt(did_s[1]),
        y: parseInt(did_s[2])
    }
    console.log(loc);
    return loc;
}

function up(){ mykeydown({keyCode:38}); }
function down(){ mykeydown({keyCode:40}); }
function left(){ mykeydown({keyCode:37}); }
function right(){ mykeydown({keyCode:39}); }

function mykeydown(a) {
    var dx = px, dy = py;
    switch (a.keyCode) {
        case 37: dx--;
            break;
        case 38: dy--;
            break;
        case 39: dx++;
            break;
        case 40: dy++;
            break;
    }

    if (data[dy][dx] == 0) {
        px = dx;
        py = dy;
    } else if (data[dy][dx] == 1) {
        request(1, dx, dy);
        px = dx;
        py = dy;
    }
    repaint();
}

function request(f, x, y){
    var form = document.createElement('form');
    var did = document.createElement('input');

    form.method = 'post';
    form.action = '/dungeon/room';
    form.id = 'room'

    did.type = 'hidden';
    did.name = 'did';
    did.value = '010101';

    form.appendChild(did);
    document.body.appendChild(form);

    form.submit();
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
