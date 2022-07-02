namespace BeachSceneInteractionAnja {
    export class Swimmer extends BeachElement {
        scale: Vector;
        isSwimming: boolean;
        swimmingTimesliceCount: number;
        originalPosition: Vector;

        constructor(_position: Vector, _scale: Vector, _velocity: Vector) {
            const hitBoxTopLeft: Vector = new Vector(7.5, 0);
            const hitBoxBottomRight: Vector = new Vector(67.5, 57);
            super(_position, _velocity, hitBoxTopLeft, hitBoxBottomRight);
            this.scale = _scale;
            this.swimmingTimesliceCount = 0;
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

        move(_timeslice: number): void {
            if (this.swimmingTimesliceCount >= 250) {
                this.swimmingTimesliceCount = 0;
                this.isSwimming = false;
                this.position = new Vector(this.originalPosition.x, this.originalPosition.y);
            }
            if (this.isSwimming) {
                const x = Math.sin(((2 * Math.PI) / 250) * this.swimmingTimesliceCount) * 75;
                const y = Math.cos(((2 * Math.PI) / 250) * this.swimmingTimesliceCount) * 15 - 15;
                this.position = new Vector(this.originalPosition.x + x, this.originalPosition.y + y);
                this.swimmingTimesliceCount++;
            } else {
                super.move(_timeslice);
            }
        }

        click(): void {
            if (!this.isSwimming) {
                this.originalPosition = new Vector(this.position.x, this.position.y);
                this.isSwimming = true;
            }
            console.log("SWIMMER");
        }
    }
}
