function drawRiver() {
    var river = document.getElementById("river");
    var ctx = river.getContext("2d");
    var imgRiver = document.getElementById("river_img");
    ctx.drawImage(imgRiver, 0, 0);
}


function drawBoat1() {
    var boat1 = document.getElementById("boat1");
    var ctx = boat1.getContext("2d");
    const imgBoat = document.getElementById("boat_img");
    drawImageBoat1();


    function drawImageBoat1() {

        var x = 0;
        while (x < 1000) {
            ctx.drawImage(imgBoat, x, 55);
            x += 450;
        }

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
            ctx.drawImage(imgBoat, x, 290);
            x += 450;
        }

    }






window.onload = function() {
        drawRiver();
        drawBoat1();
};



