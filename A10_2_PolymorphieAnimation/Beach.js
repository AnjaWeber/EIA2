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
    var Beach = /** @class */ (function (_super) {
        __extends(Beach, _super);
        function Beach(_position) {
            return _super.call(this, _position, new BeachScenePolymorphyAnimationAnja.Vector(0, 0)) || this;
        }
        Beach.prototype.draw = function () {
            BeachScenePolymorphyAnimationAnja.crc2.save();
            BeachScenePolymorphyAnimationAnja.crc2.translate(this.position.x, this.position.y);
            BeachScenePolymorphyAnimationAnja.crc2.beginPath();
            BeachScenePolymorphyAnimationAnja.crc2.moveTo(0, 0);
            BeachScenePolymorphyAnimationAnja.crc2.bezierCurveTo(200, 100, 600, 130, 800, 40);
            BeachScenePolymorphyAnimationAnja.crc2.lineTo(800, 300);
            BeachScenePolymorphyAnimationAnja.crc2.lineTo(0, 300);
            BeachScenePolymorphyAnimationAnja.crc2.closePath();
            BeachScenePolymorphyAnimationAnja.crc2.fillStyle = "#fbdea4";
            BeachScenePolymorphyAnimationAnja.crc2.fill();
            BeachScenePolymorphyAnimationAnja.crc2.restore();
        };
        return Beach;
    }(BeachScenePolymorphyAnimationAnja.BeachElement));
    BeachScenePolymorphyAnimationAnja.Beach = Beach;
})(BeachScenePolymorphyAnimationAnja || (BeachScenePolymorphyAnimationAnja = {}));
//# sourceMappingURL=Beach.js.map