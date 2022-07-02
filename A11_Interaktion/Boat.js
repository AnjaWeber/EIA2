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
var BeachSceneInteractionAnja;
(function (BeachSceneInteractionAnja) {
    var Boat = /** @class */ (function (_super) {
        __extends(Boat, _super);
        function Boat(_position, _scale, _color, _velocity) {
            var _this = this;
            var hitBoxTopLeft = new BeachSceneInteractionAnja.Vector(0, 0);
            var hitBoxBottomRight = new BeachSceneInteractionAnja.Vector(100, 110);
            hitBoxBottomRight.scaleWithVector(_scale);
            _this = _super.call(this, _position, _velocity, hitBoxTopLeft, hitBoxBottomRight) || this;
            _this.scale = _scale;
            _this.color = _color;
            return _this;
        }
        Boat.prototype.draw = function () {
            BeachSceneInteractionAnja.crc2.save();
            BeachSceneInteractionAnja.crc2.translate(this.position.x, this.position.y);
            BeachSceneInteractionAnja.crc2.scale(this.scale.x, this.scale.y);
            BeachSceneInteractionAnja.crc2.beginPath();
            BeachSceneInteractionAnja.crc2.moveTo(0, 75);
            BeachSceneInteractionAnja.crc2.bezierCurveTo(25, 110, 75, 110, 100, 75);
            BeachSceneInteractionAnja.crc2.closePath();
            BeachSceneInteractionAnja.crc2.stroke();
            BeachSceneInteractionAnja.crc2.fillStyle = this.color;
            BeachSceneInteractionAnja.crc2.fill();
            BeachSceneInteractionAnja.crc2.beginPath();
            BeachSceneInteractionAnja.crc2.moveTo(50, 25);
            BeachSceneInteractionAnja.crc2.lineTo(75, 50);
            BeachSceneInteractionAnja.crc2.lineTo(50, 50);
            BeachSceneInteractionAnja.crc2.closePath();
            BeachSceneInteractionAnja.crc2.stroke();
            BeachSceneInteractionAnja.crc2.fillStyle = "#fffff0";
            BeachSceneInteractionAnja.crc2.fill();
            BeachSceneInteractionAnja.crc2.beginPath();
            BeachSceneInteractionAnja.crc2.moveTo(50, 75);
            BeachSceneInteractionAnja.crc2.lineTo(50, 25);
            BeachSceneInteractionAnja.crc2.strokeStyle = "#5b3a29";
            BeachSceneInteractionAnja.crc2.stroke();
            BeachSceneInteractionAnja.crc2.restore();
        };
        Boat.prototype.click = function () {
            this.velocity.scale(-1);
        };
        return Boat;
    }(BeachSceneInteractionAnja.BeachElement));
    BeachSceneInteractionAnja.Boat = Boat;
})(BeachSceneInteractionAnja || (BeachSceneInteractionAnja = {}));
//# sourceMappingURL=Boat.js.map