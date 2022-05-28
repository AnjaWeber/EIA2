var BeachSceneAnimationAnja;
(function (BeachSceneAnimationAnja) {
    var Bush = /** @class */ (function () {
        function Bush(_position, _size) {
            this.position = _position;
            this.size = _size;
            this.particlesCount = 90;
            this.randomValuesX = [];
            this.randomValuesY = [];
            for (var i = 0; i < this.particlesCount; i++) {
                this.randomValuesX.push(Math.random());
                this.randomValuesY.push(Math.random());
            }
        }
        Bush.prototype.draw = function () {
            var radiusParticle = 20;
            var particle = new Path2D();
            var gradient = BeachSceneAnimationAnja.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "#183812");
            gradient.addColorStop(1, "#407029");
            BeachSceneAnimationAnja.crc2.save();
            BeachSceneAnimationAnja.crc2.translate(this.position.x, this.position.y);
            BeachSceneAnimationAnja.crc2.fillStyle = gradient;
            for (var i = 0; i < this.particlesCount; i++) {
                BeachSceneAnimationAnja.crc2.save();
                var x = (this.randomValuesX[i] - 0.5) * this.size.x;
                var y = -(this.randomValuesY[i] * this.size.y);
                BeachSceneAnimationAnja.crc2.translate(x, y);
                BeachSceneAnimationAnja.crc2.fill(particle);
                BeachSceneAnimationAnja.crc2.restore();
            }
            BeachSceneAnimationAnja.crc2.restore();
        };
        return Bush;
    }());
    BeachSceneAnimationAnja.Bush = Bush;
})(BeachSceneAnimationAnja || (BeachSceneAnimationAnja = {}));
//# sourceMappingURL=Bush.js.map