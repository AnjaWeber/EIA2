var BeachSceneAnimationAnja;
(function (BeachSceneAnimationAnja) {
    var Sky = /** @class */ (function () {
        function Sky(_position) {
            this.position = _position;
        }
        Sky.prototype.draw = function () {
            BeachSceneAnimationAnja.crc2.save();
            BeachSceneAnimationAnja.crc2.translate(this.position.x, this.position.y);
            BeachSceneAnimationAnja.crc2.beginPath();
            BeachSceneAnimationAnja.crc2.moveTo(0, 0);
            BeachSceneAnimationAnja.crc2.lineTo(0, 200);
            BeachSceneAnimationAnja.crc2.lineTo(800, 200);
            BeachSceneAnimationAnja.crc2.lineTo(800, 0);
            BeachSceneAnimationAnja.crc2.closePath();
            var gradient = BeachSceneAnimationAnja.crc2.createLinearGradient(0, 0, 0, 200);
            gradient.addColorStop(0, "#0047ab");
            gradient.addColorStop(.5, "#0088FF");
            gradient.addColorStop(1, "#C6E6FB");
            BeachSceneAnimationAnja.crc2.fillStyle = gradient;
            BeachSceneAnimationAnja.crc2.fill();
            BeachSceneAnimationAnja.crc2.restore();
        };
        return Sky;
    }());
    BeachSceneAnimationAnja.Sky = Sky;
})(BeachSceneAnimationAnja || (BeachSceneAnimationAnja = {}));
//# sourceMappingURL=Sky.js.map