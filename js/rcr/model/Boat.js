class Boat {

    constructor(x, y, direction, number) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.number = number;
    }

    static width() {
        return 150;
    }

    move(distance) {
        if (this.direction === "LEFT"){
            this.x -= distance;
            if (this.x < -Boat.width()) {
                this.x = 1200;
            }
        }
        else if(this.direction === "RIGHT"){
            this.x += distance;
            if(this.x > 1200){
               this.x = - Boat.width();
            }
        }
        this.render();
    }

    start(){
        let ctx = utils.getContext('boat'+this.number);
        utils.drawImage(ctx, 'boat_img', 0, 0);
        this.render();
        setInterval(()=>{this.move(2)}, 10);
    }

    render(){
        utils.renderDivWithAbsolutePosition('boat'+this.number+'_div', this.x, this.y);
    }
}