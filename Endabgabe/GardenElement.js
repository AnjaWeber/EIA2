var GardenSimulator;
(function (GardenSimulator) {
    var GardenElement = /** @class */ (function () {
        function GardenElement(_position, _size) {
            this.position = _position;
            this.size = _size;
        }
        GardenElement.prototype.isHit = function (_hitPosition) {
            var isElementHit = _hitPosition.x > this.position.x &&
                _hitPosition.x < this.position.x + this.size.x &&
                _hitPosition.y > this.position.y &&
                _hitPosition.y < this.position.y + this.size.y;
            return isElementHit;
        };
        return GardenElement;
    }());
    GardenSimulator.GardenElement = GardenElement;
})(GardenSimulator || (GardenSimulator = {}));
//# sourceMappingURL=GardenElement.js.map