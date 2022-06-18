var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BeachScenePolymorphyAnimationAnja;
(function (BeachScenePolymorphyAnimationAnja) {
    var Bush = /** @class */ (function (_super) {
        __extends(Bush, _super);
        function Bush(_position, _size) {
            var _this = _super.call(this, _position, new BeachScenePolymorphyAnimationAnja.Vector(0, 0)) || this;
            _this.size = _size;
            _this.particlesCount = 90;
            _this.randomValuesX = [];
            _this.randomValuesY = [];
            for (var i = 0; i < _this.particlesCount; i++) {
                _this.randomValuesX.push(Math.random());
                _this.randomValuesY.push(Math.random());
            }
            return _this;
        }
        Bush.prototype.draw = function () {
            var radiusParticle = 20;
            var particle = new Path2D();
            var gradient = BeachScenePolymorphyAnimationAnja.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "#183812");
            gradient.addColorStop(1, "#407029");
            BeachScenePolymorphyAnimationAnja.crc2.save();
            BeachScenePolymorphyAnimationAnja.crc2.translate(this.position.x, this.position.y);
            BeachScenePolymorphyAnimationAnja.crc2.fillStyle = gradient;
            for (var i = 0; i < this.particlesCount; i++) {
                BeachScenePolymorphyAnimationAnja.crc2.save();
                var x = (this.randomValuesX[i] - 0.5) * this.size.x;
                var y = -(this.randomValuesY[i] * this.size.y);
                BeachScenePolymorphyAnimationAnja.crc2.translate(x, y);
                BeachScenePolymorphyAnimationAnja.crc2.fill(particle);
                BeachScenePolymorphyAnimationAnja.crc2.restore();
            }
            BeachScenePolymorphyAnimationAnja.crc2.restore();
        };
        return Bush;
    }(BeachScenePolymorphyAnimationAnja.BeachElement));
    BeachScenePolymorphyAnimationAnja.Bush = Bush;
})(BeachScenePolymorphyAnimationAnja || (BeachScenePolymorphyAnimationAnja = {}));
//# sourceMappingURL=Bush.js.map