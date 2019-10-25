var data = [
    [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,],
    [6, 2, 6, 6, 6, 6, 6, 6, 0, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 1, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 0, 1, 6, 0, 0, 0, 3, 3, 3, 3, 3, 3, 6,],
    [6, 0, 0, 6, 6, 6, 6, 6, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 0, 0, 6, 0, 0, 0, 3, 3, 3, 3, 3, 3, 6,],
    [6, 0, 0, 6, 6, 6, 6, 6, 0, 0, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 0, 0, 6, 6, 6, 0, 0, 6, 0, 0, 0, 3, 3, 3, 3, 3, 3, 6,],
    [6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 2, 6, 6, 6, 6, 0, 0, 6, 0, 0, 0, 3, 3, 3, 3, 3, 3, 6,],
    [6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 0, 0, 0, 0, 0, 0, 6, 6, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 6, 0, 0, 0, 3, 3, 3, 3, 3, 3, 6,],
    [6, 0, 0, 6, 6, 6, 6, 6, 0, 0, 6, 6, 2, 0, 0, 0, 0, 0, 0, 6, 6, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 3, 3, 3, 3, 3, 3, 6,],
    [6, 0, 0, 6, 6, 6, 6, 2, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 3, 3, 3, 3, 3, 3, 6,],
    [6, 0, 0, 6, 6, 6, 6, 6, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 0, 0, 0, 6, 6, 0, 0, 0, 6, 6, 0, 0, 0, 3, 3, 0, 0, 0, 3, 6,],
    [6, 0, 0, 6, 6, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 6, 6, 0, 0, 6, 6, 6, 0, 0, 0, 0, 1, 0, 0, 0, 3, 0, 0, 0, 0, 3, 6,],
    [6, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 0, 0, 6, 6, 0, 0, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 0, 3, 6,],
    [6, 0, 0, 6, 6, 6, 6, 6, 0, 0, 6, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 6, 6, 0, 0, 0, 6, 6, 6, 6, 1, 6, 6, 0, 0, 0, 6, 6, 0, 0, 0, 6, 6, 0, 0, 0, 3, 0, 0, 0, 0, 3, 6,],
    [6, 0, 0, 6, 6, 6, 6, 6, 0, 0, 6, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 6, 6, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 3, 0, 0, 0, 0, 3, 6,],
    [6, 0, 0, 6, 6, 6, 6, 6, 0, 0, 6, 0, 0, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 6, 6, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 3, 3, 0, 0, 0, 3, 6,],
    [6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 6, 6, 6, 6, 6, 6, 0, 0, 0, 6, 6, 6, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 6, 0, 0, 6, 0, 6, 0, 0, 0, 3, 3, 3, 3, 5, 3, 6,],
    [6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 6, 6, 6, 6, 6, 0, 0, 0, 6, 6, 6, 6, 0, 0, 6, 6, 6, 6, 1, 6, 6, 6, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 3, 3, 3, 3, 5, 3, 6,],
    [6, 0, 0, 6, 6, 6, 6, 6, 0, 1, 6, 0, 0, 6, 6, 6, 6, 0, 0, 0, 6, 6, 6, 6, 6, 0, 0, 6, 6, 6, 0, 0, 6, 6, 6, 0, 0, 6, 2, 6, 6, 6, 2, 6, 6, 0, 0, 0, 3, 3, 3, 3, 5, 3, 6,],
    [6, 0, 0, 2, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 0, 0, 6, 6, 6, 0, 0, 6, 6, 6, 0, 0, 6, 0, 0, 6, 6, 0, 6, 6, 0, 0, 0, 3, 3, 3, 5, 5, 3, 6,],
    [6, 0, 0, 0, 6, 6, 6, 6, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 0, 0, 6, 6, 6, 0, 0, 6, 6, 6, 0, 0, 6, 0, 0, 6, 6, 0, 6, 6, 0, 0, 0, 3, 3, 3, 5, 3, 3, 6,],
    [6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 6, 0, 0, 6, 6, 0, 6, 6, 0, 0, 0, 3, 5, 5, 5, 3, 3, 6,],
    [6, 2, 0, 0, 0, 0, 0, 0, 0, 1, 6, 0, 0, 2, 6, 6, 6, 6, 6, 6, 6, 0, 1, 6, 6, 0, 0, 0, 0, 0, 0, 0, 6, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 2, 0, 0, 0, 5, 5, 3, 3, 3, 3, 6,],
    [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,],
];
var gc, px, py;
const r = 2;
var stop = false;

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
    var loc = {
        f: parseInt(did_s[0]),
        x: parseInt(did_s[1]),
        y: parseInt(did_s[2])
    }
    return loc;
}

function up(){ mykeydown({keyCode:38}); }
function down(){ mykeydown({keyCode:40}); }
function left(){ mykeydown({keyCode:37}); }
function right(){ mykeydown({keyCode:39}); }

function mykeydown(a) {
    if(stop) return;

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

    if (data[dy][dx] == 0 || data[dy][dx] == 5 ) {
        px = dx;
        py = dy;
    } if (data[dy][dx] == 1) {
        if(window.confirm('部屋に入りますか？')){
            enterRoom(changeDid(1, dx, dy));
                px = dx;
                py = dy;
        }
    } else if (data[dy][dx] == 2) {
        getTreasure(changeDid(1, dx, dy))
            .then((treasure) => {
                stop = true;

                $("body").append('<div id="modal-overlay-treasure-get"></div>');
                $("#modal-overlay-treasure-get").fadeIn("slow");
                if(treasure){
                    $("#modal-content-treasure-get").html(`
                        <div align="center">
                            <h2>${treasure.title}</h2>
                            <p>${treasure.val}</p>
                        </div>
                    `);
                }else{
                    $("#modal-content-treasure-get").html(`
                        <div align="center">
                            <h2>空っぽ</h2>
                        </div>
                    `);
                }
                $("#modal-content-treasure-get").fadeIn("slow");

                $("#modal-overlay-treasure-get,#modal-close-treasure-get").unbind().click(function(){
                    $("#modal-content-treasure-get,#modal-overlay-treasure-get").fadeOut("slow", function(){
                        $('#modal-overlay-treasure-get').remove();
                        stop = false;
                    });
                });

                $.ajax({
                    url:'/api/treasurelist',
                    type:'GET',
                    data:{
                        'user':$('#user').val()
                    }
                })
                .done((treasures) => {
                    treasurelist = treasures;
                    value = "";
                    $.each(treasures, function(index, treasure) {
                        value += `<button id="modal-open-treasure" class="button" value="${index}">${treasure.name}</button>`
                    });
                    $('#treasure-box').html(value);
                });
            });
        px = dx;
        py = dy;
    }
    repaint();
}

function enterRoom(did){
    var form = document.createElement('form');
    var req = document.createElement('input');

    form.method = 'post';
    form.action = '/dungeon/room';
    form.id = 'room'

    req.type = 'hidden';
    req.name = 'did';
    req.value = did;

    form.appendChild(req);
    document.body.appendChild(form);

    form.submit();
}

function getTreasure(did) {
    return new Promise((resolve) => {
        var url = "http://localhost/api/treasure";
        var xhr = new XMLHttpRequest();

        xhr.open('POST', url);
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        const datas = `user=${document.getElementById("user").value}&did=${did}`;
        console.log(datas);
        xhr.send(datas);

        xhr.onload = function() {
            var treasure = JSON.parse(xhr.responseText);
            if(treasure.name || treasure.val){
                resolve(treasure);
            }else{
                resolve();
            }
        }
    });
}

function changeDid(f, x, y){
    let did;
    if ( x < 10 && y < 10 ){
        did = `0` + f + `0` + x + `0` + y;
    } else if ( x < 10 && y >= 10 ) {
        did = `0` + f + `0` + x + y;
    } else if ( x >= 10 && y < 10){
        did = `0` + f + x + `0` + y;
    } else if ( x >= 10 && y >= 10){
        did = `0` + f + x + y;
    }
    return did;
}

function repaint() {
    gc.fillStyle = "black";
    gc.fillRect(0, 0, 1100, 440);
    for (var y = 0 ; y < data.length ; y++) {
        for (var x = 0 ; x < data[y].length ; x++) {
            if (x <= px+r && x >= px-r && y <= py+r && y >= py-r){
                if (data[y][x] == 6) {
                    gc.drawImage(yuka, x * 20, y * 20, 20, 20);
                }else if (data[y][x] == 1) {
                    gc.drawImage(monn, x*20, y*20, 20, 20);
                } else if (data[y][x] == 2){
                    gc.drawImage(tra, x*20, y*20, 20, 20);
                } else if (data[y][x] == 3){
                    gc.drawImage(sea, x*20, y*20, 20, 20);
                } else if (data[y][x] == 5){
                    gc.drawImage(sea2, x*20, y*20, 20, 20);
                } else if (data[y][x] == 0) {
                    gc.drawImage(kabe, x*20, y*20, 20, 20);
                }
            }
       }
    }
   gc.drawImage(yuusya,px * 20, py * 20, 20, 20);
}
