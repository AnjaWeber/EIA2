namespace BeachScenePolymorphyAnimationAnja {
    export class Beach extends BeachElement {

        constructor(_position: Vector) {
            super(_position, new Vector(0, 0));
        }

        draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.bezierCurveTo(200, 100, 600, 130, 800, 40);
            crc2.lineTo(800, 300);
            crc2.lineTo(0, 300);
            crc2.closePath();
            crc2.fillStyle = "#fbdea4";
            crc2.fill();
            crc2.restore();
        }
    }
}