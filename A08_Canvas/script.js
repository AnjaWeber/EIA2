//Zusammenarbeit mit Lisa Fodor
var GenerativeKunstAnja;
(function (GenerativeKunstAnja) {
    window.addEventListener("load", handleLoad);
    var crc2;
    var crc3;
    function handleLoad(_event) {
        //Canvas per ID suchen
        var canvas = document.querySelector("canvas");
        //2D Kontext von Canvas 
        crc2 = canvas.getContext("2d");
        crc3 = canvas.getContext("2d");
        circle();
        triangle();
    }
    //Funktion um Kreise zu erstellen
    function circle() {
        //Schleife um Höchstzahl der anzuzeigenden Elemente festzulegen
        for (var i = 0; i < 100; i++) {
            //Zufällige Farbe aus RGB -> Zahl hinter * gibt an wie hell oder dunkel Farbe wird
            var red = Math.floor(Math.random() * 400);
            var green = Math.floor(Math.random() * 400);
            var blue = Math.floor(Math.random() * 600);
            // Parameter circle: x, y, radius,  startAngle, endAngle
            crc2.beginPath();
            crc2.arc(Math.floor(Math.random() * (1200) + 1), Math.floor(Math.random() * (750) + 1), Math.floor(Math.random() * (60) + 1), 0, 2 * Math.PI);
            crc2.stroke();
            crc2.closePath();
            // fillStyle zum Füllen der Kreise
            crc2.fillStyle = "rgb(" + red + ", " + green + "," + blue + ")";
            crc2.fill();
        }
    }
    //Funktion Dreiecke generieren 
    function triangle() {
        for (var i = 2; i < 8; i++) {
            var red = Math.floor(Math.random() * 400);
            var green = Math.floor(Math.random() * 300);
            var blue = Math.floor(Math.random() * 300);
            crc3.beginPath();
            //ZUfällige Position der Linien wird ausgewählt
            crc3.moveTo(Math.floor(Math.random() * (1200) + 1), Math.floor(Math.random() * (750) + 1));
            crc3.lineTo(Math.floor(Math.random() * (1200) + 1), Math.floor(Math.random() * (500) + 1));
            crc3.lineTo(Math.floor(Math.random() * (1200) + 1), Math.floor(Math.random() * (1000) + 1));
            crc3.stroke();
            crc3.closePath();
            crc3.fillStyle = "rgb(" + red + ", " + green + "," + blue + ")";
            crc3.fill();
        }
    }
})(GenerativeKunstAnja || (GenerativeKunstAnja = {}));
//# sourceMappingURL=script.js.map