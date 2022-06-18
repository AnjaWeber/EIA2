namespace BeachScenePolymorphyAnimationAnja {
    export class Sky extends BeachElement {

        constructor(_position: Vector) {
            super(_position, new Vector(0, 0));
        }

        draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(0, 200);
            crc2.lineTo(800, 200);
            crc2.lineTo(800, 0);
            crc2.closePath();

            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 200);

            gradient.addColorStop(0, "#0047ab");
            gradient.addColorStop(.5, "#0088FF");
            gradient.addColorStop(1, "#C6E6FB");

            crc2.fillStyle = gradient;
            crc2.fill();
            crc2.restore();
        }
    }
}