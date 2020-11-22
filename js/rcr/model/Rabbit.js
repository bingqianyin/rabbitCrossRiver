class Rabbit {

    constructor(x, y) {
        this.x = x;
        this.y = y;

    }

    start(){
        const ctx = utils.getContext('rabbit');
        utils.drawImage(ctx, 'rabbit_img', 0, 0);
        this.render();
        document.addEventListener('keydown', (e)=>{this.keyPressed(e)});
    }

    render(){
        utils.renderDivWithAbsolutePosition('rabbit_div', this.x, this.y);
    }

    keyPressed(e){
        if (e.code === "ArrowLeft") {
            if(this.x -50 >= 0){
                this.x -=50;
            }
        }
        else if (e.code === "ArrowRight") {
            this.x +=50;
        }else if (e.code === "ArrowUp") {
            if(this.y -140 >= 0){
                this.y -=140;
            }
        }else if (e.code === "ArrowDown") {
            this.y +=140;
        }
        this.render();
    }
}

