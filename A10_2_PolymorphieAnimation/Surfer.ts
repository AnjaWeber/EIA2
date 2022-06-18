namespace BeachScenePolymorphyAnimationAnja {

    export class Surfer extends BeachElement {
        scale: Vector;
        color: string;

        constructor(_position: Vector) {
            super(_position, new Vector(0, 0));
            
        }

        draw(): void {
           //Kopf
        crc2.save();
        crc2.translate(this.position.x, this.position.y);
        crc2.beginPath();
        crc2.arc(37.5, 12.5, 12.5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();

        //Körper

        
        crc2.beginPath();
        crc2.moveTo(37.5, 20);
        crc2.lineTo(12.5, 37.5);
        crc2.lineTo(15, 45);
        crc2.lineTo(25, 42);

        crc2.lineTo(25, 57);
        crc2.lineTo(50, 57);

        crc2.lineTo(50, 30);
        crc2.lineTo(65, 7.5);
        crc2.lineTo(62.5, 0);
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
        crc2.arc(64, 3, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(37.5, 12.5, 12.5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();

        //Badehose

        crc2.beginPath();
        crc2.moveTo(25, 57);
        crc2.lineTo(27, 75);
        crc2.lineTo(35, 75);
        crc2.lineTo(36, 63);
        crc2.lineTo(39, 63);
        crc2.lineTo(40, 75);
        crc2.lineTo(48, 75);
        crc2.lineTo(50, 57);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#E71837";
        crc2.fill();

        //Bein links
        crc2.beginPath();
        crc2.moveTo(28, 75);
        crc2.lineTo(28, 90);
        crc2.lineTo(34, 90);
        crc2.lineTo(34, 75);
        crc2.closePath();

        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();


        //Bein rechts
        crc2.beginPath();
        crc2.moveTo(46.5, 75);
        crc2.lineTo(46.5, 90);
        crc2.lineTo(40, 90);
        crc2.lineTo(40, 75);
        crc2.closePath();

        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();

        //Füße
        crc2.beginPath();
        crc2.arc(30, 88, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(45, 88, 5, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#FEC7B2";
        crc2.fill();
        crc2.restore();
        }
    }
}