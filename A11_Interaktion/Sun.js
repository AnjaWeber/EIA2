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
    var Sun = /** @class */ (function (_super) {
        __extends(Sun, _super);
        function Sun(_position) {
            return _super.call(this, _position, new BeachSceneInteractionAnja.Vector(0, 0), new BeachSceneInteractionAnja.Vector(0, 0), new BeachSceneInteractionAnja.Vector(0, 0)) || this;
        }
        Sun.prototype.draw = function () {
            BeachSceneInteractionAnja.crc2.save();
            BeachSceneInteractionAnja.crc2.translate(this.position.x, this.position.y);
            BeachSceneInteractionAnja.crc2.beginPath();
            BeachSceneInteractionAnja.crc2.arc(0, 0, 150, 0, 2 * Math.PI);
            var gradient = BeachSceneInteractionAnja.crc2.createRadialGradient(0, 0, 75, 0, 0, 150);
            gradient.addColorStop(0, "rgba(255,166,70, 0.75)");
            gradient.addColorStop(1, "rgba(255,166,70, 0)");
            BeachSceneInteractionAnja.crc2.fillStyle = gradient;
            BeachSceneInteractionAnja.crc2.fill();
            BeachSceneInteractionAnja.crc2.beginPath();
            BeachSceneInteractionAnja.crc2.arc(0, 0, 75, 0, 2 * Math.PI);
            BeachSceneInteractionAnja.crc2.fillStyle = "#ffa646";
            BeachSceneInteractionAnja.crc2.fill();
            BeachSceneInteractionAnja.crc2.restore();
        };
        return Sun;
    }(BeachSceneInteractionAnja.BeachElement));
    BeachSceneInteractionAnja.Sun = Sun;
})(BeachSceneInteractionAnja || (BeachSceneInteractionAnja = {}));
//# sourceMappingURL=Sun.js.map