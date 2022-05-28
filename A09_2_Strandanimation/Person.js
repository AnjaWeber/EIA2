var BeachSceneAnimationAnja;
(function (BeachSceneAnimationAnja) {
    var Person = /** @class */ (function () {
        function Person(_position, _clothes, _color) {
            this.position = _position;
            this.clothes = _clothes;
            this.color = _color;
        }
        Person.prototype.move = function (_timeslice) {
            // TODO
        };
        Person.prototype.draw = function () {
            // Hände
            BeachSceneAnimationAnja.crc2.save();
            BeachSceneAnimationAnja.crc2.translate(this.position.x, this.position.y);
            BeachSceneAnimationAnja.crc2.beginPath();
            BeachSceneAnimationAnja.crc2.arc(12.5, 42, 5, 0, 2 * Math.PI);
            BeachSceneAnimationAnja.crc2.stroke();
            BeachSceneAnimationAnja.crc2.fillStyle = "#FEC7B2";
            BeachSceneAnimationAnja.crc2.fill();
            BeachSceneAnimationAnja.crc2.beginPath();
            BeachSceneAnimationAnja.crc2.arc(62.5, 42, 5, 0, 2 * Math.PI);
            BeachSceneAnimationAnja.crc2.stroke();
            BeachSceneAnimationAnja.crc2.fillStyle = "#FEC7B2";
            BeachSceneAnimationAnja.crc2.fill();
            // Füße
            BeachSceneAnimationAnja.crc2.beginPath();
            BeachSceneAnimationAnja.crc2.arc(30, 88, 5.5, 0, 2 * Math.PI);
            BeachSceneAnimationAnja.crc2.stroke();
            BeachSceneAnimationAnja.crc2.fillStyle = "#FEC7B2";
            BeachSceneAnimationAnja.crc2.fill();
            BeachSceneAnimationAnja.crc2.beginPath();
            BeachSceneAnimationAnja.crc2.arc(45, 88, 5.5, 0, 2 * Math.PI);
            BeachSceneAnimationAnja.crc2.stroke();
            BeachSceneAnimationAnja.crc2.fillStyle = "#FEC7B2";
            BeachSceneAnimationAnja.crc2.fill();
            //shirt/skirt
            BeachSceneAnimationAnja.crc2.beginPath();
            BeachSceneAnimationAnja.crc2.moveTo(37.5, 20);
            BeachSceneAnimationAnja.crc2.lineTo(12.5, 37.5);
            BeachSceneAnimationAnja.crc2.lineTo(15, 45);
            BeachSceneAnimationAnja.crc2.lineTo(25, 42);
            if (this.clothes === "shirt") {
                BeachSceneAnimationAnja.crc2.lineTo(22, 57);
                BeachSceneAnimationAnja.crc2.lineTo(53, 57);
            }
            else {
                BeachSceneAnimationAnja.crc2.lineTo(20, 87.5);
                BeachSceneAnimationAnja.crc2.lineTo(55, 87.5);
            }
            BeachSceneAnimationAnja.crc2.lineTo(50, 42);
            BeachSceneAnimationAnja.crc2.lineTo(60, 45);
            BeachSceneAnimationAnja.crc2.lineTo(62.5, 37.5);
            BeachSceneAnimationAnja.crc2.closePath();
            BeachSceneAnimationAnja.crc2.stroke();
            BeachSceneAnimationAnja.crc2.fillStyle = this.color;
            BeachSceneAnimationAnja.crc2.fill();
            if (this.clothes === "shirt") {
                // hose
                BeachSceneAnimationAnja.crc2.beginPath();
                BeachSceneAnimationAnja.crc2.moveTo(25, 57);
                BeachSceneAnimationAnja.crc2.lineTo(27, 87.5);
                BeachSceneAnimationAnja.crc2.lineTo(35, 87.5);
                BeachSceneAnimationAnja.crc2.lineTo(36, 63);
                BeachSceneAnimationAnja.crc2.lineTo(39, 63);
                BeachSceneAnimationAnja.crc2.lineTo(40, 87.5);
                BeachSceneAnimationAnja.crc2.lineTo(48, 87.5);
                BeachSceneAnimationAnja.crc2.lineTo(50, 57);
                BeachSceneAnimationAnja.crc2.closePath();
                BeachSceneAnimationAnja.crc2.stroke();
                BeachSceneAnimationAnja.crc2.fillStyle = "#343F51";
                BeachSceneAnimationAnja.crc2.fill();
            }
            // Kopf
            BeachSceneAnimationAnja.crc2.beginPath();
            BeachSceneAnimationAnja.crc2.arc(37.5, 12.5, 12.5, 0, 2 * Math.PI);
            BeachSceneAnimationAnja.crc2.stroke();
            BeachSceneAnimationAnja.crc2.fillStyle = "#FEC7B2";
            BeachSceneAnimationAnja.crc2.fill();
            BeachSceneAnimationAnja.crc2.restore();
        };
        return Person;
    }());
    BeachSceneAnimationAnja.Person = Person;
})(BeachSceneAnimationAnja || (BeachSceneAnimationAnja = {}));
//# sourceMappingURL=Person.js.map