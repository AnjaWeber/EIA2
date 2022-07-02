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
    var Sea = /** @class */ (function (_super) {
        __extends(Sea, _super);
        function Sea(_position) {
            return _super.call(this, _position, new BeachSceneInteractionAnja.Vector(0, 0), new BeachSceneInteractionAnja.Vector(0, 0), new BeachSceneInteractionAnja.Vector(0, 0)) || this;
        }
        Sea.prototype.draw = function () {
            BeachSceneInteractionAnja.crc2.save();
            BeachSceneInteractionAnja.crc2.translate(this.position.x, this.position.y);
            BeachSceneInteractionAnja.crc2.beginPath();
            BeachSceneInteractionAnja.crc2.moveTo(0, 0);
            BeachSceneInteractionAnja.crc2.lineTo(0, 300);
            BeachSceneInteractionAnja.crc2.lineTo(800, 300);
            BeachSceneInteractionAnja.crc2.lineTo(800, 0);
            BeachSceneInteractionAnja.crc2.closePath();
            var gradient = BeachSceneInteractionAnja.crc2.createLinearGradient(0, 0, 0, 300);
            gradient.addColorStop(0, "#7bb5d8");
            gradient.addColorStop(0.5, "#3976a3");
            gradient.addColorStop(1, "#2bb8c3");
            BeachSceneInteractionAnja.crc2.fillStyle = gradient;
            BeachSceneInteractionAnja.crc2.fill();
            BeachSceneInteractionAnja.crc2.restore();
        };
        return Sea;
    }(BeachSceneInteractionAnja.BeachElement));
    BeachSceneInteractionAnja.Sea = Sea;
})(BeachSceneInteractionAnja || (BeachSceneInteractionAnja = {}));
//# sourceMappingURL=Sea.js.map