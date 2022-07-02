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
    var Swimmer = /** @class */ (function (_super) {
        __extends(Swimmer, _super);
        function Swimmer(_position, _scale, _velocity) {
            var _this = this;
            var hitBoxTopLeft = new BeachSceneInteractionAnja.Vector(7.5, 0);
            var hitBoxBottomRight = new BeachSceneInteractionAnja.Vector(67.5, 57);
            _this = _super.call(this, _position, _velocity, hitBoxTopLeft, hitBoxBottomRight) || this;
            _this.scale = _scale;
            _this.swimmingTimesliceCount = 0;
            return _this;
        }
        Swimmer.prototype.draw = function () {
            BeachSceneInteractionAnja.crc2.save();
            BeachSceneInteractionAnja.crc2.translate(this.position.x, this.position.y);
            BeachSceneInteractionAnja.crc2.scale(this.scale.x, this.scale.y);
            BeachSceneInteractionAnja.crc2.beginPath();
            BeachSceneInteractionAnja.crc2.moveTo(37.5, 20);
            BeachSceneInteractionAnja.crc2.lineTo(12.5, 37.5);
            BeachSceneInteractionAnja.crc2.lineTo(15, 45);
            BeachSceneInteractionAnja.crc2.lineTo(25, 42);
            BeachSceneInteractionAnja.crc2.lineTo(25, 57);
            BeachSceneInteractionAnja.crc2.lineTo(50, 57);
            BeachSceneInteractionAnja.crc2.lineTo(50, 42);
            BeachSceneInteractionAnja.crc2.lineTo(60, 45);
            BeachSceneInteractionAnja.crc2.lineTo(62.5, 37.5);
            BeachSceneInteractionAnja.crc2.closePath();
            BeachSceneInteractionAnja.crc2.stroke();
            BeachSceneInteractionAnja.crc2.fillStyle = "#FEC7B2";
            BeachSceneInteractionAnja.crc2.fill();
            BeachSceneInteractionAnja.crc2.beginPath();
            BeachSceneInteractionAnja.crc2.arc(12.5, 42, 5, 0, 2 * Math.PI);
            BeachSceneInteractionAnja.crc2.stroke();
            BeachSceneInteractionAnja.crc2.fillStyle = "#FEC7B2";
            BeachSceneInteractionAnja.crc2.fill();
            BeachSceneInteractionAnja.crc2.beginPath();
            BeachSceneInteractionAnja.crc2.arc(62.5, 42, 5, 0, 2 * Math.PI);
            BeachSceneInteractionAnja.crc2.stroke();
            BeachSceneInteractionAnja.crc2.fillStyle = "#FEC7B2";
            BeachSceneInteractionAnja.crc2.fill();
            BeachSceneInteractionAnja.crc2.beginPath();
            BeachSceneInteractionAnja.crc2.arc(37.5, 12.5, 12.5, 0, 2 * Math.PI);
            BeachSceneInteractionAnja.crc2.stroke();
            BeachSceneInteractionAnja.crc2.fillStyle = "#FEC7B2";
            BeachSceneInteractionAnja.crc2.fill();
            BeachSceneInteractionAnja.crc2.restore();
        };
        Swimmer.prototype.move = function (_timeslice) {
            if (this.swimmingTimesliceCount >= 250) {
                this.swimmingTimesliceCount = 0;
                this.isSwimming = false;
                this.position = new BeachSceneInteractionAnja.Vector(this.originalPosition.x, this.originalPosition.y);
            }
            if (this.isSwimming) {
                var x = Math.sin(((2 * Math.PI) / 250) * this.swimmingTimesliceCount) * 75;
                var y = Math.cos(((2 * Math.PI) / 250) * this.swimmingTimesliceCount) * 15 - 15;
                this.position = new BeachSceneInteractionAnja.Vector(this.originalPosition.x + x, this.originalPosition.y + y);
                this.swimmingTimesliceCount++;
            }
            else {
                _super.prototype.move.call(this, _timeslice);
            }
        };
        Swimmer.prototype.click = function () {
            if (!this.isSwimming) {
                this.originalPosition = new BeachSceneInteractionAnja.Vector(this.position.x, this.position.y);
                this.isSwimming = true;
            }
            console.log("SWIMMER");
        };
        return Swimmer;
    }(BeachSceneInteractionAnja.BeachElement));
    BeachSceneInteractionAnja.Swimmer = Swimmer;
})(BeachSceneInteractionAnja || (BeachSceneInteractionAnja = {}));
//# sourceMappingURL=Swimmer.js.map