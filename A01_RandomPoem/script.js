var RandomPoem;
(function (RandomPoem) {
    // Arrays zur Erstellung der Zufallsgedichte
    var subject = ["Anja", "Benedikt", "Steffi", "Taubsi", "Merle"];
    var predicate = ["isst", "schlägt", "tötet", "ärgert", "liebt"];
    var object = ["Schattenfell", "Menschen", "Kinder", "Zauberer", "den Herrn der Ringe"];
    //console.log(subject);
    //console.log(predicate);
    //console.log(object);
    // for Schleife welche die Laufvariable rückwärts zählen lässt bis Wert 1 erreicht ist
    for (var index = subject.length; index >= 1; index--) {
        //console.log(index);
        var result = getVerse(subject, predicate, object);
        console.log(result);
    }
    function getVerse(_subject, _predicate, _object) {
        var verse = "";
        var index1 = Math.floor(Math.random() * _subject.length);
        // console.log(index1);
        verse = verse + _subject.splice(index1, 1)[0] + " ";
        var index2 = Math.floor(Math.random() * _predicate.length);
        // console.log(index2);
        verse = verse + _predicate.splice(index2, 1)[0] + " ";
        var index3 = Math.floor(Math.random() * _object.length);
        // console.log(index3);
        verse = verse + _object.splice(index3, 1)[0] + " ";
        return verse;
    }
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=script.js.map