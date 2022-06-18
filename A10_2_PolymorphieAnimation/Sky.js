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
    var Sky = /** @class */ (function (_super) {
        __extends(Sky, _super);
        function Sky(_position) {
            return _super.call(this, _position, new BeachScenePolymorphyAnimationAnja.Vector(0, 0)) || this;
        }
        Sky.prototype.draw = function () {
            BeachScenePolymorphyAnimationAnja.crc2.save();
            BeachScenePolymorphyAnimationAnja.crc2.translate(this.position.x, this.position.y);
            BeachScenePolymorphyAnimationAnja.crc2.beginPath();
            BeachScenePolymorphyAnimationAnja.crc2.moveTo(0, 0);
            BeachScenePolymorphyAnimationAnja.crc2.lineTo(0, 200);
            BeachScenePolymorphyAnimationAnja.crc2.lineTo(800, 200);
            BeachScenePolymorphyAnimationAnja.crc2.lineTo(800, 0);
            BeachScenePolymorphyAnimationAnja.crc2.closePath();
            var gradient = BeachScenePolymorphyAnimationAnja.crc2.createLinearGradient(0, 0, 0, 200);
            gradient.addColorStop(0, "#0047ab");
            gradient.addColorStop(.5, "#0088FF");
            gradient.addColorStop(1, "#C6E6FB");
            BeachScenePolymorphyAnimationAnja.crc2.fillStyle = gradient;
            BeachScenePolymorphyAnimationAnja.crc2.fill();
            BeachScenePolymorphyAnimationAnja.crc2.restore();
        };
        return Sky;
    }(BeachScenePolymorphyAnimationAnja.BeachElement));
    BeachScenePolymorphyAnimationAnja.Sky = Sky;
})(BeachScenePolymorphyAnimationAnja || (BeachScenePolymorphyAnimationAnja = {}));
//# sourceMappingURL=Sky.js.map