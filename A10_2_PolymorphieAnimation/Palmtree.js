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
    var PalmTree = /** @class */ (function (_super) {
        __extends(PalmTree, _super);
        function PalmTree(_position, _scale) {
            var _this = _super.call(this, _position, new BeachScenePolymorphyAnimationAnja.Vector(0, 0)) || this;
            _this.scale = _scale;
            return _this;
        }
        PalmTree.prototype.draw = function () {
            //Stamm
            BeachScenePolymorphyAnimationAnja.crc2.save();
            BeachScenePolymorphyAnimationAnja.crc2.translate(this.position.x, this.position.y);
            BeachScenePolymorphyAnimationAnja.crc2.scale(this.scale.x, this.scale.y);
            BeachScenePolymorphyAnimationAnja.crc2.beginPath();
            BeachScenePolymorphyAnimationAnja.crc2.moveTo(0, 0);
            BeachScenePolymorphyAnimationAnja.crc2.lineTo(30, 0);
            BeachScenePolymorphyAnimationAnja.crc2.bezierCurveTo(70, 50, 90, 150, 90, 250);
            BeachScenePolymorphyAnimationAnja.crc2.lineTo(60, 250);
            BeachScenePolymorphyAnimationAnja.crc2.bezierCurveTo(60, 150, 40, 50, 0, 0);
            BeachScenePolymorphyAnimationAnja.crc2.closePath();
            BeachScenePolymorphyAnimationAnja.crc2.fillStyle = "#5B3A24";
            BeachScenePolymorphyAnimationAnja.crc2.fill();
            BeachScenePolymorphyAnimationAnja.crc2.stroke();
            //Krone
            BeachScenePolymorphyAnimationAnja.crc2.save();
            BeachScenePolymorphyAnimationAnja.crc2.translate(15, 0);
            var scaleList = [new BeachScenePolymorphyAnimationAnja.Vector(1, 1), new BeachScenePolymorphyAnimationAnja.Vector(-1, 1)];
            var angleList = [25, -25, 0];
            for (var _i = 0, scaleList_1 = scaleList; _i < scaleList_1.length; _i++) {
                var scale = scaleList_1[_i];
                BeachScenePolymorphyAnimationAnja.crc2.save();
                BeachScenePolymorphyAnimationAnja.crc2.scale(scale.x, scale.y);
                for (var _a = 0, angleList_1 = angleList; _a < angleList_1.length; _a++) {
                    var angle = angleList_1[_a];
                    BeachScenePolymorphyAnimationAnja.crc2.save();
                    BeachScenePolymorphyAnimationAnja.crc2.rotate(angle * Math.PI / 180);
                    BeachScenePolymorphyAnimationAnja.crc2.beginPath();
                    BeachScenePolymorphyAnimationAnja.crc2.moveTo(0, 0);
                    BeachScenePolymorphyAnimationAnja.crc2.bezierCurveTo(70, 12.5, 125, 30, 170, 75);
                    BeachScenePolymorphyAnimationAnja.crc2.bezierCurveTo(140, 0, 75, -70, 0, 0);
                    var gradient = BeachScenePolymorphyAnimationAnja.crc2.createLinearGradient(0, 0, 170, 75);
                    gradient.addColorStop(0, "#008800");
                    gradient.addColorStop(.5, "#98FF98");
                    gradient.addColorStop(1, "#53753C");
                    BeachScenePolymorphyAnimationAnja.crc2.fillStyle = gradient;
                    BeachScenePolymorphyAnimationAnja.crc2.fill();
                    BeachScenePolymorphyAnimationAnja.crc2.stroke();
                    BeachScenePolymorphyAnimationAnja.crc2.restore();
                }
                BeachScenePolymorphyAnimationAnja.crc2.restore();
            }
            BeachScenePolymorphyAnimationAnja.crc2.restore();
            BeachScenePolymorphyAnimationAnja.crc2.restore();
        };
        return PalmTree;
    }(BeachScenePolymorphyAnimationAnja.BeachElement));
    BeachScenePolymorphyAnimationAnja.PalmTree = PalmTree;
})(BeachScenePolymorphyAnimationAnja || (BeachScenePolymorphyAnimationAnja = {}));
//# sourceMappingURL=Palmtree.js.map