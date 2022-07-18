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
var GardenSimulator;
(function (GardenSimulator) {
    var EmptyField = /** @class */ (function (_super) {
        __extends(EmptyField, _super);
        function EmptyField() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        EmptyField.prototype.draw = function () {
            GardenSimulator.crc2.save();
            GardenSimulator.crc2.translate(this.position.x, this.position.y);
            GardenSimulator.crc2.scale(this.size.x / 100, this.size.y / 100);
            GardenSimulator.crc2.beginPath();
            GardenSimulator.crc2.rect(0, 0, 100, 100);
            GardenSimulator.crc2.fillStyle = "#BBA786";
            GardenSimulator.crc2.fill();
            GardenSimulator.crc2.restore();
        };
        return EmptyField;
    }(GardenSimulator.GardenElement));
    GardenSimulator.EmptyField = EmptyField;
})(GardenSimulator || (GardenSimulator = {}));
//# sourceMappingURL=EmptyField.js.map