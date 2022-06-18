var BeachScenePolymorphyAnimationAnja;
(function (BeachScenePolymorphyAnimationAnja) {
    window.addEventListener("load", handleLoad);
    var canvas;
    function handleLoad() {
        canvas = document.querySelector("canvas");
        BeachScenePolymorphyAnimationAnja.crc2 = canvas.getContext("2d");
        var allBeachElements = [];
        allBeachElements.push(new BeachScenePolymorphyAnimationAnja.Sky(new BeachScenePolymorphyAnimationAnja.Vector(0, 0)));
        allBeachElements.push(new BeachScenePolymorphyAnimationAnja.Sun(new BeachScenePolymorphyAnimationAnja.Vector(400, 195)));
        allBeachElements.push(new BeachScenePolymorphyAnimationAnja.Sea(new BeachScenePolymorphyAnimationAnja.Vector(0, 200)));
        allBeachElements.push(new BeachScenePolymorphyAnimationAnja.Beach(new BeachScenePolymorphyAnimationAnja.Vector(0, 300)));
        allBeachElements.push(new BeachScenePolymorphyAnimationAnja.Cloud(new BeachScenePolymorphyAnimationAnja.Vector(600, 125), new BeachScenePolymorphyAnimationAnja.Vector(150, 75), new BeachScenePolymorphyAnimationAnja.Vector(1, 0)));
        allBeachElements.push(new BeachScenePolymorphyAnimationAnja.Cloud(new BeachScenePolymorphyAnimationAnja.Vector(200, 145), new BeachScenePolymorphyAnimationAnja.Vector(120, 65), new BeachScenePolymorphyAnimationAnja.Vector(0.5, 0)));
        allBeachElements.push(new BeachScenePolymorphyAnimationAnja.Boat(new BeachScenePolymorphyAnimationAnja.Vector(400, 155), new BeachScenePolymorphyAnimationAnja.Vector(0.5, 0.5), "#CCBBEE", new BeachScenePolymorphyAnimationAnja.Vector(-1, 0)));
        allBeachElements.push(new BeachScenePolymorphyAnimationAnja.Swimmer(new BeachScenePolymorphyAnimationAnja.Vector(300, 220), new BeachScenePolymorphyAnimationAnja.Vector(0.5, 0.5), new BeachScenePolymorphyAnimationAnja.Vector(0.5, 0)));
        allBeachElements.push(new BeachScenePolymorphyAnimationAnja.Boat(new BeachScenePolymorphyAnimationAnja.Vector(250, 180), new BeachScenePolymorphyAnimationAnja.Vector(-1, 1), "#f3c4cf", new BeachScenePolymorphyAnimationAnja.Vector(2, 0)));
        allBeachElements.push(new BeachScenePolymorphyAnimationAnja.Person(new BeachScenePolymorphyAnimationAnja.Vector(300, 410), "shirt", "#8800FF"));
        allBeachElements.push(new BeachScenePolymorphyAnimationAnja.Person(new BeachScenePolymorphyAnimationAnja.Vector(410, 420), "skirt", "#C4FAF8"));
        allBeachElements.push(new BeachScenePolymorphyAnimationAnja.Surfboard(new BeachScenePolymorphyAnimationAnja.Vector(540, 290)));
        allBeachElements.push(new BeachScenePolymorphyAnimationAnja.Surfer(new BeachScenePolymorphyAnimationAnja.Vector(500, 200)));
        allBeachElements.push(new BeachScenePolymorphyAnimationAnja.Swimmer(new BeachScenePolymorphyAnimationAnja.Vector(400, 290), new BeachScenePolymorphyAnimationAnja.Vector(1, 1), new BeachScenePolymorphyAnimationAnja.Vector(0, 0)));
        allBeachElements.push(new BeachScenePolymorphyAnimationAnja.PalmTree(new BeachScenePolymorphyAnimationAnja.Vector(700, 200), new BeachScenePolymorphyAnimationAnja.Vector(1, 1)));
        allBeachElements.push(new BeachScenePolymorphyAnimationAnja.PalmTree(new BeachScenePolymorphyAnimationAnja.Vector(160, 170), new BeachScenePolymorphyAnimationAnja.Vector(-0.8, 0.9)));
        allBeachElements.push(new BeachScenePolymorphyAnimationAnja.Bush(new BeachScenePolymorphyAnimationAnja.Vector(60, 500), new BeachScenePolymorphyAnimationAnja.Vector(120, 100)));
        allBeachElements.push(new BeachScenePolymorphyAnimationAnja.Bush(new BeachScenePolymorphyAnimationAnja.Vector(720, 600), new BeachScenePolymorphyAnimationAnja.Vector(180, 80)));
        allBeachElements.push(new BeachScenePolymorphyAnimationAnja.Moewe(new BeachScenePolymorphyAnimationAnja.Vector(650, 100), new BeachScenePolymorphyAnimationAnja.Vector(1, 1), new BeachScenePolymorphyAnimationAnja.Vector(1, -0.9)));
        allBeachElements.push(new BeachScenePolymorphyAnimationAnja.Moewe(new BeachScenePolymorphyAnimationAnja.Vector(600, 400), new BeachScenePolymorphyAnimationAnja.Vector(1.1, 1.1), new BeachScenePolymorphyAnimationAnja.Vector(9, 4)));
        allBeachElements.push(new BeachScenePolymorphyAnimationAnja.Moewe(new BeachScenePolymorphyAnimationAnja.Vector(600, 75), new BeachScenePolymorphyAnimationAnja.Vector(0.9, 0.9), new BeachScenePolymorphyAnimationAnja.Vector(1, 5)));
        allBeachElements.push(new BeachScenePolymorphyAnimationAnja.Moewe(new BeachScenePolymorphyAnimationAnja.Vector(700, 60), new BeachScenePolymorphyAnimationAnja.Vector(1.2, 1.3), new BeachScenePolymorphyAnimationAnja.Vector(1, -0.5)));
        allBeachElements.push(new BeachScenePolymorphyAnimationAnja.Moewe(new BeachScenePolymorphyAnimationAnja.Vector(100, 75), new BeachScenePolymorphyAnimationAnja.Vector(1.3, 1.3), new BeachScenePolymorphyAnimationAnja.Vector(4, 3)));
        allBeachElements.push(new BeachScenePolymorphyAnimationAnja.Moewe(new BeachScenePolymorphyAnimationAnja.Vector(490, 550), new BeachScenePolymorphyAnimationAnja.Vector(1.5, 1.5), new BeachScenePolymorphyAnimationAnja.Vector(9, 2)));
        //let beachElement: BeachElement = new BeachElement()
        setInterval(function () {
            for (var _i = 0, allBeachElements_1 = allBeachElements; _i < allBeachElements_1.length; _i++) {
                var beachElement = allBeachElements_1[_i];
                beachElement.draw();
                beachElement.move(1);
            }
        }, 20);
    }
})(BeachScenePolymorphyAnimationAnja || (BeachScenePolymorphyAnimationAnja = {}));
//# sourceMappingURL=script.js.map