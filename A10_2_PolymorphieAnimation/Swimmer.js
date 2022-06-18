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
    var Swimmer = /** @class */ (function (_super) {
        __extends(Swimmer, _super);
        function Swimmer(_position, _scale, _velocity) {
            var _this = _super.call(this, _position, _velocity) || this;
            _this.scale = _scale;
            return _this;
        }
        Swimmer.prototype.draw = function () {
            BeachScenePolymorphyAnimationAnja.crc2.save();
            BeachScenePolymorphyAnimationAnja.crc2.translate(this.position.x, this.position.y);
            BeachScenePolymorphyAnimationAnja.crc2.scale(this.scale.x, this.scale.y);
            BeachScenePolymorphyAnimationAnja.crc2.beginPath();
            BeachScenePolymorphyAnimationAnja.crc2.moveTo(37.5, 20);
            BeachScenePolymorphyAnimationAnja.crc2.lineTo(12.5, 37.5);
            BeachScenePolymorphyAnimationAnja.crc2.lineTo(15, 45);
            BeachScenePolymorphyAnimationAnja.crc2.lineTo(25, 42);
            BeachScenePolymorphyAnimationAnja.crc2.lineTo(25, 57);
            BeachScenePolymorphyAnimationAnja.crc2.lineTo(50, 57);
            BeachScenePolymorphyAnimationAnja.crc2.lineTo(50, 42);
            BeachScenePolymorphyAnimationAnja.crc2.lineTo(60, 45);
            BeachScenePolymorphyAnimationAnja.crc2.lineTo(62.5, 37.5);
            BeachScenePolymorphyAnimationAnja.crc2.closePath();
            BeachScenePolymorphyAnimationAnja.crc2.stroke();
            BeachScenePolymorphyAnimationAnja.crc2.fillStyle = "#FEC7B2";
            BeachScenePolymorphyAnimationAnja.crc2.fill();
            BeachScenePolymorphyAnimationAnja.crc2.beginPath();
            BeachScenePolymorphyAnimationAnja.crc2.arc(12.5, 42, 5, 0, 2 * Math.PI);
            BeachScenePolymorphyAnimationAnja.crc2.stroke();
            BeachScenePolymorphyAnimationAnja.crc2.fillStyle = "#FEC7B2";
            BeachScenePolymorphyAnimationAnja.crc2.fill();
            BeachScenePolymorphyAnimationAnja.crc2.beginPath();
            BeachScenePolymorphyAnimationAnja.crc2.arc(62.5, 42, 5, 0, 2 * Math.PI);
            BeachScenePolymorphyAnimationAnja.crc2.stroke();
            BeachScenePolymorphyAnimationAnja.crc2.fillStyle = "#FEC7B2";
            BeachScenePolymorphyAnimationAnja.crc2.fill();
            BeachScenePolymorphyAnimationAnja.crc2.beginPath();
            BeachScenePolymorphyAnimationAnja.crc2.arc(37.5, 12.5, 12.5, 0, 2 * Math.PI);
            BeachScenePolymorphyAnimationAnja.crc2.stroke();
            BeachScenePolymorphyAnimationAnja.crc2.fillStyle = "#FEC7B2";
            BeachScenePolymorphyAnimationAnja.crc2.fill();
            BeachScenePolymorphyAnimationAnja.crc2.restore();
        };
        return Swimmer;
    }(BeachScenePolymorphyAnimationAnja.BeachElement));
    BeachScenePolymorphyAnimationAnja.Swimmer = Swimmer;
})(BeachScenePolymorphyAnimationAnja || (BeachScenePolymorphyAnimationAnja = {}));
//# sourceMappingURL=Swimmer.js.map