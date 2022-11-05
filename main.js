var context = null;
var tileWidth = 40, tileHeight = 40;
var mapWidth = 10, mapHeight = 10;

var currentSecond = 0, frameCount = 0, framesLastSecond = 0;
var test = false;
const img = new Image();
const img2 = new Image();
const img3 = new Image();
const img4 = new Image();
const img5 = new Image();
const img6 = new Image();

var gameMap = [
    0, 0, 0, 0, 2, 2, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 0, 0, 0, 0,
    0, 1, 0, 0, 1, 0, 0, 0, 0, 0,
    0, 1, 0, 0, 1, 0, 0, 0, 0, 0,
    0, 1, 0, 0, 1, 1, 1, 1, 1, 0,
    0, 1, 1, 1, 1, 1, 0, 0, 1, 0,
    0, 1, 1, 0, 1, 0, 1, 1, 1, 0,
    0, 3, 0, 0, 5, 0, 1, 4, 1, 0,
    0, 0, 0, 0, 3, 0, 1, 1, 1, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0
]

window.onload = function() {
    context = document.getElementById('explore').getContext('2d');
    requestAnimationFrame(drawMap);
    context.font = "bold 10pt sans-serif";
};

function drawMap() {
    if(context==null) {
        return;
    }

    var sec = Math.floor(Date.now()/1000);

    if (sec != currentSecond) {
        currentSecond = sec;
        framesLastSecond = frameCount;
        frameCount = 1;
    }
    else {
        frameCount++;
    }

    for (var y = 0; y < mapHeight; y++) {
        for (var x = 0; x < mapWidth; x++) {
            switch(gameMap[((y*mapWidth+x))]) {
                case 0:
                    //context.fillStyle = "#654321";
                    img3.src = "images/cavewallpiece.png"
                    context.drawImage(img3, x*tileWidth, y*tileHeight, tileWidth, tileHeight)
                    test = true;
                    break;
                case 1:
                    //context.fillStyle = "#C4A484";
                    img4.src = "images/opencavepiece.png"
                    context.drawImage(img4, x*tileWidth, y*tileHeight, tileWidth, tileHeight)
                    test = true;
                    break;
                case 2:
                    //context.fillStyle = "#000000";
                    img5.src = "images/gatecloseup.png"
                    context.drawImage(img5, x*tileWidth, y*tileHeight, tileWidth, tileHeight)
                    test = true;
                    break;
                case 3:
                    //context.fillStyle = "red";
                    img.src = "images/AIbonfire_focus.png"
                    context.drawImage(img, x*tileWidth, y*tileHeight, tileWidth, tileHeight)
                    test = true;
                    break;
                case 4:
                    //context.fillStyle = "blue";.
                    img6.src = "images/water.webp"
                    context.drawImage(img6, x*tileWidth, y*tileHeight, tileWidth, tileHeight)
                    test = true;
                    break;
                case 5:
                    //context.fillStyle = "green";
                    img2.src = "images/AIcavetoad.png"
                    context.drawImage(img2, x*tileWidth, y*tileHeight, tileWidth, tileHeight)
                    test = true;
                    break;
            }
            if(test) {
                
                test = false;
            } else {
                context.fillRect(x*tileWidth, y*tileHeight, tileWidth, tileHeight);
            }
        }
    }

    //context.fillStyle = "#ff0000";
    //context.fillText("FPS: " + framesLastSecond, 10, 20);

    requestAnimationFrame(drawMap);
}