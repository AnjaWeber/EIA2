// Quellen: https://stackoverflow.com/questions/8611830/javascript-random-positive-or-negative-number

namespace BeachSceneAnimationAnja {

    export class Moewe {
        position: Vector;
        size: Vector;
        velocity: Vector;
        scale: Vector;
        movementCounter: number;
        changeOfDirectionCount: number;

        constructor(_position: Vector, _size: Vector) {
            this.position = _position;
            this.size = _size;
            let scalingFactor: number = this.position.y / crc2.canvas.height * 1 + 0.5;
            this.scale = new Vector(this.size.x, this.size.y);
            this.scale.scale(scalingFactor);
            this.velocity = new Vector((Math.random() < 0.5 ? -1 : 1) * Math.round(Math.random() * 50), (Math.random() < 0.5 ? -1 : 1) * Math.round(Math.random() * 50));
           // Counter wird angelegt um Anzahl der Bewegungen zu zählen
            this.movementCounter = 0;
            // zufälliger Wert zwischen 100 und 200 der später als maximal Wert für den MovementCounter verwendet wird
            this.changeOfDirectionCount = Math.round(Math.random() * 100) + 100;
            
        }

        move(_timeslice: number): void {
            // Counter wird hochgezöhlt
            this.movementCounter = this.movementCounter + 1;
            // Prüfung ob maximaler Wert für Counter schon erreicht
            if (this.movementCounter >= this.changeOfDirectionCount) {
                // wenn maximaler Wert erreicht ist, wird Counter auf 0 gesetzt
                this.movementCounter = 0;
                // in 50% der Fälle wird hier eine neue zufällige Velocity erzeugt
                if (Math.random() < 0.5) {
                    this.velocity = new Vector((Math.random() < 0.5 ? -1 : 1) * Math.round(Math.random() * 50), (Math.random() < 0.5 ? -1 : 1) * Math.round(Math.random() * 50));
                }
            }

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
            // Möwe je nach y Position größer oder kleiner wirken lassen
            let scalingFactor: number = this.position.y / crc2.canvas.height * 1 + 0.5
            this.scale = new Vector(this.size.x, this.size.y);
            this.scale.scale(scalingFactor);
        }

        draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.scale.x, this.scale.y);

            crc2.beginPath();
            crc2.moveTo(0, 0);
            // crc2.moveTo(650, 100);
            crc2.quadraticCurveTo(35, -25, 50, 0);
            crc2.quadraticCurveTo(70, -25, 100, 0);
            crc2.quadraticCurveTo(70, -14, 50, 0);
            crc2.quadraticCurveTo(35, -14, 0, 0);

            crc2.strokeStyle = "#000000";
            crc2.fillStyle = "#FFFFFF";
            crc2.stroke();
            crc2.fill();
            //Kopf
            crc2.beginPath();
            crc2.arc(50, 0, 7.5, 0, 2 * Math.PI);
            crc2.stroke();
            crc2.fillStyle = "#FFFFFF";
            crc2.fill();
            //Schnabel
            crc2.beginPath();
            crc2.moveTo(47, 0);
            crc2.lineTo(50, 5);
            crc2.lineTo(53, 0);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "#FF8800";
            crc2.fill();


            crc2.restore();
        }
    }
}