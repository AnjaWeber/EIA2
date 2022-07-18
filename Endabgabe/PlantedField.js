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
    var PlantedField = /** @class */ (function (_super) {
        __extends(PlantedField, _super);
        function PlantedField(_position, _size, _waterLowerBound, _waterUpperBound, _waterConsumption, _fertilizerLowerBound, _fertilizerUpperBound, _fertilizerConsumption, _growthDurationInDays, _daysUntilDeath) {
            var _this = _super.call(this, _position, _size) || this;
            _this.waterLowerBound = _waterLowerBound;
            _this.waterUpperBound = _waterUpperBound;
            _this.waterConsumption = _waterConsumption;
            _this.fertilizerLowerBound = _fertilizerLowerBound;
            _this.fertilizerUpperBound = _fertilizerUpperBound;
            _this.fertilizerConsumption = _fertilizerConsumption;
            _this.growthDurationInDays = _growthDurationInDays;
            _this.daysUntilDeath = _daysUntilDeath;
            _this.waterLevel = 30;
            _this.fertilizerLevel = 30;
            _this.isPestInfested = false;
            _this.ageInDays = 0;
            _this.sickDays = 0;
            return _this;
        }
        PlantedField.prototype.isSellable = function () {
            var isPlantSellable = this.ageInDays >= this.growthDurationInDays;
            return isPlantSellable;
        };
        PlantedField.prototype.isDead = function () {
            var isPlantDead = this.sickDays >= this.daysUntilDeath;
            return isPlantDead;
        };
        PlantedField.prototype.waterField = function (_waterAmount) {
            this.waterLevel = this.waterLevel + _waterAmount;
            if (this.waterLevel > 100) {
                this.waterLevel = 100;
            }
        };
        PlantedField.prototype.fertilizeField = function (_fertilizerAmount) {
            this.fertilizerLevel = this.fertilizerLevel + _fertilizerAmount;
            if (this.fertilizerLevel > 100) {
                this.fertilizerLevel = 100;
            }
        };
        PlantedField.prototype.simulateDay = function () {
            this.ageInDays = this.ageInDays + 1;
            // Prüfen ob Pflanze krank ist oder nicht
            if (this.waterLevel < this.waterLowerBound ||
                this.waterLevel > this.waterUpperBound ||
                this.fertilizerLevel < this.fertilizerLowerBound ||
                this.fertilizerLevel > this.fertilizerUpperBound ||
                this.isPestInfested === true) {
                this.sickDays = this.sickDays + 1;
            }
            else {
                this.sickDays = 0;
            }
            // Wasserverbraucht simulieren
            this.waterLevel = this.waterLevel - this.waterConsumption;
            if (this.waterLevel < 0) {
                this.waterLevel = 0;
            }
            // Düngerverbrauch simulieren
            this.fertilizerLevel = this.fertilizerLevel - this.fertilizerConsumption;
            if (this.fertilizerLevel < 0) {
                this.fertilizerLevel = 0;
            }
        };
        PlantedField.prototype.draw = function () {
            GardenSimulator.crc2.save();
            GardenSimulator.crc2.translate(this.position.x, this.position.y);
            GardenSimulator.crc2.scale(this.size.x / 100, this.size.y / 100);
            // Hintergrund aka Erde
            GardenSimulator.crc2.beginPath();
            GardenSimulator.crc2.rect(0, 0, 100, 100);
            if (this.isPestInfested === true) {
                // parasit sitzt drauf
                GardenSimulator.crc2.fillStyle = "#5c694f";
            }
            else if (this.waterLevel > this.waterUpperBound) {
                // zu viel wasser
                GardenSimulator.crc2.fillStyle = "#5B4431";
            }
            else if (this.fertilizerLevel > this.fertilizerUpperBound) {
                // zu viel dünger
                GardenSimulator.crc2.fillStyle = "#5B4431";
            }
            else if (this.waterLevel < this.waterLowerBound) {
                // zu wenig wasser
                GardenSimulator.crc2.fillStyle = "#C8BDA7";
            }
            else if (this.fertilizerLevel < this.fertilizerLowerBound) {
                // zu wenig dünger
                GardenSimulator.crc2.fillStyle = "#C8BDA7";
            }
            else {
                // pflanze gesund und glücklich
                GardenSimulator.crc2.fillStyle = "#A9946D";
            }
            GardenSimulator.crc2.fill();
            // Wasserstandsanzeige
            // zu viel wasser bereich
            GardenSimulator.crc2.beginPath();
            GardenSimulator.crc2.moveTo(0, 0);
            GardenSimulator.crc2.rect(0, 0, 10, 100 - this.waterUpperBound);
            GardenSimulator.crc2.fillStyle = "rgba(255, 56, 56, 0.7)";
            GardenSimulator.crc2.fill();
            // optimale wasser bereich
            GardenSimulator.crc2.beginPath();
            GardenSimulator.crc2.rect(0, 100 - this.waterUpperBound, 10, 100 - (100 - this.waterUpperBound) - this.waterLowerBound);
            GardenSimulator.crc2.fillStyle = "rgba(86, 240, 0, 0.7)";
            GardenSimulator.crc2.fill();
            // zu wenig wasser bereich
            GardenSimulator.crc2.beginPath();
            GardenSimulator.crc2.rect(0, 100 - this.waterLowerBound, 10, this.waterLowerBound);
            GardenSimulator.crc2.fillStyle = "rgba(255, 56, 56, 0.7)";
            GardenSimulator.crc2.fill();
            // aktueller Wasserstand
            GardenSimulator.crc2.beginPath();
            GardenSimulator.crc2.rect(2, 100 - this.waterLevel, 6, this.waterLevel);
            GardenSimulator.crc2.fillStyle = "#1D2F82";
            GardenSimulator.crc2.fill();
            // Düngerstandsanzeige
            // zu viel Dünger Bereich
            GardenSimulator.crc2.beginPath();
            GardenSimulator.crc2.moveTo(0, 0);
            GardenSimulator.crc2.rect(90, 0, 10, 100 - this.fertilizerUpperBound);
            GardenSimulator.crc2.fillStyle = "rgba(255, 56, 56, 0.7)";
            GardenSimulator.crc2.fill();
            // optimaler Dünger Bereich
            GardenSimulator.crc2.beginPath();
            GardenSimulator.crc2.rect(90, 100 - this.fertilizerUpperBound, 10, 100 - (100 - this.fertilizerUpperBound) - this.fertilizerLowerBound);
            GardenSimulator.crc2.fillStyle = "rgba(86, 240, 0, 0.7)";
            GardenSimulator.crc2.fill();
            // zu wenig Dünger Bereich
            GardenSimulator.crc2.beginPath();
            GardenSimulator.crc2.rect(90, 100 - this.fertilizerLowerBound, 10, this.fertilizerLowerBound);
            GardenSimulator.crc2.fillStyle = "rgba(255, 56, 56, 0.7)";
            GardenSimulator.crc2.fill();
            // aktueller Düngerstand
            GardenSimulator.crc2.beginPath();
            GardenSimulator.crc2.rect(92, 100 - this.fertilizerLevel, 6, this.fertilizerLevel);
            GardenSimulator.crc2.fillStyle = "#FFC300";
            GardenSimulator.crc2.fill();
            GardenSimulator.crc2.restore();
        };
        return PlantedField;
    }(GardenSimulator.GardenElement));
    GardenSimulator.PlantedField = PlantedField;
})(GardenSimulator || (GardenSimulator = {}));
//# sourceMappingURL=PlantedField.js.map