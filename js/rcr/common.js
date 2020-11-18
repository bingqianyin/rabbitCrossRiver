
const utils = {

    getContext : function (canvasId) {
        const canvasEl = document.getElementById(canvasId);
        return canvasEl.getContext("2d");
    },

    drawImage : function (ctx, imageId, x, y) {
        const img = document.getElementById(imageId);
        ctx.drawImage(img,x,y);
    },

    renderDivWithAbsolutePosition: function (elementId, x, y) {
        const rabbitDiv = document.getElementById(elementId);
        rabbitDiv.style.position="absolute";
        rabbitDiv.style.left=x+"px";
        rabbitDiv.style.top=y+"px";
    }
};
