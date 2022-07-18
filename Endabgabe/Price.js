var GardenSimulator;
(function (GardenSimulator) {
    var Price = /** @class */ (function () {
        function Price(_minPrice, _maxPrice) {
            this.minPrice = _minPrice;
            this.maxPrice = _maxPrice;
            this.currentPrice = Math.round((_minPrice + _maxPrice) / 2);
        }
        Price.prototype.updatePrice = function () {
            // Zufälliger neuer Preis zwischen minimal und maximal Preis wird generiert
            this.currentPrice = Math.round(Math.random() * (this.maxPrice - this.minPrice) + this.minPrice);
        };
        return Price;
    }());
    GardenSimulator.Price = Price;
})(GardenSimulator || (GardenSimulator = {}));
//# sourceMappingURL=Price.js.map