
function drawCarrot() {
    var carrot = document.getElementById("carrot");
    var ctx = carrot.getContext("2d");
    var img = document.getElementById("carrot_img");
    ctx.drawImage(img,0,0);
}

function drawRiver() {
    var river = document.getElementById("river");
    var ctx = river.getContext("2d");
    ctx.fillStyle = "#AFEEEE";
    ctx.fillRect(0,0,1200,500);

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

