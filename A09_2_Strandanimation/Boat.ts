namespace BeachSceneAnimationAnja {

    export class Boat {
        position: Vector;
        scale: Vector;
        color: string;
        velocity: Vector;

        constructor(_position: Vector, _scale: Vector, _color: string) {
            this.position = _position;
            this.scale = _scale;
            this.color = _color;
            this.velocity = new Vector (100, 0);
        }

        move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0) {
                this.position.x += crc2.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += crc2.canvas.height;
            }
            if (this.position.x > crc2.canvas.width) {
                this.position.x -= crc2.canvas.width;
            }
            if (this.position.y > crc2.canvas.height) {
                this.position.y -= crc2.canvas.height;
            }
        }

        draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.scale.x, this.scale.y)
            crc2.beginPath();
            crc2.moveTo(0, 75);
            crc2.bezierCurveTo(25, 110, 75, 110, 100, 75);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = this.color;
            crc2.fill();
    
            crc2.beginPath();
            crc2.moveTo(50, 25);
            crc2.lineTo(75, 50);
            crc2.lineTo(50, 50);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "#fffff0";
            crc2.fill();
    
    
            crc2.beginPath();
            crc2.moveTo(50, 75);
            crc2.lineTo(50, 25);
            crc2.strokeStyle = "#5b3a29";
            crc2.stroke();
            crc2.restore(); 
        }
    }
}