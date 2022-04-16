/*
Aufgabe: <3 Memory Settings>
Name: <Anja Weber>
Matrikel: <269760>
Datum: <16.04.2022>
Quellen: <https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array https://developer.mozilla.org/de/docs/Web/API/setTimeout>
*/
namespace Memory {
    // Deklaration der globalen Variablen
    let firstCardClicked: HTMLDivElement;
    let locked: boolean = false;
    let startTimeStamp: Date;
    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        document.querySelector("#startButton").addEventListener("click", createGame);
    }
    function createGame(): void {
        let playingAreaDiv: HTMLDivElement = document.querySelector("#playingArea");
        playingAreaDiv.innerHTML = "";

        let formData: FormData = new FormData(document.forms[0]);
        //get Methode von FormData liefert FormDataEntryValue zurück 
        //FormDataEntryValue kann nicht direkt in Number umgewandelt werden
        //FormDataEntryValue  kann mit .toString Methode in Stringwert umgewandelt werden
        //Dieser Stringwert kann mit parseInt Funktion in Number umgewandelt werden
        let pairCount: number = parseInt(formData.get("pairCount").toString());
        let cardSize: string = formData.get("cardSize") + "px";
        let backgroundColor: string = formData.get("backgroundColor").toString();
        let cardBackColor: string = formData.get("cardBackColor").toString();
        let fontColor: string = formData.get("fontColor").toString();
        let fontFamily: string = formData.get("fontFamily").toString();

        playingAreaDiv.style.backgroundColor = backgroundColor;

        let allValues: number[] = [];
        for (let i: number = 0; i < pairCount; i++) {
            allValues.push(i);
            allValues.push(i);
        }

        allValues = shuffle(allValues);

        for (let i: number = 0; i < allValues.length; i++) {
            //Karte wird angelegt
            createCard(allValues[i], cardSize, cardBackColor, fontColor, fontFamily);
        }

        startTimeStamp = new Date();

        let configFormDiv: HTMLDivElement = document.querySelector("#configForm");
        configFormDiv.classList.add("hidden");
        playingAreaDiv.classList.remove("hidden");
    }

    function createCard(_value: number, _cardSize: string, _cardBackColor: string, _fontColor: string, _fontFamily: string): void {
        let cardDiv: HTMLDivElement = document.createElement("div");
        let playingAreaDiv: HTMLDivElement = document.querySelector("#playingArea");
        playingAreaDiv.appendChild(cardDiv);
        cardDiv.classList.add("card");
        cardDiv.style.backgroundColor = _cardBackColor;
        cardDiv.style.height = _cardSize;
        cardDiv.style.width = _cardSize;
        cardDiv.addEventListener("click", flipCard);

        let cardValueSpan: HTMLSpanElement = document.createElement("span");
        cardDiv.appendChild(cardValueSpan);
        cardValueSpan.innerHTML = _value.toString();
        cardValueSpan.classList.add("hidden");
        cardValueSpan.style.color = _fontColor;
        cardValueSpan.style.fontFamily = _fontFamily;
    }

    function flipCard(_event: Event): void {
        if (locked === true) {
            // Ausführung der Funktion wird mit return abgebrochen
            return;
        } else {
            let cardClicked: HTMLDivElement = <HTMLDivElement>_event.target;
            if (cardClicked === firstCardClicked) {
                return;
            } else {
                let cardClickedSpan: HTMLSpanElement = cardClicked.querySelector("span");
                cardClickedSpan.classList.remove("hidden");
                if (firstCardClicked === undefined) {
                    firstCardClicked = cardClicked;
                    return;
                } else {
                    let secondCardValue: string = cardClickedSpan.innerHTML;
                    let firstCardClickedSpan: HTMLSpanElement = firstCardClicked.querySelector("span");
                    let firstCardValue: string = firstCardClickedSpan.innerHTML;
                    locked = true;

                    // Die Funktion setTimeout() ruft nach der gegebenen Zeitspanne (in ms) die anonyme Funktion auf.
                    // https://developer.mozilla.org/de/docs/Web/API/setTimeout
                    setTimeout(function (): void {
                        locked = false;
                        if (firstCardValue === secondCardValue) {
                            cardClicked.classList.add("invisible");
                            firstCardClicked.classList.add("invisible");
                            // Suche nach einem Element das die Klasse "card" aber NICHT die Klasse "invisible" hat
                            let visibleCard: HTMLDivElement = document.querySelector(".card:not(.invisible)");
                            if (visibleCard === null) {
                                let endTimeStamp: Date = new Date();
                                let durationInMs: number = endTimeStamp.getTime() - startTimeStamp.getTime();
                                let minutes: number = Math.floor(durationInMs / 60000);
                                let seconds: number = Math.floor((durationInMs % 60000) / 1000);
                                alert("Glückwunsch! Dauer: " + minutes + "min " + seconds + "s");

                            }
                        } else {
                            cardClickedSpan.classList.add("hidden");
                            firstCardClickedSpan.classList.add("hidden");
                        }
                        firstCardClicked = undefined;
                    }, 2000);
                }
            }
        }
    }

    function shuffle(a: number[]): number[] {
        for (let i: number = a.length - 1; i > 0; i--) {
            const j: number = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
}

