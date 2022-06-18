namespace BeachScenePolymorphyAnimationAnja {
    export class Sea extends BeachElement{

        constructor(_position: Vector) {
            super(_position, new Vector(0, 0));
        }

        draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(0, 300);
            crc2.lineTo(800, 300);
            crc2.lineTo(800, 0);
            crc2.closePath();
    
            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 300);
    
            gradient.addColorStop(0, "#7bb5d8");
            gradient.addColorStop(.5, "#3976a3");
            gradient.addColorStop(1, "#2bb8c3");
    
            crc2.fillStyle = gradient;
            crc2.fill();
            crc2.restore();
        }
    }
}