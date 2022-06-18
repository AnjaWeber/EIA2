namespace BeachScenePolymorphyAnimationAnja {
    export class Sun extends BeachElement {

        constructor(_position: Vector) {
            super(_position, new Vector(0, 0));
        }

        draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.arc(0, 0, 150, 0, 2 * Math.PI);
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 75, 0, 0, 150);
            gradient.addColorStop(0, "rgba(255,166,70, 0.75)");

            gradient.addColorStop(1, "rgba(255,166,70, 0)");
            crc2.fillStyle = gradient;
            crc2.fill();

            crc2.beginPath();
            crc2.arc(0, 0, 75, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffa646";
            crc2.fill();
            crc2.restore();
        }
    }
}