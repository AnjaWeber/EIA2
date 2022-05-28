var BeachSceneAnimationAnja;
(function (BeachSceneAnimationAnja) {
    var Vector = /** @class */ (function () {
        function Vector(_x, _y) {
            this.set(_x, _y);
        }
        Vector.prototype.set = function (_x, _y) {
            this.x = _x;
            this.y = _y;
        };
        Vector.prototype.scale = function (_factor) {
            this.x *= _factor;
            this.y *= _factor;
        };
        Vector.prototype.add = function (_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        };
        return Vector;
    }());
    BeachSceneAnimationAnja.Vector = Vector;
})(BeachSceneAnimationAnja || (BeachSceneAnimationAnja = {}));
//# sourceMappingURL=Vector.js.map