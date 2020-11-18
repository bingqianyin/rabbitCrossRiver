
function drawGrassUp() {
    var grassUp = document.getElementById("grassUp");
    var ctx = grassUp.getContext("2d");
    const imgGrassUp = document.getElementById("grassUp_img");
    ctx.drawImage(imgGrassUp,0,0);
    var imgCarrot = document.getElementById("carrot_img");
    ctx.drawImage(imgCarrot,0,0);
}
var boatPosition = 0;

function drawRiver() {
    var river = document.getElementById("river");
    var ctx = river.getContext("2d");
    var imgRiver = document.getElementById("river_img");
    ctx.drawImage(imgRiver,0,0);
    var imgBoat = document.getElementById("boat_img");


    drawImageBoat1();
    drawImageBoat2();
    drawImageBoat3();


    function drawImageBoat1() {

        var x = 0;
        while (x < 1000) {
            ctx.drawImage(imgBoat, x+boatPosition, 35);
            x += 450;
        }

    }

    function drawImageBoat2() {

        var x = 100;
        while (x < 1100) {
            ctx.drawImage(imgBoat, x, 170);
            x += 450;
        }

    }

    function drawImageBoat3() {

        var x = 50;
        while (x < 1000) {
            ctx.drawImage(imgBoat, x, 300);
            x += 450;
        }

    }

}



function updateBoatPosition() {
    if (boatPosition > 1200) {
        boatPosition = 0;
    }
    else {
        boatPosition += 2;

    }
    drawRiver();
}

function drawGrass() {
    var grass = document.getElementById("grass");
    var ctx = grass.getContext("2d");
    const imgGrass = document.getElementById("grass_img");
    ctx.drawImage(imgGrass,0,0);
}

function drawRabbit(){
    var rabbit = document.getElementById("rabbit");
    var ctx = rabbit.getContext("2d");
    const imgRabbit = document.getElementById("rabbit_img");
    ctx.drawImage(imgRabbit,0,0);
    renderRabbitDiv();
}

window.onload = function() {
    drawGrassUp();
    drawRiver();
    drawGrass();
    setInterval(updateBoatPosition, 1);
    drawRabbit();
    addKeyListener();

};

function renderRabbitDiv() {
    var rabbitDiv = document.getElementById("rabbit_div");
    rabbitDiv.style.position="absolute";
    rabbitDiv.style.top=rabbitY+"px";
    rabbitDiv.style.left=rabbitX+"px";
}

let rabbitX=0;
let rabbitY=620;

function addKeyListener(){ // for up, down, right, left key pressing

    document.addEventListener('keydown', (e) => {

        if (e.code === "ArrowLeft") {
            if(rabbitX -50 >= 0){
                rabbitX -=50;
            }
        }
        else if (e.code === "ArrowRight") {
            rabbitX +=50;
        }else if (e.code === "ArrowUp") {
            if(rabbitY -140 >= 0){
                rabbitY -=140;
            }
        }else if (e.code === "ArrowDown") {
            rabbitY +=140;
        }
        renderRabbitDiv();


    });
}

