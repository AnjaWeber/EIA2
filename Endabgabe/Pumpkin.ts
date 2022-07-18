namespace GardenSimulator {
    export class Pumpkin extends PlantedField {
        constructor(_position: Vector, _size: Vector) {
            super(_position, _size, 30, 90, 20, 20, 70, 10, 30, 5);
        }

        private drawLeaf(_position: Vector, _angle: number) {
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.rotate(_angle);

            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.bezierCurveTo(0, -7, 10, -5, 20, 0);
            crc2.moveTo(0, 0);
            crc2.bezierCurveTo(0, 7, 10, 5, 20, 0);
            crc2.fillStyle = "#66A83C";
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
                crc2.moveTo(50, 100);
                crc2.bezierCurveTo(50, 90, 60, 80, 60, 70);
                crc2.lineWidth = 2;
                crc2.strokeStyle = "#A9D246";
                crc2.stroke();

                this.drawLeaf(new Vector(60, 70), 0.2);
                this.drawLeaf(new Vector(60, 70), Math.PI - 0.1);
            } else if (this.ageInDays < this.growthDurationInDays) {
                crc2.beginPath();
                crc2.moveTo(50, 100);
                crc2.bezierCurveTo(90, 90, 90, 50, 60, 50);
                crc2.bezierCurveTo(35, 50, 22, 75, 20, 80);
                crc2.lineWidth = 2;
                crc2.strokeStyle = "#A9D246";
                crc2.stroke();

                this.drawLeaf(new Vector(20, 80), 2);
                this.drawLeaf(new Vector(30, 65), 3.5);
                this.drawLeaf(new Vector(80, 75), 0.4);

                crc2.beginPath();
                crc2.arc(65, 56, 7.5, 0, 2 * Math.PI);
                crc2.fillStyle = "#FAEA00";
                crc2.fill();

                crc2.beginPath();
                crc2.arc(65, 56, 1.5, 0, 2 * Math.PI);
                crc2.fillStyle = "#9E6B00";
                crc2.fill();
            } else {
                crc2.beginPath();
                crc2.moveTo(50, 100);
                crc2.bezierCurveTo(90, 90, 90, 50, 60, 50);
                crc2.bezierCurveTo(35, 50, 22, 75, 20, 80);
                crc2.lineWidth = 2;
                crc2.strokeStyle = "#A9D246";
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(42, 85, 15, 0, 2 * Math.PI);
                crc2.fillStyle = "#FA7A00";
                crc2.fill();

                crc2.beginPath();
                crc2.moveTo(70, 52);
                crc2.bezierCurveTo(60, 51, 50, 60, 42, 72);
                crc2.stroke();

                this.drawLeaf(new Vector(20, 80), 2);
                this.drawLeaf(new Vector(30, 65), 3.5);
                this.drawLeaf(new Vector(80, 75), 0.4);
            }

            crc2.restore();
        }
    }
}
