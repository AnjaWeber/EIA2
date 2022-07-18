namespace GardenSimulator {
    export class Sunflower extends PlantedField {
        constructor(_position: Vector, _size: Vector) {
            super(_position, _size, 20, 80, 15, 5, 60, 7, 19, 3);
        }

        draw(): void {
            super.draw();

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size.x / 100, this.size.y / 100);

            if (this.ageInDays < this.growthDurationInDays / 3) {
                crc2.beginPath();
                crc2.moveTo(50, 100);
                crc2.bezierCurveTo(55, 55, 35, 55, 55, 45);
                crc2.lineWidth = 4;
                crc2.strokeStyle = "#72B05B";
                crc2.stroke();
            } else if (this.ageInDays < this.growthDurationInDays) {
                crc2.beginPath();
                crc2.moveTo(50, 100);
                crc2.bezierCurveTo(55, 55, 35, 55, 55, 45);
                crc2.lineWidth = 4;
                crc2.strokeStyle = "#72B05B";
                crc2.stroke();

                crc2.beginPath();
                crc2.moveTo(50, 79);
                crc2.bezierCurveTo(45, 60, 20, 50, 35, 70);
                crc2.fillStyle = "#72B05B";
                crc2.fill();
                crc2.closePath();
                crc2.stroke();

                crc2.beginPath();
                crc2.moveTo(53, 75);
                crc2.bezierCurveTo(59, 54, 66, 54, 75, 63);
                crc2.closePath();
                crc2.fillStyle = "#72B05B";
                crc2.fill();
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(56, 46, 5, 0, 2 * Math.PI);
                crc2.fillStyle = "yellow";
                crc2.fill();
                crc2.lineWidth = 0.5;
                crc2.strokeStyle = "black";

                crc2.stroke();

                crc2.beginPath();
                crc2.arc(52, 35, 5, 0, 2 * Math.PI);
                crc2.fillStyle = "yellow";
                crc2.fill();
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(58, 33, 5, 0, 2 * Math.PI);
                crc2.fillStyle = "yellow";
                crc2.fill();
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(64, 37, 5, 0, 2 * Math.PI);
                crc2.fillStyle = "yellow";
                crc2.fill();
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(62, 44, 5, 0, 2 * Math.PI);
                crc2.fillStyle = "yellow";
                crc2.fill();
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(50, 42, 5, 0, 2 * Math.PI);
                crc2.fillStyle = "yellow";
                crc2.fill();
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(57, 40, 4, 0, 2 * Math.PI);
                crc2.fillStyle = "brown";
                crc2.fill();
                crc2.stroke();
            } else {
                crc2.beginPath();
                crc2.moveTo(50, 100);
                crc2.bezierCurveTo(55, 55, 50, 20, 55, 10);
                crc2.lineWidth = 4;
                crc2.strokeStyle = "#72B05B";
                crc2.stroke();

                crc2.beginPath();
                crc2.moveTo(50, 79);
                crc2.bezierCurveTo(45, 60, 20, 50, 35, 70);
                crc2.fillStyle = "#72B05B";
                crc2.fill();
                crc2.closePath();
                crc2.stroke();

                crc2.beginPath();
                crc2.moveTo(53, 75);
                crc2.bezierCurveTo(59, 54, 66, 54, 75, 63);
                crc2.closePath();
                crc2.fillStyle = "#72B05B";
                crc2.fill();
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(38, 25, 10, 0, 2 * Math.PI);
                crc2.fillStyle = "yellow";
                crc2.fill();
                crc2.lineWidth = 0.5;
                crc2.strokeStyle = "black";

                crc2.stroke();

                crc2.beginPath();
                crc2.arc(45, 35, 10, 0, 2 * Math.PI);
                crc2.fillStyle = "yellow";
                crc2.fill();
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(59, 36, 10, 0, 2 * Math.PI);
                crc2.fillStyle = "yellow";
                crc2.fill();
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(67, 27, 10, 0, 2 * Math.PI);
                crc2.fillStyle = "yellow";
                crc2.fill();
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(65, 14, 10, 0, 2 * Math.PI);
                crc2.fillStyle = "yellow";
                crc2.fill();
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(55, 10, 10, 0, 2 * Math.PI);
                crc2.fillStyle = "yellow";
                crc2.fill();
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(43, 12, 10, 0, 2 * Math.PI);
                crc2.fillStyle = "yellow";
                crc2.fill();
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(53, 23, 10, 0, 2 * Math.PI);
                crc2.fillStyle = "brown";
                crc2.fill();
                crc2.stroke();
            }

            crc2.restore();
        }
    }
}
