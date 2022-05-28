namespace BeachSceneAnimationAnja {

    export class Surfboard {
        position: Vector;
        scale: Vector;
        color: string;

        constructor(_position: Vector) {
            this.position = _position;
            
        }

        move(_timeslice: number): void {
            // TODO
        }

        draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.ellipse(0, 0, 25, 60, Math.PI / 3, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fillStyle = "#FFFF99";
            crc2.fill();
            crc2.restore();
        }
    }
}