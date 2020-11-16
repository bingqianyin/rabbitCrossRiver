
function drawGrassUp() {
    var grassUp = document.getElementById("grassUp");
    var ctx = grassUp.getContext("2d");
    const imgGrassUp = document.getElementById("grassUp_img");
    ctx.drawImage(imgGrassUp,0,0);
    var imgCarrot = document.getElementById("carrot_img");
    ctx.drawImage(imgCarrot,0,0);
}

function drawRiver() {
    var river = document.getElementById("river");
    var ctx = river.getContext("2d");
    var img = document.getElementById("river_img");
    ctx.drawImage(img,0,0);

    drawBoard(ctx, 50, 33);
    drawBoard(ctx, 550, 33);
    drawBoard(ctx, 950, 33);
    drawBoard(ctx, 0, 200);
    drawBoard(ctx, 450, 200);
    drawBoard(ctx, 1150, 200);
    drawBoard(ctx, 50, 366);
    drawBoard(ctx, 480, 366);
    drawBoard(ctx, 800, 366);

}

function drawBoard(ctx,x,y) {
    const boardWidth = 200;
    const boardHeight = 100;
    ctx.fillStyle = "#54311d";
    ctx.fillRect(x,y,boardWidth,boardHeight);
}

function drawGrass() {
    var grass = document.getElementById("grass");
    var ctx = grass.getContext("2d");
    const imgGrass = document.getElementById("grass_img");
    ctx.drawImage(imgGrass,0,0);
    const imgRabbit = document.getElementById("rabbit_img");
    ctx.drawImage(imgRabbit,0,0);
}


window.onload = function() {
    drawGrassUp();
    drawRiver();
    drawGrass();
};

