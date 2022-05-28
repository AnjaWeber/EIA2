namespace BeachSceneAnimationAnja {

    export class Person {
        position: Vector;
        clothes: "skirt" | "shirt";
        color: string;

        constructor(_position: Vector, _clothes: "skirt" | "shirt", _color: string) {
            this.position = _position;
            this.clothes = _clothes;
            this.color = _color;

        }

        move(_timeslice: number): void {
            // TODO
        }

        draw(): void {
            // Hände
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
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
            // Füße
            crc2.beginPath();
            crc2.arc(30, 88, 5.5, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fillStyle = "#FEC7B2";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(45, 88, 5.5, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fillStyle = "#FEC7B2";
            crc2.fill();

            //shirt/skirt
            crc2.beginPath();
            crc2.moveTo(37.5, 20);
            crc2.lineTo(12.5, 37.5);
            crc2.lineTo(15, 45);
            crc2.lineTo(25, 42);
            if (this.clothes === "shirt") {
                crc2.lineTo(22, 57);
                crc2.lineTo(53, 57);
            } else {
                crc2.lineTo(20, 87.5);
                crc2.lineTo(55, 87.5);
            }
            crc2.lineTo(50, 42);
            crc2.lineTo(60, 45);
            crc2.lineTo(62.5, 37.5);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = this.color;
            crc2.fill();

            if (this.clothes === "shirt") {
                // hose
                crc2.beginPath();
                crc2.moveTo(25, 57);
                crc2.lineTo(27, 87.5);
                crc2.lineTo(35, 87.5);
                crc2.lineTo(36, 63);
                crc2.lineTo(39, 63);
                crc2.lineTo(40, 87.5);
                crc2.lineTo(48, 87.5);
                crc2.lineTo(50, 57);
                crc2.closePath();
                crc2.stroke();
                crc2.fillStyle = "#343F51";
                crc2.fill();
            }


            // Kopf
            crc2.beginPath();
            crc2.arc(37.5, 12.5, 12.5, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fillStyle = "#FEC7B2";
            crc2.fill();
            crc2.restore();
        }
    }
}