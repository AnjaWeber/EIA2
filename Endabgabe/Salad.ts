namespace GardenSimulator {
    export class Salad extends PlantedField {
        constructor(_position: Vector, _size: Vector) {
            super(_position, _size, 15, 85, 25, 15, 70, 12, 27, 5);
        }

        draw(): void {
            super.draw();

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size.x / 100, this.size.y / 100);

            if (this.ageInDays < this.growthDurationInDays / 3) {
                crc2.beginPath();
                crc2.arc(50, 93, 7, 0, 2 * Math.PI);
                crc2.fillStyle = "green";
                crc2.fill();
                crc2.stroke();
            } else if (this.ageInDays < this.growthDurationInDays) {
                crc2.beginPath();
                crc2.arc(50, 80, 5, 0, 2 * Math.PI);
                crc2.fillStyle = "green";
                crc2.fill();
                crc2.lineWidth = 0.5;
                crc2.strokeStyle = "black";

                crc2.beginPath();
                crc2.arc(50, 75, 7, 0, 2 * Math.PI);
                crc2.fillStyle = "green";
                crc2.fill();
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(50, 95, 7, 0, 2 * Math.PI);
                crc2.fillStyle = "green";
                crc2.fill();
                crc2.stroke();

                crc2.stroke();
                crc2.beginPath();
                crc2.arc(42, 90, 7, 0, 2 * Math.PI);
                crc2.fillStyle = "green";
                crc2.fill();
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(59, 90, 7, 0, 2 * Math.PI);
                crc2.fillStyle = "green";
                crc2.fill();
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(42, 80, 8, 0, 2 * Math.PI);
                crc2.fillStyle = "green";
                crc2.fill();
                crc2.stroke();
                crc2.beginPath();

                crc2.arc(55, 80, 7, 0, 2 * Math.PI);
                crc2.fillStyle = "green";
                crc2.fill();
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(50, 78, 6, 0, 2 * Math.PI);
                crc2.fillStyle = "green";
                crc2.fill();
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(60, 79, 6, 0, 2 * Math.PI);
                crc2.fillStyle = "green";
                crc2.fill();
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(42, 85, 5, 0, 2 * Math.PI);
                crc2.fillStyle = "green";
                crc2.fill();
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(46, 94, 5, 0, 2 * Math.PI);
                crc2.fillStyle = "green";
                crc2.fill();
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(55, 94, 5, 0, 2 * Math.PI);
                crc2.fillStyle = "green";
                crc2.fill();
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(58, 85, 5, 0, 2 * Math.PI);
                crc2.fillStyle = "green";
                crc2.fill();
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(50, 86, 5, 0, 2 * Math.PI);
                crc2.fillStyle = "green";
                crc2.fill();
                crc2.stroke();
            } else {
                crc2.beginPath();
                crc2.arc(50, 80, 5, 0, 2 * Math.PI);
                crc2.fillStyle = "green";
                crc2.fill();
                crc2.lineWidth = 0.5;
                crc2.strokeStyle = "black";

                crc2.beginPath();
                crc2.arc(63, 78, 9, 0, 2 * Math.PI);
                crc2.fillStyle = "green";
                crc2.fill();
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(52, 73, 9, 0, 2 * Math.PI);
                crc2.fillStyle = "green";
                crc2.fill();
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(39, 77, 9, 0, 2 * Math.PI);
                crc2.fillStyle = "green";
                crc2.fill();
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(37, 87, 9, 0, 2 * Math.PI);
                crc2.fillStyle = "green";
                crc2.fill();
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(42, 91, 9, 0, 2 * Math.PI);
                crc2.fillStyle = "green";
                crc2.fill();
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(58, 91, 9, 0, 2 * Math.PI);
                crc2.fillStyle = "green";
                crc2.fill();
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(65, 90, 9, 0, 2 * Math.PI);
                crc2.fillStyle = "green";
                crc2.fill();
                crc2.stroke();

                crc2.stroke();
                crc2.beginPath();
                crc2.arc(42, 90, 7, 0, 2 * Math.PI);
                crc2.fillStyle = "green";
                crc2.fill();
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(59, 90, 7, 0, 2 * Math.PI);
                crc2.fillStyle = "green";
                crc2.fill();
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(42, 80, 8, 0, 2 * Math.PI);
                crc2.fillStyle = "green";
                crc2.fill();
                crc2.stroke();
                crc2.beginPath();

                crc2.arc(55, 80, 7, 0, 2 * Math.PI);
                crc2.fillStyle = "green";
                crc2.fill();
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(50, 78, 6, 0, 2 * Math.PI);
                crc2.fillStyle = "green";
                crc2.fill();
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(60, 79, 6, 0, 2 * Math.PI);
                crc2.fillStyle = "green";
                crc2.fill();
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(42, 85, 5, 0, 2 * Math.PI);
                crc2.fillStyle = "green";
                crc2.fill();
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(46, 94, 5, 0, 2 * Math.PI);
                crc2.fillStyle = "green";
                crc2.fill();
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(55, 94, 5, 0, 2 * Math.PI);
                crc2.fillStyle = "green";
                crc2.fill();
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(58, 85, 5, 0, 2 * Math.PI);
                crc2.fillStyle = "green";
                crc2.fill();
                crc2.stroke();

                crc2.beginPath();
                crc2.arc(50, 86, 5, 0, 2 * Math.PI);
                crc2.fillStyle = "green";
                crc2.fill();
                crc2.stroke();
            }

            crc2.restore();
        }
    }
}
