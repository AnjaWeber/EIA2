namespace BeachSceneAnimationAnja {

    export class Swimmer {
        position: Vector;
        scale: Vector;
        velocity: Vector;

        constructor(_position: Vector, _scale: Vector) {
            this.position = _position;
            this.scale = _scale;
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
            crc2.scale(this.scale.x, this.scale.y);

            crc2.beginPath();
            crc2.moveTo(37.5, 20);
            crc2.lineTo(12.5, 37.5);
            crc2.lineTo(15, 45);
            crc2.lineTo(25, 42);

            crc2.lineTo(25, 57);
            crc2.lineTo(50, 57);



            crc2.lineTo(50, 42);
            crc2.lineTo(60, 45);
            crc2.lineTo(62.5, 37.5);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "#FEC7B2";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(12.5, 42, 5, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fillStyle = "#FEC7B2";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(62.5, 42, 5, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fillStyle = "#FEC7B2";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(37.5, 12.5, 12.5, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fillStyle = "#FEC7B2";
            crc2.fill();

            crc2.restore();
        }
    }
}