/*
Aufgabe: <3 Memory Settings>
Name: <Anja Weber>
Matrikel: <269760>
Datum: <16.04.2022>
Quellen: <https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array https://developer.mozilla.org/de/docs/Web/API/setTimeout>
*/
var Memory;
(function (Memory) {
    // Deklaration der globalen Variablen
    var firstCardClicked;
    var locked = false;
    var startTimeStamp;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.querySelector("#startButton").addEventListener("click", createGame);
    }
    function createGame() {
        var playingAreaDiv = document.querySelector("#playingArea");
        playingAreaDiv.innerHTML = "";
        var formData = new FormData(document.forms[0]);
        //get Methode von FormData liefert FormDataEntryValue zurück 
        //FormDataEntryValue kann nicht direkt in Number umgewandelt werden
        //FormDataEntryValue  kann mit .toString Methode in Stringwert umgewandelt werden
        //Dieser Stringwert kann mit parseInt Funktion in Number umgewandelt werden
        var pairCount = parseInt(formData.get("pairCount").toString());
        var cardSize = formData.get("cardSize") + "px";
        var backgroundColor = formData.get("backgroundColor").toString();
        var cardBackColor = formData.get("cardBackColor").toString();
        var fontColor = formData.get("fontColor").toString();
        var fontFamily = formData.get("fontFamily").toString();
        playingAreaDiv.style.backgroundColor = backgroundColor;
        var allValues = [];
        for (var i = 0; i < pairCount; i++) {
            allValues.push(i);
            allValues.push(i);
        }
        allValues = shuffle(allValues);
        for (var i = 0; i < allValues.length; i++) {
            //Karte wird angelegt
            createCard(allValues[i], cardSize, cardBackColor, fontColor, fontFamily);
        }
        startTimeStamp = new Date();
        var configFormDiv = document.querySelector("#configForm");
        configFormDiv.classList.add("hidden");
        playingAreaDiv.classList.remove("hidden");
    }
    function createCard(_value, _cardSize, _cardBackColor, _fontColor, _fontFamily) {
        var cardDiv = document.createElement("div");
        var playingAreaDiv = document.querySelector("#playingArea");
        playingAreaDiv.appendChild(cardDiv);
        cardDiv.classList.add("card");
        cardDiv.style.backgroundColor = _cardBackColor;
        cardDiv.style.height = _cardSize;
        cardDiv.style.width = _cardSize;
        cardDiv.addEventListener("click", flipCard);
        var cardValueSpan = document.createElement("span");
        cardDiv.appendChild(cardValueSpan);
        cardValueSpan.innerHTML = _value.toString();
        cardValueSpan.classList.add("hidden");
        cardValueSpan.style.color = _fontColor;
        cardValueSpan.style.fontFamily = _fontFamily;
    }
    function flipCard(_event) {
        if (locked === true) {
            // Ausführung der Funktion wird mit return abgebrochen
            return;
        }
        else {
            var cardClicked_1 = _event.target;
            if (cardClicked_1 === firstCardClicked) {
                return;
            }
            else {
                var cardClickedSpan_1 = cardClicked_1.querySelector("span");
                cardClickedSpan_1.classList.remove("hidden");
                if (firstCardClicked === undefined) {
                    firstCardClicked = cardClicked_1;
                    return;
                }
                else {
                    var secondCardValue_1 = cardClickedSpan_1.innerHTML;
                    var firstCardClickedSpan_1 = firstCardClicked.querySelector("span");
                    var firstCardValue_1 = firstCardClickedSpan_1.innerHTML;
                    locked = true;
                    // Die Funktion setTimeout() ruft nach der gegebenen Zeitspanne (in ms) die anonyme Funktion auf.
                    // https://developer.mozilla.org/de/docs/Web/API/setTimeout
                    setTimeout(function () {
                        locked = false;
                        if (firstCardValue_1 === secondCardValue_1) {
                            cardClicked_1.classList.add("invisible");
                            firstCardClicked.classList.add("invisible");
                            // Suche nach einem Element das die Klasse "card" aber NICHT die Klasse "invisible" hat
                            var visibleCard = document.querySelector(".card:not(.invisible)");
                            if (visibleCard === null) {
                                var endTimeStamp = new Date();
                                var durationInMs = endTimeStamp.getTime() - startTimeStamp.getTime();
                                var minutes = Math.floor(durationInMs / 60000);
                                var seconds = Math.floor((durationInMs % 60000) / 1000);
                                alert("Glückwunsch! Duration: " + minutes + "min " + seconds + "s");
                            }
                        }
                        else {
                            cardClickedSpan_1.classList.add("hidden");
                            firstCardClickedSpan_1.classList.add("hidden");
                        }
                        firstCardClicked = undefined;
                    }, 2000);
                }
            }
        }
    }
    function shuffle(a) {
        var _a;
        for (var i = a.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [a[j], a[i]], a[i] = _a[0], a[j] = _a[1];
        }
        return a;
    }
})(Memory || (Memory = {}));
//# sourceMappingURL=script.js.map