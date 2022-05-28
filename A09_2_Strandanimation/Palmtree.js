var BeachSceneAnimationAnja;
(function (BeachSceneAnimationAnja) {
    var PalmTree = /** @class */ (function () {
        function PalmTree(_position, _scale) {
            this.position = _position;
            this.scale = _scale;
        }
        PalmTree.prototype.move = function (_timeslice) {
            // TODO
        };
        PalmTree.prototype.draw = function () {
            //Stamm
            BeachSceneAnimationAnja.crc2.save();
            BeachSceneAnimationAnja.crc2.translate(this.position.x, this.position.y);
            BeachSceneAnimationAnja.crc2.scale(this.scale.x, this.scale.y);
            BeachSceneAnimationAnja.crc2.beginPath();
            BeachSceneAnimationAnja.crc2.moveTo(0, 0);
            BeachSceneAnimationAnja.crc2.lineTo(30, 0);
            BeachSceneAnimationAnja.crc2.bezierCurveTo(70, 50, 90, 150, 90, 250);
            BeachSceneAnimationAnja.crc2.lineTo(60, 250);
            BeachSceneAnimationAnja.crc2.bezierCurveTo(60, 150, 40, 50, 0, 0);
            BeachSceneAnimationAnja.crc2.closePath();
            BeachSceneAnimationAnja.crc2.fillStyle = "#5B3A24";
            BeachSceneAnimationAnja.crc2.fill();
            BeachSceneAnimationAnja.crc2.stroke();
            //Krone
            BeachSceneAnimationAnja.crc2.save();
            BeachSceneAnimationAnja.crc2.translate(15, 0);
            var scaleList = [new BeachSceneAnimationAnja.Vector(1, 1), new BeachSceneAnimationAnja.Vector(-1, 1)];
            var angleList = [25, -25, 0];
            for (var _i = 0, scaleList_1 = scaleList; _i < scaleList_1.length; _i++) {
                var scale = scaleList_1[_i];
                BeachSceneAnimationAnja.crc2.save();
                BeachSceneAnimationAnja.crc2.scale(scale.x, scale.y);
                for (var _a = 0, angleList_1 = angleList; _a < angleList_1.length; _a++) {
                    var angle = angleList_1[_a];
                    BeachSceneAnimationAnja.crc2.save();
                    BeachSceneAnimationAnja.crc2.rotate(angle * Math.PI / 180);
                    BeachSceneAnimationAnja.crc2.beginPath();
                    BeachSceneAnimationAnja.crc2.moveTo(0, 0);
                    BeachSceneAnimationAnja.crc2.bezierCurveTo(70, 12.5, 125, 30, 170, 75);
                    BeachSceneAnimationAnja.crc2.bezierCurveTo(140, 0, 75, -70, 0, 0);
                    var gradient = BeachSceneAnimationAnja.crc2.createLinearGradient(0, 0, 170, 75);
                    gradient.addColorStop(0, "#008800");
                    gradient.addColorStop(.5, "#98FF98");
                    gradient.addColorStop(1, "#53753C");
                    BeachSceneAnimationAnja.crc2.fillStyle = gradient;
                    BeachSceneAnimationAnja.crc2.fill();
                    BeachSceneAnimationAnja.crc2.stroke();
                    BeachSceneAnimationAnja.crc2.restore();
                }
                BeachSceneAnimationAnja.crc2.restore();
            }
            BeachSceneAnimationAnja.crc2.restore();
            BeachSceneAnimationAnja.crc2.restore();
        };
        return PalmTree;
    }());
    BeachSceneAnimationAnja.PalmTree = PalmTree;
})(BeachSceneAnimationAnja || (BeachSceneAnimationAnja = {}));
//# sourceMappingURL=Palmtree.js.map