

let boatPosition = 0;

function drawBoats(){

    const ctx = utils.getContext('river');
    const imgBoat = document.getElementById("boat_img");

    drawImageBoat1();
    drawImageBoat2();
    drawImageBoat3();


    function drawImageBoat1() {

        let x = 0;
        while (x < 1000) {
            ctx.drawImage(imgBoat, x+boatPosition, 35);
            x += 450;
        }

    }

    function drawImageBoat2() {

        let x = 100;
        while (x < 1100) {
            ctx.drawImage(imgBoat, x, 170);
            x += 450;
        }

    }

    function drawImageBoat3() {

        let x = 50;
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
    drawBoats();
}

window.onload = function() {
    drawGrassTop();
    drawRiver();
    drawBoats();
    drawGrassBottom();
    setInterval(updateBoatPosition, 1);
    drawRabbit();
    document.addEventListener('keydown', keyPressed);

};

function keyPressed(e){
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
}


