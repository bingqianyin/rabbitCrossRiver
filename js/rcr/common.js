
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
        const div = document.getElementById(elementId);
        div.style.position="absolute";
        div.style.left=x+"px";
        div.style.top=y+"px";
    }
};
