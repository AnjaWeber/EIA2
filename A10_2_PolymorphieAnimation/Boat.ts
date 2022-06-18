namespace BeachScenePolymorphyAnimationAnja {

    export class Boat extends BeachElement {
        scale: Vector;
        color: string;

        constructor(_position: Vector, _scale: Vector, _color: string, _velocity: Vector) {
            super(_position, _velocity);
            this.scale = _scale;
            this.color = _color;
        }


        draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.scale.x, this.scale.y);
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