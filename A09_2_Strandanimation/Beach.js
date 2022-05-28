var BeachSceneAnimationAnja;
(function (BeachSceneAnimationAnja) {
    var Beach = /** @class */ (function () {
        function Beach(_position) {
            this.position = _position;
        }
        Beach.prototype.draw = function () {
            BeachSceneAnimationAnja.crc2.save();
            BeachSceneAnimationAnja.crc2.translate(this.position.x, this.position.y);
            BeachSceneAnimationAnja.crc2.beginPath();
            BeachSceneAnimationAnja.crc2.moveTo(0, 0);
            BeachSceneAnimationAnja.crc2.bezierCurveTo(200, 100, 600, 130, 800, 40);
            BeachSceneAnimationAnja.crc2.lineTo(800, 300);
            BeachSceneAnimationAnja.crc2.lineTo(0, 300);
            BeachSceneAnimationAnja.crc2.closePath();
            BeachSceneAnimationAnja.crc2.fillStyle = "#fbdea4";
            BeachSceneAnimationAnja.crc2.fill();
            BeachSceneAnimationAnja.crc2.restore();
        };
        return Beach;
    }());
    BeachSceneAnimationAnja.Beach = Beach;
})(BeachSceneAnimationAnja || (BeachSceneAnimationAnja = {}));
//# sourceMappingURL=Beach.js.map