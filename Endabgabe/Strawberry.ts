namespace GardenSimulator {
    export class Strawberry extends PlantedField {
        constructor(_position: Vector, _size: Vector) {
            super(_position, _size, 30, 90, 30, 30, 80, 15, 20, 3);
        }

        private drawLeaf(_position: Vector, _angle: number) {
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.rotate(_angle);

            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.bezierCurveTo(0, -5, 7, -3.5, 14, 0);
            crc2.moveTo(0, 0);
            crc2.bezierCurveTo(0, 5, 7, 3.5, 14, 0);
            crc2.fillStyle = "#4D9A2A";
            crc2.fill();

            crc2.restore();
        }

        draw(): void {
            super.draw();

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size.x / 100, this.size.y / 100);

            if (this.ageInDays < this.growthDurationInDays / 3) {
                crc2.beginPath();
                crc2.moveTo(45, 100);
                crc2.bezierCurveTo(45, 90, 50, 80, 60, 70);
                crc2.lineWidth = 1.5;
                crc2.strokeStyle = "#72B05B";
                crc2.stroke();

                this.drawLeaf(new Vector(59, 71), 3.7);
                this.drawLeaf(new Vector(60, 71), 0.1);
            } else if (this.ageInDays < this.growthDurationInDays) {
                crc2.beginPath();
                crc2.moveTo(45, 100);
                crc2.bezierCurveTo(55, 45, 55, 40, 63, 20);
                crc2.lineWidth = 2.5;
                crc2.strokeStyle = "#72B05B";
                crc2.stroke();

                this.drawLeaf(new Vector(63, 20), 5.3);
                this.drawLeaf(new Vector(61, 22), 4.1);
                this.drawLeaf(new Vector(62, 23), 0.1);

                crc2.beginPath();
                crc2.moveTo(53, 50);
                crc2.bezierCurveTo(48, 45, 41, 41, 35, 35);
                crc2.stroke();

                this.drawLeaf(new Vector(35, 35), 3.9);
                this.drawLeaf(new Vector(37, 37), 5);
                this.drawLeaf(new Vector(38, 38), 2.9);

                crc2.beginPath();
                crc2.moveTo(53, 55);
                crc2.bezierCurveTo(59, 54, 66, 54, 75, 53);
                crc2.stroke();
                crc2.fillStyle = "red";
                crc2.fill();

                crc2.beginPath();
                crc2.arc(75, 42, 6, 0, 2 * Math.PI);
                crc2.fillStyle = "#fffDD1";
                crc2.fill();
                crc2.lineWidth = 0.3;
                crc2.strokeStyle = "black";
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(67, 47, 6, 0, 2 * Math.PI);
                crc2.fillStyle = "#fffDD1";
                crc2.fill();
                crc2.strokeStyle = "black";
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(67, 56, 6, 0, 2 * Math.PI);
                crc2.fillStyle = "#fffDD1";
                crc2.fill();
                crc2.strokeStyle = "black";
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(75, 61, 6, 0, 2 * Math.PI);
                crc2.fillStyle = "#fffDD1";
                crc2.fill();
                crc2.strokeStyle = "black";
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(83, 56, 6, 0, 2 * Math.PI);
                crc2.fillStyle = "#fffDD1";
                crc2.fill();
                crc2.strokeStyle = "black";
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(83, 47, 6, 0, 2 * Math.PI);
                crc2.fillStyle = "#fffDD1";
                crc2.fill();
                crc2.strokeStyle = "black";
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(75, 51.5, 5, 0, 2 * Math.PI);
                crc2.fillStyle = "yellow";
                crc2.fill();
                crc2.strokeStyle = "black";
                crc2.stroke();
            } else {
                crc2.beginPath();
                crc2.moveTo(45, 100);
                crc2.bezierCurveTo(55, 45, 55, 40, 63, 20);
                crc2.lineWidth = 2.5;
                crc2.strokeStyle = "#72B05B";
                crc2.stroke();

                this.drawLeaf(new Vector(63, 20), 5.3);
                this.drawLeaf(new Vector(61, 22), 4.1);
                this.drawLeaf(new Vector(62, 23), 0.1);

                crc2.beginPath();
                crc2.moveTo(53, 50);
                crc2.bezierCurveTo(48, 45, 41, 41, 35, 35);
                crc2.stroke();

                this.drawLeaf(new Vector(35, 35), 3.9);
                this.drawLeaf(new Vector(37, 37), 5);
                this.drawLeaf(new Vector(38, 38), 2.9);

                crc2.beginPath();
                crc2.moveTo(53, 55);
                crc2.bezierCurveTo(59, 54, 66, 54, 75, 53);
                crc2.stroke();

                crc2.beginPath();
                crc2.ellipse(65, 70, 8, 15, Math.PI / 5, 0, 2 * Math.PI);
                crc2.fillStyle = "red";
                crc2.strokeStyle = "red";
                crc2.fill();
                crc2.stroke();

                crc2.beginPath();
                crc2.moveTo(75, 55);
                crc2.lineTo(80, 69);
                crc2.lineTo(75, 60);
                crc2.lineTo(70, 66);
                crc2.lineTo(70, 60);
                crc2.lineTo(60, 60);
                crc2.closePath();
                crc2.lineWidth = 1.5;
                crc2.strokeStyle = "#72B05B";
                crc2.stroke();
                crc2.fillStyle = "#72B05B";
                crc2.fill();

                crc2.beginPath();
                crc2.arc(70, 70, 0.5, 0, 2 * Math.PI);
                crc2.fillStyle = "black";
                crc2.strokeStyle = "black";
                crc2.fill();
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(65, 74, 0.5, 0, 2 * Math.PI);
                crc2.fillStyle = "black";
                crc2.strokeStyle = "black";
                crc2.fill();
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(65, 63, 0.5, 0, 2 * Math.PI);
                crc2.fillStyle = "black";
                crc2.strokeStyle = "black";
                crc2.fill();
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(62, 67, 0.5, 0, 2 * Math.PI);
                crc2.fillStyle = "black";
                crc2.strokeStyle = "black";
                crc2.fill();
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(58, 75, 0.5, 0, 2 * Math.PI);
                crc2.fillStyle = "black";
                crc2.strokeStyle = "black";
                crc2.fill();
                crc2.stroke();
            }

            crc2.restore();
        }
    }
}
