// Quellen: https://stackoverflow.com/questions/8611830/javascript-random-positive-or-negative-number
var BeachSceneAnimationAnja;
(function (BeachSceneAnimationAnja) {
    var Moewe = /** @class */ (function () {
        function Moewe(_position, _size) {
            this.position = _position;
            this.size = _size;
            var scalingFactor = this.position.y / BeachSceneAnimationAnja.crc2.canvas.height * 1 + 0.5;
            this.scale = new BeachSceneAnimationAnja.Vector(this.size.x, this.size.y);
            this.scale.scale(scalingFactor);
            this.velocity = new BeachSceneAnimationAnja.Vector((Math.random() < 0.5 ? -1 : 1) * Math.round(Math.random() * 50), (Math.random() < 0.5 ? -1 : 1) * Math.round(Math.random() * 50));
            // Counter wird angelegt um Anzahl der Bewegungen zu zählen
            this.movementCounter = 0;
            // zufälliger Wert zwischen 100 und 200 der später als maximal Wert für den MovementCounter verwendet wird
            this.changeOfDirectionCount = Math.round(Math.random() * 100) + 100;
        }
        Moewe.prototype.move = function (_timeslice) {
            // Counter wird hochgezöhlt
            this.movementCounter = this.movementCounter + 1;
            // Prüfung ob maximaler Wert für Counter schon erreicht
            if (this.movementCounter >= this.changeOfDirectionCount) {
                // wenn maximaler Wert erreicht ist, wird Counter auf 0 gesetzt
                this.movementCounter = 0;
                // in 50% der Fälle wird hier eine neue zufällige Velocity erzeugt
                if (Math.random() < 0.5) {
                    this.velocity = new BeachSceneAnimationAnja.Vector((Math.random() < 0.5 ? -1 : 1) * Math.round(Math.random() * 50), (Math.random() < 0.5 ? -1 : 1) * Math.round(Math.random() * 50));
                }
            }
            var offset = new BeachSceneAnimationAnja.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0) {
                this.position.x += BeachSceneAnimationAnja.crc2.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += BeachSceneAnimationAnja.crc2.canvas.height;
            }
            if (this.position.x > BeachSceneAnimationAnja.crc2.canvas.width) {
                this.position.x -= BeachSceneAnimationAnja.crc2.canvas.width;
            }
            if (this.position.y > BeachSceneAnimationAnja.crc2.canvas.height) {
                this.position.y -= BeachSceneAnimationAnja.crc2.canvas.height;
            }
            // Möwe je nach y Position größer oder kleiner wirken lassen
            var scalingFactor = this.position.y / BeachSceneAnimationAnja.crc2.canvas.height * 1 + 0.5;
            this.scale = new BeachSceneAnimationAnja.Vector(this.size.x, this.size.y);
            this.scale.scale(scalingFactor);
        };
        Moewe.prototype.draw = function () {
            BeachSceneAnimationAnja.crc2.save();
            BeachSceneAnimationAnja.crc2.translate(this.position.x, this.position.y);
            BeachSceneAnimationAnja.crc2.scale(this.scale.x, this.scale.y);
            BeachSceneAnimationAnja.crc2.beginPath();
            BeachSceneAnimationAnja.crc2.moveTo(0, 0);
            // crc2.moveTo(650, 100);
            BeachSceneAnimationAnja.crc2.quadraticCurveTo(35, -25, 50, 0);
            BeachSceneAnimationAnja.crc2.quadraticCurveTo(70, -25, 100, 0);
            BeachSceneAnimationAnja.crc2.quadraticCurveTo(70, -14, 50, 0);
            BeachSceneAnimationAnja.crc2.quadraticCurveTo(35, -14, 0, 0);
            BeachSceneAnimationAnja.crc2.strokeStyle = "#000000";
            BeachSceneAnimationAnja.crc2.fillStyle = "#FFFFFF";
            BeachSceneAnimationAnja.crc2.stroke();
            BeachSceneAnimationAnja.crc2.fill();
            //Kopf
            BeachSceneAnimationAnja.crc2.beginPath();
            BeachSceneAnimationAnja.crc2.arc(50, 0, 7.5, 0, 2 * Math.PI);
            BeachSceneAnimationAnja.crc2.stroke();
            BeachSceneAnimationAnja.crc2.fillStyle = "#FFFFFF";
            BeachSceneAnimationAnja.crc2.fill();
            //Schnabel
            BeachSceneAnimationAnja.crc2.beginPath();
            BeachSceneAnimationAnja.crc2.moveTo(47, 0);
            BeachSceneAnimationAnja.crc2.lineTo(50, 5);
            BeachSceneAnimationAnja.crc2.lineTo(53, 0);
            BeachSceneAnimationAnja.crc2.closePath();
            BeachSceneAnimationAnja.crc2.stroke();
            BeachSceneAnimationAnja.crc2.fillStyle = "#FF8800";
            BeachSceneAnimationAnja.crc2.fill();
            BeachSceneAnimationAnja.crc2.restore();
        };
        return Moewe;
    }());
    BeachSceneAnimationAnja.Moewe = Moewe;
})(BeachSceneAnimationAnja || (BeachSceneAnimationAnja = {}));
//# sourceMappingURL=Moewe.js.map