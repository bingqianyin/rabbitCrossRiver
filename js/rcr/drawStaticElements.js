function drawGrassTop() {

    const ctx = utils.getContext('grassUp');
    utils.drawImage(ctx, 'grassUp_img', 0, 0);
    utils.drawImage(ctx, 'carrot_img', 0, 0);

}

function drawRiver() {

    const ctx = utils.getContext('river');
    utils.drawImage(ctx, 'river_img', 0, 0);
}

function drawGrassBottom() {

    const ctx = utils.getContext('grass');
    utils.drawImage(ctx, 'grass_img', 0, 0);

}