namespace BeachSceneInteractionAnja {
    export class PalmTree extends BeachElement {
        scale: Vector;
        color: string;

        constructor(_position: Vector, _scale: Vector) {
            super(_position, new Vector(0, 0), new Vector(0, 0), new Vector(0, 0));
            this.scale = _scale;
        }

        draw(): void {
            //Stamm
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.scale.x, this.scale.y);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(30, 0);
            crc2.bezierCurveTo(70, 50, 90, 150, 90, 250);
            crc2.lineTo(60, 250);
            crc2.bezierCurveTo(60, 150, 40, 50, 0, 0);
            crc2.closePath();
            crc2.fillStyle = "#5B3A24";
            crc2.fill();
            crc2.stroke();

            //Krone
            crc2.save();
            crc2.translate(15, 0);
            const scaleList: Vector[] = [new Vector(1, 1), new Vector(-1, 1)];
            const angleList: number[] = [25, -25, 0];
            for (const scale of scaleList) {
                crc2.save();
                crc2.scale(scale.x, scale.y);
                for (const angle of angleList) {
                    crc2.save();
                    crc2.rotate((angle * Math.PI) / 180);
                    crc2.beginPath();
                    crc2.moveTo(0, 0);
                    crc2.bezierCurveTo(70, 12.5, 125, 30, 170, 75);
                    crc2.bezierCurveTo(140, 0, 75, -70, 0, 0);

                    let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 170, 75);

                    gradient.addColorStop(0, "#008800");
                    gradient.addColorStop(0.5, "#98FF98");
                    gradient.addColorStop(1, "#53753C");

                    crc2.fillStyle = gradient;

                    crc2.fill();
                    crc2.stroke();
                    crc2.restore();
                }
                crc2.restore();
            }
            crc2.restore();
            crc2.restore();
        }
    }
}
