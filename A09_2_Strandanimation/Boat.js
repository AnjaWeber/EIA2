var BeachSceneAnimationAnja;
(function (BeachSceneAnimationAnja) {
    var Boat = /** @class */ (function () {
        function Boat(_position, _scale, _color) {
            this.position = _position;
            this.scale = _scale;
            this.color = _color;
            this.velocity = new BeachSceneAnimationAnja.Vector(100, 0);
        }
        Boat.prototype.move = function (_timeslice) {
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
        Boat.prototype.draw = function () {
            BeachSceneAnimationAnja.crc2.save();
            BeachSceneAnimationAnja.crc2.translate(this.position.x, this.position.y);
            BeachSceneAnimationAnja.crc2.scale(this.scale.x, this.scale.y);
            BeachSceneAnimationAnja.crc2.beginPath();
            BeachSceneAnimationAnja.crc2.moveTo(0, 75);
            BeachSceneAnimationAnja.crc2.bezierCurveTo(25, 110, 75, 110, 100, 75);
            BeachSceneAnimationAnja.crc2.closePath();
            BeachSceneAnimationAnja.crc2.stroke();
            BeachSceneAnimationAnja.crc2.fillStyle = this.color;
            BeachSceneAnimationAnja.crc2.fill();
            BeachSceneAnimationAnja.crc2.beginPath();
            BeachSceneAnimationAnja.crc2.moveTo(50, 25);
            BeachSceneAnimationAnja.crc2.lineTo(75, 50);
            BeachSceneAnimationAnja.crc2.lineTo(50, 50);
            BeachSceneAnimationAnja.crc2.closePath();
            BeachSceneAnimationAnja.crc2.stroke();
            BeachSceneAnimationAnja.crc2.fillStyle = "#fffff0";
            BeachSceneAnimationAnja.crc2.fill();
            BeachSceneAnimationAnja.crc2.beginPath();
            BeachSceneAnimationAnja.crc2.moveTo(50, 75);
            BeachSceneAnimationAnja.crc2.lineTo(50, 25);
            BeachSceneAnimationAnja.crc2.strokeStyle = "#5b3a29";
            BeachSceneAnimationAnja.crc2.stroke();
            BeachSceneAnimationAnja.crc2.restore();
        };
        return Boat;
    }());
    BeachSceneAnimationAnja.Boat = Boat;
})(BeachSceneAnimationAnja || (BeachSceneAnimationAnja = {}));
//# sourceMappingURL=Boat.js.map