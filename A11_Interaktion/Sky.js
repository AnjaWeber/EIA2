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
    var Sky = /** @class */ (function (_super) {
        __extends(Sky, _super);
        function Sky(_position) {
            return _super.call(this, _position, new BeachSceneInteractionAnja.Vector(0, 0), new BeachSceneInteractionAnja.Vector(0, 0), new BeachSceneInteractionAnja.Vector(800, 200)) || this;
        }
        Sky.prototype.draw = function () {
            BeachSceneInteractionAnja.crc2.save();
            BeachSceneInteractionAnja.crc2.translate(this.position.x, this.position.y);
            BeachSceneInteractionAnja.crc2.beginPath();
            BeachSceneInteractionAnja.crc2.moveTo(0, 0);
            BeachSceneInteractionAnja.crc2.lineTo(0, 200);
            BeachSceneInteractionAnja.crc2.lineTo(800, 200);
            BeachSceneInteractionAnja.crc2.lineTo(800, 0);
            BeachSceneInteractionAnja.crc2.closePath();
            var gradient = BeachSceneInteractionAnja.crc2.createLinearGradient(0, 0, 0, 200);
            gradient.addColorStop(0, "#0047ab");
            gradient.addColorStop(0.5, "#0088FF");
            gradient.addColorStop(1, "#C6E6FB");
            BeachSceneInteractionAnja.crc2.fillStyle = gradient;
            BeachSceneInteractionAnja.crc2.fill();
            BeachSceneInteractionAnja.crc2.restore();
        };
        return Sky;
    }(BeachSceneInteractionAnja.BeachElement));
    BeachSceneInteractionAnja.Sky = Sky;
})(BeachSceneInteractionAnja || (BeachSceneInteractionAnja = {}));
//# sourceMappingURL=Sky.js.map