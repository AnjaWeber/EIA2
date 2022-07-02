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
    var Beach = /** @class */ (function (_super) {
        __extends(Beach, _super);
        function Beach(_position) {
            return _super.call(this, _position, new BeachSceneInteractionAnja.Vector(0, 0), new BeachSceneInteractionAnja.Vector(0, 0), new BeachSceneInteractionAnja.Vector(0, 0)) || this;
        }
        Beach.prototype.draw = function () {
            BeachSceneInteractionAnja.crc2.save();
            BeachSceneInteractionAnja.crc2.translate(this.position.x, this.position.y);
            BeachSceneInteractionAnja.crc2.beginPath();
            BeachSceneInteractionAnja.crc2.moveTo(0, 0);
            BeachSceneInteractionAnja.crc2.bezierCurveTo(200, 100, 600, 130, 800, 40);
            BeachSceneInteractionAnja.crc2.lineTo(800, 300);
            BeachSceneInteractionAnja.crc2.lineTo(0, 300);
            BeachSceneInteractionAnja.crc2.closePath();
            BeachSceneInteractionAnja.crc2.fillStyle = "#fbdea4";
            BeachSceneInteractionAnja.crc2.fill();
            BeachSceneInteractionAnja.crc2.restore();
        };
        return Beach;
    }(BeachSceneInteractionAnja.BeachElement));
    BeachSceneInteractionAnja.Beach = Beach;
})(BeachSceneInteractionAnja || (BeachSceneInteractionAnja = {}));
//# sourceMappingURL=Beach.js.map