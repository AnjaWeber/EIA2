var BeachSceneAnimationAnja;
(function (BeachSceneAnimationAnja) {
    var Cloud = /** @class */ (function () {
        function Cloud(_position, _size) {
            this.position = _position;
            this.size = _size;
            this.velocity = new BeachSceneAnimationAnja.Vector(50, 0);
            this.particlesCount = 90;
            this.randomValuesX = [];
            this.randomValuesY = [];
            for (var i = 0; i < this.particlesCount; i++) {
                this.randomValuesX.push(Math.random());
                this.randomValuesY.push(Math.random());
            }
        }
        Cloud.prototype.move = function (_timeslice) {
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
        Cloud.prototype.draw = function () {
            var radiusParticle = 20;
            var particle = new Path2D();
            var gradient = BeachSceneAnimationAnja.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
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
        return Cloud;
    }());
    BeachSceneAnimationAnja.Cloud = Cloud;
})(BeachSceneAnimationAnja || (BeachSceneAnimationAnja = {}));
//# sourceMappingURL=Cloud.js.map