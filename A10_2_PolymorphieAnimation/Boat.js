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
    var Boat = /** @class */ (function (_super) {
        __extends(Boat, _super);
        function Boat(_position, _scale, _color, _velocity) {
            var _this = _super.call(this, _position, _velocity) || this;
            _this.scale = _scale;
            _this.color = _color;
            return _this;
        }
        Boat.prototype.draw = function () {
            BeachScenePolymorphyAnimationAnja.crc2.save();
            BeachScenePolymorphyAnimationAnja.crc2.translate(this.position.x, this.position.y);
            BeachScenePolymorphyAnimationAnja.crc2.scale(this.scale.x, this.scale.y);
            BeachScenePolymorphyAnimationAnja.crc2.beginPath();
            BeachScenePolymorphyAnimationAnja.crc2.moveTo(0, 75);
            BeachScenePolymorphyAnimationAnja.crc2.bezierCurveTo(25, 110, 75, 110, 100, 75);
            BeachScenePolymorphyAnimationAnja.crc2.closePath();
            BeachScenePolymorphyAnimationAnja.crc2.stroke();
            BeachScenePolymorphyAnimationAnja.crc2.fillStyle = this.color;
            BeachScenePolymorphyAnimationAnja.crc2.fill();
            BeachScenePolymorphyAnimationAnja.crc2.beginPath();
            BeachScenePolymorphyAnimationAnja.crc2.moveTo(50, 25);
            BeachScenePolymorphyAnimationAnja.crc2.lineTo(75, 50);
            BeachScenePolymorphyAnimationAnja.crc2.lineTo(50, 50);
            BeachScenePolymorphyAnimationAnja.crc2.closePath();
            BeachScenePolymorphyAnimationAnja.crc2.stroke();
            BeachScenePolymorphyAnimationAnja.crc2.fillStyle = "#fffff0";
            BeachScenePolymorphyAnimationAnja.crc2.fill();
            BeachScenePolymorphyAnimationAnja.crc2.beginPath();
            BeachScenePolymorphyAnimationAnja.crc2.moveTo(50, 75);
            BeachScenePolymorphyAnimationAnja.crc2.lineTo(50, 25);
            BeachScenePolymorphyAnimationAnja.crc2.strokeStyle = "#5b3a29";
            BeachScenePolymorphyAnimationAnja.crc2.stroke();
            BeachScenePolymorphyAnimationAnja.crc2.restore();
        };
        return Boat;
    }(BeachScenePolymorphyAnimationAnja.BeachElement));
    BeachScenePolymorphyAnimationAnja.Boat = Boat;
})(BeachScenePolymorphyAnimationAnja || (BeachScenePolymorphyAnimationAnja = {}));
//# sourceMappingURL=Boat.js.map