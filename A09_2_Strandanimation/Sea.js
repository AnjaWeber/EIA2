var BeachSceneAnimationAnja;
(function (BeachSceneAnimationAnja) {
    var Sea = /** @class */ (function () {
        function Sea(_position) {
            this.position = _position;
        }
        Sea.prototype.draw = function () {
            BeachSceneAnimationAnja.crc2.save();
            BeachSceneAnimationAnja.crc2.translate(this.position.x, this.position.y);
            BeachSceneAnimationAnja.crc2.beginPath();
            BeachSceneAnimationAnja.crc2.moveTo(0, 0);
            BeachSceneAnimationAnja.crc2.lineTo(0, 300);
            BeachSceneAnimationAnja.crc2.lineTo(800, 300);
            BeachSceneAnimationAnja.crc2.lineTo(800, 0);
            BeachSceneAnimationAnja.crc2.closePath();
            var gradient = BeachSceneAnimationAnja.crc2.createLinearGradient(0, 0, 0, 300);
            gradient.addColorStop(0, "#7bb5d8");
            gradient.addColorStop(.5, "#3976a3");
            gradient.addColorStop(1, "#2bb8c3");
            BeachSceneAnimationAnja.crc2.fillStyle = gradient;
            BeachSceneAnimationAnja.crc2.fill();
            BeachSceneAnimationAnja.crc2.restore();
        };
        return Sea;
    }());
    BeachSceneAnimationAnja.Sea = Sea;
})(BeachSceneAnimationAnja || (BeachSceneAnimationAnja = {}));
//# sourceMappingURL=Sea.js.map