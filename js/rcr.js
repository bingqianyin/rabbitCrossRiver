
function drawBoats(){

    for(let i=0; i<9; i++){
        let direction = "RIGHT";
        if( i >= 3 && i<=5){
            direction = "LEFT";
        }
        let boat = new Boat((i%3)* 400, 300 + Math.floor((i / 3)) * 100, direction, i+1);
        boat.start();
    }
}


window.onload = function() {
    drawGrassTop();
    drawRiver();
    drawGrassBottom();
    drawBoats();
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


