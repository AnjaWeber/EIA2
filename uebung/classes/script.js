var Butzitopia;
(function (Butzitopia) {
    var Vector = /** @class */ (function () {
        function Vector(_x, _y) {
            this.x = 0;
            this.y = 0;
            this.set(_x, _y);
        }
        Vector.prototype.scale = function (_factor) {
            this.x *= _factor;
            this.y *= _factor;
        };
        Vector.prototype.add = function (_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        };
        Vector.prototype.set = function (_x, _y) {
            this.x = _x;
            this.y = _y;
        };
        return Vector;
    }());
    var v1 = new Vector(1, 2);
    v1.scale(2);
    console.log(v1);
})(Butzitopia || (Butzitopia = {}));
//# sourceMappingURL=script.js.map