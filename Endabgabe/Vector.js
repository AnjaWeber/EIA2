var GardenSimulator;
(function (GardenSimulator) {
    var Vector = /** @class */ (function () {
        function Vector(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        Vector.prototype.scale = function (_factor) {
            this.x = this.x * _factor;
            this.y = this.y * _factor;
        };
        Vector.prototype.scaleWithVector = function (_factorVector) {
            this.x = this.x * _factorVector.x;
            this.y = this.y * _factorVector.y;
        };
        Vector.prototype.add = function (_addend) {
            this.x = this.x + _addend.x;
            this.y = this.y + _addend.y;
        };
        Vector.prototype.subtract = function (_subtrahend) {
            this.x = this.x - _subtrahend.x;
            this.y = this.y - _subtrahend.y;
        };
        return Vector;
    }());
    GardenSimulator.Vector = Vector;
})(GardenSimulator || (GardenSimulator = {}));
//# sourceMappingURL=Vector.js.map