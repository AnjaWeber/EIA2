var BeachSceneInteractionAnja;
(function (BeachSceneInteractionAnja) {
    window.addEventListener("load", handleLoad);
    var canvas;
    function handleLoad() {
        canvas = document.querySelector("canvas");
        BeachSceneInteractionAnja.crc2 = canvas.getContext("2d");
        var allBeachElements = [];
        allBeachElements.push(new BeachSceneInteractionAnja.Sky(new BeachSceneInteractionAnja.Vector(0, 0)));
        allBeachElements.push(new BeachSceneInteractionAnja.Sun(new BeachSceneInteractionAnja.Vector(400, 195)));
        allBeachElements.push(new BeachSceneInteractionAnja.Sea(new BeachSceneInteractionAnja.Vector(0, 200)));
        allBeachElements.push(new BeachSceneInteractionAnja.Beach(new BeachSceneInteractionAnja.Vector(0, 300)));
        allBeachElements.push(new BeachSceneInteractionAnja.Cloud(new BeachSceneInteractionAnja.Vector(600, 125), new BeachSceneInteractionAnja.Vector(150, 75), new BeachSceneInteractionAnja.Vector(1, 0)));
        allBeachElements.push(new BeachSceneInteractionAnja.Cloud(new BeachSceneInteractionAnja.Vector(200, 145), new BeachSceneInteractionAnja.Vector(120, 65), new BeachSceneInteractionAnja.Vector(0.5, 0)));
        allBeachElements.push(new BeachSceneInteractionAnja.Boat(new BeachSceneInteractionAnja.Vector(400, 155), new BeachSceneInteractionAnja.Vector(0.5, 0.5), "#CCBBEE", new BeachSceneInteractionAnja.Vector(-1, 0)));
        allBeachElements.push(new BeachSceneInteractionAnja.Swimmer(new BeachSceneInteractionAnja.Vector(300, 220), new BeachSceneInteractionAnja.Vector(0.5, 0.5), new BeachSceneInteractionAnja.Vector(0.5, 0)));
        allBeachElements.push(new BeachSceneInteractionAnja.Boat(new BeachSceneInteractionAnja.Vector(250, 180), new BeachSceneInteractionAnja.Vector(1, 1), "#f3c4cf", new BeachSceneInteractionAnja.Vector(2, 0)));
        allBeachElements.push(new BeachSceneInteractionAnja.Person(new BeachSceneInteractionAnja.Vector(300, 410), "shirt", "#8800FF"));
        allBeachElements.push(new BeachSceneInteractionAnja.Person(new BeachSceneInteractionAnja.Vector(410, 420), "skirt", "#C4FAF8"));
        allBeachElements.push(new BeachSceneInteractionAnja.Surfboard(new BeachSceneInteractionAnja.Vector(540, 290)));
        allBeachElements.push(new BeachSceneInteractionAnja.Surfer(new BeachSceneInteractionAnja.Vector(500, 200)));
        allBeachElements.push(new BeachSceneInteractionAnja.Swimmer(new BeachSceneInteractionAnja.Vector(400, 290), new BeachSceneInteractionAnja.Vector(1, 1), new BeachSceneInteractionAnja.Vector(0, 0)));
        allBeachElements.push(new BeachSceneInteractionAnja.PalmTree(new BeachSceneInteractionAnja.Vector(700, 200), new BeachSceneInteractionAnja.Vector(1, 1)));
        allBeachElements.push(new BeachSceneInteractionAnja.PalmTree(new BeachSceneInteractionAnja.Vector(160, 170), new BeachSceneInteractionAnja.Vector(-0.8, 0.9)));
        allBeachElements.push(new BeachSceneInteractionAnja.Bush(new BeachSceneInteractionAnja.Vector(60, 500), new BeachSceneInteractionAnja.Vector(120, 100)));
        allBeachElements.push(new BeachSceneInteractionAnja.Bush(new BeachSceneInteractionAnja.Vector(720, 600), new BeachSceneInteractionAnja.Vector(180, 80)));
        allBeachElements.push(new BeachSceneInteractionAnja.Moewe(new BeachSceneInteractionAnja.Vector(650, 100), new BeachSceneInteractionAnja.Vector(1, 1), new BeachSceneInteractionAnja.Vector(1, -0.9)));
        allBeachElements.push(new BeachSceneInteractionAnja.Moewe(new BeachSceneInteractionAnja.Vector(600, 400), new BeachSceneInteractionAnja.Vector(1.1, 1.1), new BeachSceneInteractionAnja.Vector(9, 4)));
        allBeachElements.push(new BeachSceneInteractionAnja.Moewe(new BeachSceneInteractionAnja.Vector(600, 75), new BeachSceneInteractionAnja.Vector(0.9, 0.9), new BeachSceneInteractionAnja.Vector(1, 5)));
        allBeachElements.push(new BeachSceneInteractionAnja.Moewe(new BeachSceneInteractionAnja.Vector(700, 60), new BeachSceneInteractionAnja.Vector(1.2, 1.3), new BeachSceneInteractionAnja.Vector(1, -0.5)));
        allBeachElements.push(new BeachSceneInteractionAnja.Moewe(new BeachSceneInteractionAnja.Vector(100, 75), new BeachSceneInteractionAnja.Vector(1.3, 1.3), new BeachSceneInteractionAnja.Vector(4, 3)));
        allBeachElements.push(new BeachSceneInteractionAnja.Moewe(new BeachSceneInteractionAnja.Vector(490, 550), new BeachSceneInteractionAnja.Vector(1.5, 1.5), new BeachSceneInteractionAnja.Vector(9, 2)));
        setInterval(function () {
            for (var _i = 0, allBeachElements_1 = allBeachElements; _i < allBeachElements_1.length; _i++) {
                var beachElement = allBeachElements_1[_i];
                beachElement.draw();
                beachElement.move(1);
            }
        }, 20);
        canvas.addEventListener("click", function (event) {
            var x = event.clientX - event.target.offsetLeft;
            var y = event.clientY - event.target.offsetTop;
            var clickedElement;
            for (var _i = 0, allBeachElements_2 = allBeachElements; _i < allBeachElements_2.length; _i++) {
                var beachElement = allBeachElements_2[_i];
                if (beachElement.isClicked(new BeachSceneInteractionAnja.Vector(x, y)) === true) {
                    clickedElement = beachElement;
                }
            }
            if (clickedElement !== undefined) {
                clickedElement.click();
            }
        });
    }
})(BeachSceneInteractionAnja || (BeachSceneInteractionAnja = {}));
//# sourceMappingURL=script.js.map