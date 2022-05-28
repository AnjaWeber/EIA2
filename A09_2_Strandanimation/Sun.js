var BeachSceneAnimationAnja;
(function (BeachSceneAnimationAnja) {
    var Sun = /** @class */ (function () {
        function Sun(_position) {
            this.position = _position;
        }
        Sun.prototype.draw = function () {
            BeachSceneAnimationAnja.crc2.save();
            BeachSceneAnimationAnja.crc2.translate(this.position.x, this.position.y);
            BeachSceneAnimationAnja.crc2.beginPath();
            BeachSceneAnimationAnja.crc2.arc(0, 0, 150, 0, 2 * Math.PI);
            var gradient = BeachSceneAnimationAnja.crc2.createRadialGradient(0, 0, 75, 0, 0, 150);
            gradient.addColorStop(0, "rgba(255,166,70, 0.75)");
            gradient.addColorStop(1, "rgba(255,166,70, 0)");
            BeachSceneAnimationAnja.crc2.fillStyle = gradient;
            BeachSceneAnimationAnja.crc2.fill();
            BeachSceneAnimationAnja.crc2.beginPath();
            BeachSceneAnimationAnja.crc2.arc(0, 0, 75, 0, 2 * Math.PI);
            BeachSceneAnimationAnja.crc2.fillStyle = "#ffa646";
            BeachSceneAnimationAnja.crc2.fill();
            BeachSceneAnimationAnja.crc2.restore();
        };
        return Sun;
    }());
    BeachSceneAnimationAnja.Sun = Sun;
})(BeachSceneAnimationAnja || (BeachSceneAnimationAnja = {}));
//# sourceMappingURL=Sun.js.map