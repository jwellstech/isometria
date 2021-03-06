var pixelCoords, pX, pY;

function updatePlayer() {
    pixelCoords = gridToIso(player);
    pX = pixelCoords.x;
    pY = pixelCoords.y;
    //$("#player").css("left", pX);
    //$("#player").css("top", pY);
    playerSprite.x = pX;
    playerSprite.y = pY;
}

function movePlayerTo(x, y) {
    player.x = x;
    player.y = y;
    updatePlayer();
}

function movePlayerTo(x, y, z) {
    player.x = x;
    player.y = y;
    player.z = z;
    updatePlayer();
}

//up = left
//left = down
//down = right
//right = up
var amount = 1 / 32;

function moveUp() {
    //    player.y -= amount;

    player.x -= amount;
    updatePlayer();
}

function moveDown() {
    //    player.y += amount;

    player.x += amount;
    updatePlayer();
}

function moveLeft() {
    //    player.x -= amount;

    player.y += amount;
    updatePlayer();
}

function moveRight() {
    //    player.x += amount;

    player.y -= amount;
    updatePlayer();
}
/*
listener.simple_combo("up", moveUp);
listener.simple_combo("w", moveUp);
listener.simple_combo("down", moveDown);
listener.simple_combo("s", moveDown);
listener.simple_combo("left", moveLeft);
listener.simple_combo("a", moveLeft);
listener.simple_combo("right", moveRight);
listener.simple_combo("d", moveRight);
*/

var w = false;
var a = false;
var s = false;
var d = false;

listener.register_many([
    {
        "keys": "up",
        "on_keydown": function () {
            w = true;
        },
        "on_keyup": function () {
            w = false;
        },
        "prevent_default": true
    }, {
        "keys": "w",
        "on_keydown": function () {
            w = true;
        },
        "on_keyup": function () {
            w = false;
        },
        "prevent_default": true
    }, {
        "keys": "down",
        "on_keydown": function () {
            s = true;
        },
        "on_keyup": function () {
            s = false;
        },
        "prevent_default": true
    }, {
        "keys": "s",
        "on_keydown": function () {
            s = true;
        },
        "on_keyup": function () {
            s = false;
        },
        "prevent_default": true
    }, {
        "keys": "left",
        "on_keydown": function () {
            a = true;
        },
        "on_keyup": function () {
            a = false;
        },
        "prevent_default": true
    }, {
        "keys": "a",
        "on_keydown": function () {
            a = true;
        },
        "on_keyup": function () {
            a = false;
        },
        "prevent_default": true
    }, {

        "keys": "right",
        "on_keydown": function () {
            d = true;
        },
        "on_keyup": function () {
            d = false;
        },
        "prevent_default": true
    }, {
        "keys": "d",
        "on_keydown": function () {
            d = true;
        },
        "on_keyup": function () {
            d = false;
        },
        "prevent_default": true
}]);

updatePlayer();
