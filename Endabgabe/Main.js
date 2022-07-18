var GardenSimulator;
(function (GardenSimulator) {
    // Load listener registrieren
    window.addEventListener("load", handleLoad);
    // globale variablen für Spielzustand erstellen...
    var canvas;
    var days = 0;
    var hours = 0;
    var minutes = 0;
    var playerMoney;
    var pricePumpkinSeedling;
    var priceTomatoSeedling;
    var priceSunflowerSeedling;
    var priceSaladSeedling;
    var priceStrawberrySeedling;
    var priceFertilizer;
    var pricePesticide;
    var sellingPricePumpkin;
    var sellingPriceTomato;
    var sellingPriceSunflower;
    var sellingPriceSalad;
    var sellingPriceStrawberry;
    var fields = [];
    var parasites = [];
    var selectedUserAction;
    var selectedCropType;
    function handleLoad() {
        // Klick listener auf Start Button registrieren
        document.getElementById("start").addEventListener("click", startGame);
    }
    function startGame() {
        // Canvas auswählen und 2D-Context auslesen
        canvas = document.querySelector("canvas");
        GardenSimulator.crc2 = canvas.getContext("2d");
        // FormData aus Formular auslesen
        var formData = new FormData(document.forms[0]);
        // Initiales Spielerkapital aus FormData auslesen
        playerMoney = Number(formData.get("seedCapital"));
        // Preisspannen aus FormData auslesen
        pricePumpkinSeedling = new GardenSimulator.Price(Number(formData.get("minPumpkinSeedling")), Number(formData.get("maxPumpkinSeedling")));
        priceTomatoSeedling = new GardenSimulator.Price(Number(formData.get("minTomatoSeedling")), Number(formData.get("maxTomatoSeedling")));
        priceSunflowerSeedling = new GardenSimulator.Price(Number(formData.get("minSunflowerSeedling")), Number(formData.get("maxSunflowerSeedling")));
        priceSaladSeedling = new GardenSimulator.Price(Number(formData.get("minSaladSeedling")), Number(formData.get("maxSaladSeedling")));
        priceStrawberrySeedling = new GardenSimulator.Price(Number(formData.get("minStrawberrySeedling")), Number(formData.get("maxStrawberrySeedling")));
        priceFertilizer = new GardenSimulator.Price(Number(formData.get("minFertilizer")), Number(formData.get("maxFertilizer")));
        pricePesticide = new GardenSimulator.Price(Number(formData.get("minPesticide")), Number(formData.get("maxPesticide")));
        sellingPricePumpkin = new GardenSimulator.Price(Number(formData.get("minPumpkin")), Number(formData.get("maxPumpkin")));
        sellingPriceTomato = new GardenSimulator.Price(Number(formData.get("minTomato")), Number(formData.get("maxTomato")));
        sellingPriceSunflower = new GardenSimulator.Price(Number(formData.get("minSunflower")), Number(formData.get("maxSunflower")));
        sellingPriceSalad = new GardenSimulator.Price(Number(formData.get("minSalad")), Number(formData.get("maxSalad")));
        sellingPriceStrawberry = new GardenSimulator.Price(Number(formData.get("minStrawberry")), Number(formData.get("maxStrawberry")));
        // Setup Formular ausblenden
        var gameSetupElement = document.getElementById("setup");
        gameSetupElement.classList.add("hidden");
        // Spieloberfläche einblenden
        var gameElement = document.getElementById("game");
        gameElement.classList.remove("hidden");
        // 40 leere Felder erstellen und auf Canvas verteilen...
        var gapBetweenFields = 25;
        var fieldWidth = 125;
        var fieldHeight = 125;
        var x = gapBetweenFields;
        var y = gapBetweenFields;
        for (var i = 0; i < 40; i++) {
            // leeres Feld erzeugen
            var newField = new GardenSimulator.EmptyField(new GardenSimulator.Vector(x, y), new GardenSimulator.Vector(fieldWidth, fieldHeight));
            // neues Feld in Felder-Liste hinzufügen
            fields.push(newField);
            // x & y für Position von nächstem Feld berechnen
            x = x + fieldWidth + gapBetweenFields;
            if (x + fieldWidth + gapBetweenFields > canvas.width) {
                x = gapBetweenFields;
                y = y + fieldHeight + gapBetweenFields;
            }
        }
        // Click listener auf Aktions-Buttons registrieren...
        // Kürbis pflanzen Aktion
        document.getElementById("plantPumpkin").addEventListener("click", function () {
            selectedUserAction = GardenSimulator.UserAction.PLANT;
            selectedCropType = GardenSimulator.CropType.PUMPKIN;
        });
        // Tomate pflanzen Aktion
        document.getElementById("plantTomato").addEventListener("click", function () {
            selectedUserAction = GardenSimulator.UserAction.PLANT;
            selectedCropType = GardenSimulator.CropType.TOMATO;
        });
        // Sonnenblume pflanzen Aktion
        document.getElementById("plantSunflower").addEventListener("click", function () {
            selectedUserAction = GardenSimulator.UserAction.PLANT;
            selectedCropType = GardenSimulator.CropType.SUNFLOWER;
        });
        // Salat pflanzen Aktion
        document.getElementById("plantSalad").addEventListener("click", function () {
            selectedUserAction = GardenSimulator.UserAction.PLANT;
            selectedCropType = GardenSimulator.CropType.SALAD;
        });
        // Erdbeere pflanzen Aktion
        document.getElementById("plantStrawberry").addEventListener("click", function () {
            selectedUserAction = GardenSimulator.UserAction.PLANT;
            selectedCropType = GardenSimulator.CropType.STRAWBERRY;
        });
        // Feld bewässern Aktion
        document.getElementById("waterField").addEventListener("click", function () {
            selectedUserAction = GardenSimulator.UserAction.WATER;
        });
        // Feld düngen Aktion
        document.getElementById("fertilizeField").addEventListener("click", function () {
            selectedUserAction = GardenSimulator.UserAction.FERTILIZE;
        });
        // Schädling bekämpfen Aktion
        document.getElementById("fightPest").addEventListener("click", function () {
            selectedUserAction = GardenSimulator.UserAction.FIGHT_PEST;
        });
        // Feld ernten Aktion
        document.getElementById("harvestField").addEventListener("click", function () {
            selectedUserAction = GardenSimulator.UserAction.HARVEST;
        });
        // Klick Listener auf canvas registrieren
        document.querySelector("canvas").addEventListener("click", function (event) {
            // Klickposition im Canvas bestimmen
            var x = event.clientX - event.target.offsetLeft;
            var y = event.clientY - event.target.offsetTop;
            var clickPosition = new GardenSimulator.Vector(x, y);
            // Prüfen ob Nutzeraktion überhaupt ausgewählt ist
            if (selectedUserAction !== undefined) {
                // Prüfen, ob Schädling bekämpft werden soll, oder Feld bearbeitet wird.
                if (selectedUserAction === GardenSimulator.UserAction.FIGHT_PEST) {
                    fightPest(clickPosition);
                }
                else {
                    farmField(clickPosition);
                }
            }
            // Ausgewählte Aktion & zu pflanzende Gemüsteart zurücksetzen
            selectedUserAction = undefined;
            selectedCropType = undefined;
        });
        // Interval starten, das Spielfeld rendert
        setInterval(renderGame, 20);
        // Interval starten, das die Marktpreise aktualisiert
        setInterval(updateMarketPrices, 20000);
        // Interval starten, das die Spielzeit fortschreiten lässt
        setInterval(updateGameTime, 300);
        // Interval starten, das einen Parasiten erscheinen lässt
        setInterval(spawnParasite, 30000);
    }
    function renderGame() {
        // canvas leeren indem weißes Rechteck über alles gemalt wird.
        GardenSimulator.crc2.beginPath();
        GardenSimulator.crc2.rect(0, 0, canvas.width, canvas.height);
        GardenSimulator.crc2.fillStyle = "#ffffff";
        GardenSimulator.crc2.fill();
        // Über alle Felder iterieren
        for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
            var field = fields_1[_i];
            // Prüfen ob Feld bepflanzt ist
            if (field instanceof GardenSimulator.PlantedField) {
                // Prüfen ob Feld von irgendeinem Schädling befallen ist und bei Bedarf die
                // "isPestInfested" Eigenschaft des Feldes aktualisiert
                field.isPestInfested = false;
                for (var _a = 0, parasites_1 = parasites; _a < parasites_1.length; _a++) {
                    var parasite = parasites_1[_a];
                    if (field.isHit(parasite.position) === true) {
                        field.isPestInfested = true;
                        // Sobald 1 Schädling gefunden wurde, der auf dem Feld sitzt,
                        // wird nicht weiter gesucht und mit "break" abgebrochen
                        break;
                    }
                }
            }
            // Feld zeichnen
            field.draw();
        }
        // Über alle Parasiten iterieren
        for (var _b = 0, parasites_2 = parasites; _b < parasites_2.length; _b++) {
            var parasite = parasites_2[_b];
            // Parasit zeichnen
            parasite.draw();
            // Parasit bewegen
            parasite.move(1);
        }
        // Anzeige des Spielerkapitals aktualisieren
        var playerMoneyElement = document.getElementById("playerMoney");
        playerMoneyElement.innerHTML = playerMoney.toString();
        // Angezeigte Marktpreise aktualisieren
        renderMarketPrices();
        // Anzeige der Spielzeit aktualisieren
        var gameTimeElement = document.getElementById("gameTime");
        gameTimeElement.innerHTML = "Day: " + days + ", " + hours + ":" + minutes;
    }
    function renderMarketPrices() {
        // Angezeigte Preise für Setzlinge aktualisieren
        var pumpkinSeedlingElement = document.getElementById("pumpkinSeedlingPrice");
        pumpkinSeedlingElement.innerHTML = pricePumpkinSeedling.currentPrice.toString();
        var tomatoSeedlingElement = document.getElementById("tomatoSeedlingPrice");
        tomatoSeedlingElement.innerHTML = priceTomatoSeedling.currentPrice.toString();
        var sunflowerSeedlingElement = document.getElementById("sunflowerSeedlingPrice");
        sunflowerSeedlingElement.innerHTML = priceSunflowerSeedling.currentPrice.toString();
        var saladSeedlingElement = document.getElementById("saladSeedlingPrice");
        saladSeedlingElement.innerHTML = priceSaladSeedling.currentPrice.toString();
        var strawberrySeedlingElement = document.getElementById("strawberrySeedlingPrice");
        strawberrySeedlingElement.innerHTML = priceStrawberrySeedling.currentPrice.toString();
        // Angezeigte Preise für Dünger und Pestizid aktualisieren
        var fertilizerElement = document.getElementById("fertilizerPrice");
        fertilizerElement.innerHTML = priceFertilizer.currentPrice.toString();
        var pesticideElement = document.getElementById("pesticidePrice");
        pesticideElement.innerHTML = pricePesticide.currentPrice.toString();
        // Angezeigte Verkaufspreise aktualisieren
        var pumpkinElement = document.getElementById("pumpkinSellingPrice");
        pumpkinElement.innerHTML = sellingPricePumpkin.currentPrice.toString();
        var tomatoElement = document.getElementById("tomatoSellingPrice");
        tomatoElement.innerHTML = sellingPriceTomato.currentPrice.toString();
        var sunflowerElement = document.getElementById("sunflowerSellingPrice");
        sunflowerElement.innerHTML = sellingPriceSunflower.currentPrice.toString();
        var saladElement = document.getElementById("saladSellingPrice");
        saladElement.innerHTML = sellingPriceSalad.currentPrice.toString();
        var strawberryElement = document.getElementById("strawberrySellingPrice");
        strawberryElement.innerHTML = sellingPriceStrawberry.currentPrice.toString();
    }
    function updateMarketPrices() {
        // neue Preise für Setzlinge generieren
        pricePumpkinSeedling.updatePrice();
        priceTomatoSeedling.updatePrice();
        priceSunflowerSeedling.updatePrice();
        priceSaladSeedling.updatePrice();
        priceStrawberrySeedling.updatePrice();
        // Neue Preise für Dünger und Pestizid generieren
        priceFertilizer.updatePrice();
        pricePesticide.updatePrice();
        // Neue Verkaufspreise generieren
        sellingPricePumpkin.updatePrice();
        sellingPriceTomato.updatePrice();
        sellingPriceSunflower.updatePrice();
        sellingPriceSalad.updatePrice();
        sellingPriceStrawberry.updatePrice();
    }
    function updateGameTime() {
        minutes = minutes + 20;
        // Prüfen, ob die Stunde schon "voll" is
        if (minutes >= 60) {
            // Wenn Stunde voll, dann Stunden hochzählen und Minuten zurücksetzen
            hours = hours + 1;
            minutes = 0;
        }
        // Prüfen, ob Tag schon "voll" ist
        if (hours >= 24) {
            // Wenn Tag voll, dann Tage hochzählen, Stunden zurücksetzen und Tag simulieren
            days = days + 1;
            hours = 0;
            simulateNextDay();
        }
    }
    function simulateNextDay() {
        // Über alle Felder iterieren
        for (var i = 0; i < fields.length; i++) {
            // Feld an Stelle i aus Felderliste auslesen
            var field = fields[i];
            // Prüfen ob Feld bepflanzt ist
            if (field instanceof GardenSimulator.PlantedField) {
                // simuliere dass Feld 1 Tag älter wird
                field.simulateDay();
                // Prüfe ob Feld tot ist
                if (field.isDead() === true) {
                    // wenn Feld tot, entferne Parasiten auf Feld
                    for (var j = 0; j < parasites.length; j++) {
                        var parasite = parasites[j];
                        if (field.isHit(parasite.position) === true) {
                            parasites.splice(j, 1);
                        }
                    }
                    // Leeres Feld an Stelle von bepflanztem Feld packen
                    fields[i] = new GardenSimulator.EmptyField(field.position, field.size);
                }
            }
        }
    }
    function spawnParasite() {
        // https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array
        var targetField = fields[Math.floor(Math.random() * fields.length)];
        // Prüfe ob bepflanztes Feld
        if (targetField instanceof GardenSimulator.PlantedField) {
            // Zielposition bestimmen
            var x = targetField.position.x + Math.random() * targetField.size.x;
            var y = targetField.position.y + Math.random() * targetField.size.y;
            var targetPosition = new GardenSimulator.Vector(x, y);
            // Zufällige Größe zwischen 25 und 35 bestimmen
            var sizeValue = Math.random() * 10 + 25;
            var size = new GardenSimulator.Vector(sizeValue, sizeValue);
            // Parasit erzeugen
            var newParasite = new GardenSimulator.Parasite(size, targetPosition);
            // Parasit in Parasitenliste legen
            parasites.push(newParasite);
        }
    }
    function farmField(_clickPosition) {
        // Über alle Felder aus Felder-Liste iterieren
        for (var fieldIndex = 0; fieldIndex < fields.length; fieldIndex++) {
            var field = fields[fieldIndex];
            // Prüfen, ob Feld angeklickt wurde
            if (field.isHit(_clickPosition) === true) {
                // Je nach gewählter Aktion wird die entsprechende Funktion aufgerufen.
                switch (selectedUserAction) {
                    case GardenSimulator.UserAction.WATER:
                        waterField(fieldIndex);
                        break;
                    case GardenSimulator.UserAction.FERTILIZE:
                        fertilizeField(fieldIndex);
                        break;
                    case GardenSimulator.UserAction.HARVEST:
                        harvestField(fieldIndex);
                        break;
                    case GardenSimulator.UserAction.PLANT:
                        plantCrop(fieldIndex);
                        break;
                }
            }
        }
    }
    function waterField(_fieldIndex) {
        // Feld aus Felderliste auslesen
        var field = fields[_fieldIndex];
        // Prüfen ob Feld bepflanzt
        if (field instanceof GardenSimulator.PlantedField) {
            // Feld bewässern
            field.waterField(40);
        }
    }
    function fertilizeField(_fieldIndex) {
        // Feld aus Felderliste auslesen
        var field = fields[_fieldIndex];
        // Prüfen ob Feld bepflanzt
        if (field instanceof GardenSimulator.PlantedField) {
            // Feld düngen
            field.fertilizeField(30);
            // Kosten vom Spielerkapital abziehen
            playerMoney = playerMoney - priceFertilizer.currentPrice;
        }
    }
    function plantCrop(_fieldIndex) {
        // Feld aus Felderliste auslesen
        var field = fields[_fieldIndex];
        // Prüfen ob Feld leer
        if (field instanceof GardenSimulator.EmptyField) {
            switch (selectedCropType) {
                case GardenSimulator.CropType.PUMPKIN:
                    // Leeres Feld durch Pumpkin ersetzen
                    fields[_fieldIndex] = new GardenSimulator.Pumpkin(field.position, field.size);
                    // Preis für Pumpkin von Spielerkapital abziehen
                    playerMoney = playerMoney - pricePumpkinSeedling.currentPrice;
                    break;
                case GardenSimulator.CropType.TOMATO:
                    // Leeres Feld durch Tomato ersetzen
                    fields[_fieldIndex] = new GardenSimulator.Tomato(field.position, field.size);
                    // Preis für Tomato von Spielerkapital abziehen
                    playerMoney = playerMoney - priceTomatoSeedling.currentPrice;
                    break;
                case GardenSimulator.CropType.SUNFLOWER:
                    // Leeres Feld durch Sunflower ersetzen
                    fields[_fieldIndex] = new GardenSimulator.Sunflower(field.position, field.size);
                    // Preis für Sunflower von Spielerkapital abziehen
                    playerMoney = playerMoney - priceSunflowerSeedling.currentPrice;
                    break;
                case GardenSimulator.CropType.SALAD:
                    // Leeres Feld durch Salad ersetzen
                    fields[_fieldIndex] = new GardenSimulator.Salad(field.position, field.size);
                    // Preis für Salad von Spielerkapital abziehen
                    playerMoney = playerMoney - priceSaladSeedling.currentPrice;
                    break;
                case GardenSimulator.CropType.STRAWBERRY:
                    // Leeres Feld durch Strawberry ersetzen
                    fields[_fieldIndex] = new GardenSimulator.Strawberry(field.position, field.size);
                    // Preis für Strawberry von Spielerkapital abziehen
                    playerMoney = playerMoney - priceStrawberrySeedling.currentPrice;
                    break;
            }
        }
    }
    function harvestField(_fieldIndex) {
        // Feld aus Felderliste auslesen
        var field = fields[_fieldIndex];
        // Prüfen ob Feld bepflanzt ist und ob es geerntet werden kann
        if (field instanceof GardenSimulator.PlantedField && field.isSellable() === true) {
            // Prüfen welche Art das bepflanzte Feld ist
            if (field instanceof GardenSimulator.Pumpkin) {
                playerMoney = playerMoney + sellingPricePumpkin.currentPrice;
            }
            else if (field instanceof GardenSimulator.Tomato) {
                playerMoney = playerMoney + sellingPriceTomato.currentPrice;
            }
            else if (field instanceof GardenSimulator.Sunflower) {
                playerMoney = playerMoney + sellingPriceSunflower.currentPrice;
            }
            else if (field instanceof GardenSimulator.Salad) {
                playerMoney = playerMoney + sellingPriceSalad.currentPrice;
            }
            else if (field instanceof GardenSimulator.Strawberry) {
                playerMoney = playerMoney + sellingPriceStrawberry.currentPrice;
            }
            // Bepflanztes Feld durch leeres Feld ersetzen
            fields[_fieldIndex] = new GardenSimulator.EmptyField(field.position, field.size);
        }
    }
    function fightPest(_clickPosition) {
        var isPestRemoved = false;
        for (var parasiteIndex = 0; parasiteIndex < parasites.length; parasiteIndex++) {
            // Parasit an Stelle parasiteIndex aus parasites Liste auslesen
            var parasite = parasites[parasiteIndex];
            // Prüfen ob Parasit angeklickt wurde
            if (parasite.isHit(_clickPosition) === true) {
                isPestRemoved = true;
                // Parasit aus parasites Liste entfernen
                parasites.splice(parasiteIndex, 1);
            }
        }
        // Prüfen ob min 1 Parasit entfernt wurde
        if (isPestRemoved === true) {
            // Kosten für Pestizid von Spielerkapital abziehen
            playerMoney = playerMoney - pricePesticide.currentPrice;
        }
    }
})(GardenSimulator || (GardenSimulator = {}));
//# sourceMappingURL=Main.js.map