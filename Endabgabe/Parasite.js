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
    var Parasite = /** @class */ (function (_super) {
        __extends(Parasite, _super);
        function Parasite(_size, _targetPosition) {
            var _this = _super.call(this, new GardenSimulator.Vector(-1000, -1000), _size) || this;
            _this.startPosition = _this.generateStartPosition();
            _this.position = new GardenSimulator.Vector(_this.startPosition.x, _this.startPosition.y);
            _this.targetPosition = _targetPosition;
            _this.speed = Math.random() * 150 + 50;
            return _this;
        }
        Parasite.prototype.draw = function () {
            GardenSimulator.crc2.save();
            GardenSimulator.crc2.translate(this.position.x, this.position.y);
            GardenSimulator.crc2.scale(this.size.x / 100, this.size.y / 100);
            GardenSimulator.crc2.beginPath();
            GardenSimulator.crc2.ellipse(24, 24, 22, 17, Math.PI / 4, 0, 2 * Math.PI);
            GardenSimulator.crc2.fillStyle = "#F2EFDE";
            GardenSimulator.crc2.fill();
            GardenSimulator.crc2.stroke();
            GardenSimulator.crc2.beginPath();
            GardenSimulator.crc2.ellipse(75, 75, 22, 17, Math.PI / 4, 0, 2 * Math.PI);
            GardenSimulator.crc2.fillStyle = "#F2EFDE";
            GardenSimulator.crc2.fill();
            GardenSimulator.crc2.stroke();
            GardenSimulator.crc2.beginPath();
            GardenSimulator.crc2.ellipse(50, 50, 20, 43, Math.PI / 4, 0, 2 * Math.PI);
            GardenSimulator.crc2.fillStyle = "black";
            GardenSimulator.crc2.fill();
            GardenSimulator.crc2.stroke();
            GardenSimulator.crc2.beginPath();
            GardenSimulator.crc2.moveTo(50, 50);
            GardenSimulator.crc2.lineTo(73, 65);
            GardenSimulator.crc2.stroke();
            GardenSimulator.crc2.beginPath();
            GardenSimulator.crc2.moveTo(50, 50);
            GardenSimulator.crc2.lineTo(73, 70);
            GardenSimulator.crc2.stroke();
            GardenSimulator.crc2.beginPath();
            GardenSimulator.crc2.moveTo(50, 50);
            GardenSimulator.crc2.lineTo(67, 70);
            GardenSimulator.crc2.stroke();
            GardenSimulator.crc2.beginPath();
            GardenSimulator.crc2.moveTo(50, 50);
            GardenSimulator.crc2.lineTo(33, 29);
            GardenSimulator.crc2.stroke();
            GardenSimulator.crc2.beginPath();
            GardenSimulator.crc2.moveTo(50, 50);
            GardenSimulator.crc2.lineTo(26, 35);
            GardenSimulator.crc2.stroke();
            GardenSimulator.crc2.beginPath();
            GardenSimulator.crc2.moveTo(50, 50);
            GardenSimulator.crc2.lineTo(67, 70);
            GardenSimulator.crc2.stroke();
            GardenSimulator.crc2.beginPath();
            GardenSimulator.crc2.moveTo(50, 50);
            GardenSimulator.crc2.lineTo(25, 28);
            GardenSimulator.crc2.stroke();
            GardenSimulator.crc2.restore();
        };
        Parasite.prototype.move = function (_timeslice) {
            // Prüfen, ob Parasit seine finale Position in x-Richtung noch nicht erreicht hat
            if ((this.startPosition.x < this.targetPosition.x && this.position.x < this.targetPosition.x) ||
                (this.startPosition.x > this.targetPosition.x && this.position.x > this.targetPosition.x)) {
                this.position.x = this.position.x + (this.targetPosition.x - this.startPosition.x) / this.speed;
            }
            // Prüfen, ob Parasit seine finale Position in y-Richtung noch nicht erreicht hat
            if ((this.startPosition.y < this.targetPosition.y && this.position.y < this.targetPosition.y) ||
                (this.startPosition.y > this.targetPosition.y && this.position.y > this.targetPosition.y)) {
                this.position.y = this.position.y + (this.targetPosition.y - this.startPosition.y) / this.speed;
            }
        };
        Parasite.prototype.generateStartPosition = function () {
            var newStartPosition;
            var canvas = document.querySelector("canvas");
            if (Math.random() < 0.5) {
                if (Math.random() < 0.5) {
                    // start on top
                    newStartPosition = new GardenSimulator.Vector(canvas.width * Math.random(), -100);
                }
                else {
                    // start on bottom
                    newStartPosition = new GardenSimulator.Vector(canvas.width * Math.random(), canvas.height + 100);
                }
            }
            else {
                if (Math.random() < 0.5) {
                    // start on left
                    newStartPosition = new GardenSimulator.Vector(-100, canvas.height * Math.random());
                }
                else {
                    // start on right
                    newStartPosition = new GardenSimulator.Vector(canvas.width + 100, canvas.height * Math.random());
                }
            }
            return newStartPosition;
        };
        return Parasite;
    }(GardenSimulator.GardenElement));
    GardenSimulator.Parasite = Parasite;
})(GardenSimulator || (GardenSimulator = {}));
//# sourceMappingURL=Parasite.js.map