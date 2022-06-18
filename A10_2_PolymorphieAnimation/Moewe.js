// Quellen: https://stackoverflow.com/questions/8611830/javascript-random-positive-or-negative-number
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BeachScenePolymorphyAnimationAnja;
(function (BeachScenePolymorphyAnimationAnja) {
    var Moewe = /** @class */ (function (_super) {
        __extends(Moewe, _super);
        function Moewe(_position, _size, _velocity) {
            var _this = this;
            var velocity = new BeachScenePolymorphyAnimationAnja.Vector((Math.random() < 0.5 ? -1 : 1) * Math.random() * _velocity.x, (Math.random() < 0.5 ? -1 : 1) * Math.random() * _velocity.y);
            _this = _super.call(this, _position, velocity) || this;
            _this.originalVelocity = _velocity;
            _this.size = _size;
            var scalingFactor = _this.position.y / BeachScenePolymorphyAnimationAnja.crc2.canvas.height * 1 + 0.5;
            _this.scale = new BeachScenePolymorphyAnimationAnja.Vector(_this.size.x, _this.size.y);
            _this.scale.scale(scalingFactor);
            // Counter wird angelegt um Anzahl der Bewegungen zu zählen
            _this.movementCounter = 0;
            // zufälliger Wert zwischen 100 und 200 der später als maximal Wert für den MovementCounter verwendet wird
            _this.changeOfDirectionCount = Math.round(Math.random() * 100) + 100;
            return _this;
        }
        Moewe.prototype.move = function (_timeslice) {
            // Counter wird hochgezählt
            this.movementCounter = this.movementCounter + 1;
            // Prüfung ob maximaler Wert für Counter schon erreicht
            if (this.movementCounter >= this.changeOfDirectionCount) {
                // wenn maximaler Wert erreicht ist, wird Counter auf 0 gesetzt
                this.movementCounter = 0;
                // in 50% der Fälle wird hier eine neue zufällige Velocity erzeugt
                if (Math.random() < 0.5) {
                    this.velocity = new BeachScenePolymorphyAnimationAnja.Vector((Math.random() < 0.5 ? -1 : 1) * Math.random() * this.originalVelocity.x, (Math.random() < 0.5 ? -1 : 1) * Math.random() * this.originalVelocity.y);
                }
            }
            _super.prototype.move.call(this, _timeslice);
            // Möwe je nach y Position größer oder kleiner wirken lassen
            var scalingFactor = this.position.y / BeachScenePolymorphyAnimationAnja.crc2.canvas.height * 1 + 0.5;
            this.scale = new BeachScenePolymorphyAnimationAnja.Vector(this.size.x, this.size.y);
            this.scale.scale(scalingFactor);
        };
        Moewe.prototype.draw = function () {
            BeachScenePolymorphyAnimationAnja.crc2.save();
            BeachScenePolymorphyAnimationAnja.crc2.translate(this.position.x, this.position.y);
            BeachScenePolymorphyAnimationAnja.crc2.scale(this.scale.x, this.scale.y);
            BeachScenePolymorphyAnimationAnja.crc2.beginPath();
            BeachScenePolymorphyAnimationAnja.crc2.moveTo(0, 0);
            // crc2.moveTo(650, 100);
            BeachScenePolymorphyAnimationAnja.crc2.quadraticCurveTo(35, -25, 50, 0);
            BeachScenePolymorphyAnimationAnja.crc2.quadraticCurveTo(70, -25, 100, 0);
            BeachScenePolymorphyAnimationAnja.crc2.quadraticCurveTo(70, -14, 50, 0);
            BeachScenePolymorphyAnimationAnja.crc2.quadraticCurveTo(35, -14, 0, 0);
            BeachScenePolymorphyAnimationAnja.crc2.strokeStyle = "#000000";
            BeachScenePolymorphyAnimationAnja.crc2.fillStyle = "#FFFFFF";
            BeachScenePolymorphyAnimationAnja.crc2.stroke();
            BeachScenePolymorphyAnimationAnja.crc2.fill();
            //Kopf
            BeachScenePolymorphyAnimationAnja.crc2.beginPath();
            BeachScenePolymorphyAnimationAnja.crc2.arc(50, 0, 7.5, 0, 2 * Math.PI);
            BeachScenePolymorphyAnimationAnja.crc2.stroke();
            BeachScenePolymorphyAnimationAnja.crc2.fillStyle = "#FFFFFF";
            BeachScenePolymorphyAnimationAnja.crc2.fill();
            //Schnabel
            BeachScenePolymorphyAnimationAnja.crc2.beginPath();
            BeachScenePolymorphyAnimationAnja.crc2.moveTo(47, 0);
            BeachScenePolymorphyAnimationAnja.crc2.lineTo(50, 5);
            BeachScenePolymorphyAnimationAnja.crc2.lineTo(53, 0);
            BeachScenePolymorphyAnimationAnja.crc2.closePath();
            BeachScenePolymorphyAnimationAnja.crc2.stroke();
            BeachScenePolymorphyAnimationAnja.crc2.fillStyle = "#FF8800";
            BeachScenePolymorphyAnimationAnja.crc2.fill();
            BeachScenePolymorphyAnimationAnja.crc2.restore();
        };
        return Moewe;
    }(BeachScenePolymorphyAnimationAnja.BeachElement));
    BeachScenePolymorphyAnimationAnja.Moewe = Moewe;
})(BeachScenePolymorphyAnimationAnja || (BeachScenePolymorphyAnimationAnja = {}));
//# sourceMappingURL=Moewe.js.map