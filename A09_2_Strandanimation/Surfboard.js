var BeachSceneAnimationAnja;
(function (BeachSceneAnimationAnja) {
    var Surfboard = /** @class */ (function () {
        function Surfboard(_position) {
            this.position = _position;
        }
        Surfboard.prototype.move = function (_timeslice) {
            // TODO
        };
        Surfboard.prototype.draw = function () {
            BeachSceneAnimationAnja.crc2.save();
            BeachSceneAnimationAnja.crc2.translate(this.position.x, this.position.y);
            BeachSceneAnimationAnja.crc2.beginPath();
            BeachSceneAnimationAnja.crc2.ellipse(0, 0, 25, 60, Math.PI / 3, 0, 2 * Math.PI);
            BeachSceneAnimationAnja.crc2.stroke();
            BeachSceneAnimationAnja.crc2.fillStyle = "#FFFF99";
            BeachSceneAnimationAnja.crc2.fill();
            BeachSceneAnimationAnja.crc2.restore();
        };
        return Surfboard;
    }());
    BeachSceneAnimationAnja.Surfboard = Surfboard;
})(BeachSceneAnimationAnja || (BeachSceneAnimationAnja = {}));
//# sourceMappingURL=Surfboard.js.map