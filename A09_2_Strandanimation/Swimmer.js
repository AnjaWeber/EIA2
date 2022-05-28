var BeachSceneAnimationAnja;
(function (BeachSceneAnimationAnja) {
    var Swimmer = /** @class */ (function () {
        function Swimmer(_position, _scale) {
            this.position = _position;
            this.scale = _scale;
            this.velocity = new BeachSceneAnimationAnja.Vector(100, 0);
        }
        Swimmer.prototype.move = function (_timeslice) {
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
        };
        Swimmer.prototype.draw = function () {
            BeachSceneAnimationAnja.crc2.save();
            BeachSceneAnimationAnja.crc2.translate(this.position.x, this.position.y);
            BeachSceneAnimationAnja.crc2.scale(this.scale.x, this.scale.y);
            BeachSceneAnimationAnja.crc2.beginPath();
            BeachSceneAnimationAnja.crc2.moveTo(37.5, 20);
            BeachSceneAnimationAnja.crc2.lineTo(12.5, 37.5);
            BeachSceneAnimationAnja.crc2.lineTo(15, 45);
            BeachSceneAnimationAnja.crc2.lineTo(25, 42);
            BeachSceneAnimationAnja.crc2.lineTo(25, 57);
            BeachSceneAnimationAnja.crc2.lineTo(50, 57);
            BeachSceneAnimationAnja.crc2.lineTo(50, 42);
            BeachSceneAnimationAnja.crc2.lineTo(60, 45);
            BeachSceneAnimationAnja.crc2.lineTo(62.5, 37.5);
            BeachSceneAnimationAnja.crc2.closePath();
            BeachSceneAnimationAnja.crc2.stroke();
            BeachSceneAnimationAnja.crc2.fillStyle = "#FEC7B2";
            BeachSceneAnimationAnja.crc2.fill();
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
            BeachSceneAnimationAnja.crc2.beginPath();
            BeachSceneAnimationAnja.crc2.arc(37.5, 12.5, 12.5, 0, 2 * Math.PI);
            BeachSceneAnimationAnja.crc2.stroke();
            BeachSceneAnimationAnja.crc2.fillStyle = "#FEC7B2";
            BeachSceneAnimationAnja.crc2.fill();
            BeachSceneAnimationAnja.crc2.restore();
        };
        return Swimmer;
    }());
    BeachSceneAnimationAnja.Swimmer = Swimmer;
})(BeachSceneAnimationAnja || (BeachSceneAnimationAnja = {}));
//# sourceMappingURL=Swimmer.js.map