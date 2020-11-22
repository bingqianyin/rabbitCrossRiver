function drawBoats(){

    for(let i=0; i<9; i++){
        let direction = "RIGHT";
        if( i >= 3 && i<=5){
            direction = "LEFT";
        }
        const boat = new Boat((i%3)* 450, 300 + Math.floor((i / 3)) * 100, direction, i+1);
        boat.start();
    }
}

function drawRabbit (){
    const rabbit= new Rabbit (0, 620);
    rabbit.start();
}