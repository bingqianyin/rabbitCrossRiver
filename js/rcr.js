
function drawCarrot() {
    var carrot = document.getElementById("carrot");
    var ctx = carrot.getContext("2d");
    var img = document.getElementById("carrot_img");
    ctx.drawImage(img,0,0);
}

function drawRiver() {
    var river = document.getElementById("river");
    var ctx = river.getContext("2d");
    const riverWidth = 1200;
    const riverHeight = 500;
    ctx.fillStyle = "#AFEEEE";
    ctx.fillRect(0,0, riverWidth, riverHeight);

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

function drawRabbit() {
    var rabbit = document.getElementById("rabbit");
    var ctx = rabbit.getContext("2d");
    var img = document.getElementById("rabbit_img");
    ctx.drawImage(img,0,0);
}


window.onload = function() {
    drawCarrot();
    drawRiver();
    drawRabbit();
};

