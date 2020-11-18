
let rabbitX=0;
let rabbitY=620;

function renderRabbitDiv() {
    utils.renderDivWithAbsolutePosition('rabbit_div', rabbitX, rabbitY);
}


function drawRabbit(){
    const ctx = utils.getContext('rabbit');
    utils.drawImage(ctx, 'rabbit_img', 0, 0);
    renderRabbitDiv();
}

