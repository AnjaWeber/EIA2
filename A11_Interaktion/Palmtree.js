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
    var PalmTree = /** @class */ (function (_super) {
        __extends(PalmTree, _super);
        function PalmTree(_position, _scale) {
            var _this = _super.call(this, _position, new BeachSceneInteractionAnja.Vector(0, 0), new BeachSceneInteractionAnja.Vector(0, 0), new BeachSceneInteractionAnja.Vector(0, 0)) || this;
            _this.scale = _scale;
            return _this;
        }
        PalmTree.prototype.draw = function () {
            //Stamm
            BeachSceneInteractionAnja.crc2.save();
            BeachSceneInteractionAnja.crc2.translate(this.position.x, this.position.y);
            BeachSceneInteractionAnja.crc2.scale(this.scale.x, this.scale.y);
            BeachSceneInteractionAnja.crc2.beginPath();
            BeachSceneInteractionAnja.crc2.moveTo(0, 0);
            BeachSceneInteractionAnja.crc2.lineTo(30, 0);
            BeachSceneInteractionAnja.crc2.bezierCurveTo(70, 50, 90, 150, 90, 250);
            BeachSceneInteractionAnja.crc2.lineTo(60, 250);
            BeachSceneInteractionAnja.crc2.bezierCurveTo(60, 150, 40, 50, 0, 0);
            BeachSceneInteractionAnja.crc2.closePath();
            BeachSceneInteractionAnja.crc2.fillStyle = "#5B3A24";
            BeachSceneInteractionAnja.crc2.fill();
            BeachSceneInteractionAnja.crc2.stroke();
            //Krone
            BeachSceneInteractionAnja.crc2.save();
            BeachSceneInteractionAnja.crc2.translate(15, 0);
            var scaleList = [new BeachSceneInteractionAnja.Vector(1, 1), new BeachSceneInteractionAnja.Vector(-1, 1)];
            var angleList = [25, -25, 0];
            for (var _i = 0, scaleList_1 = scaleList; _i < scaleList_1.length; _i++) {
                var scale = scaleList_1[_i];
                BeachSceneInteractionAnja.crc2.save();
                BeachSceneInteractionAnja.crc2.scale(scale.x, scale.y);
                for (var _a = 0, angleList_1 = angleList; _a < angleList_1.length; _a++) {
                    var angle = angleList_1[_a];
                    BeachSceneInteractionAnja.crc2.save();
                    BeachSceneInteractionAnja.crc2.rotate((angle * Math.PI) / 180);
                    BeachSceneInteractionAnja.crc2.beginPath();
                    BeachSceneInteractionAnja.crc2.moveTo(0, 0);
                    BeachSceneInteractionAnja.crc2.bezierCurveTo(70, 12.5, 125, 30, 170, 75);
                    BeachSceneInteractionAnja.crc2.bezierCurveTo(140, 0, 75, -70, 0, 0);
                    var gradient = BeachSceneInteractionAnja.crc2.createLinearGradient(0, 0, 170, 75);
                    gradient.addColorStop(0, "#008800");
                    gradient.addColorStop(0.5, "#98FF98");
                    gradient.addColorStop(1, "#53753C");
                    BeachSceneInteractionAnja.crc2.fillStyle = gradient;
                    BeachSceneInteractionAnja.crc2.fill();
                    BeachSceneInteractionAnja.crc2.stroke();
                    BeachSceneInteractionAnja.crc2.restore();
                }
                BeachSceneInteractionAnja.crc2.restore();
            }
            BeachSceneInteractionAnja.crc2.restore();
            BeachSceneInteractionAnja.crc2.restore();
        };
        return PalmTree;
    }(BeachSceneInteractionAnja.BeachElement));
    BeachSceneInteractionAnja.PalmTree = PalmTree;
})(BeachSceneInteractionAnja || (BeachSceneInteractionAnja = {}));
//# sourceMappingURL=Palmtree.js.map