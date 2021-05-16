function generuj() {
    document.getElementById("control").innerHTML = null;
    var pocet = +document.getElementById("pocetcisel").value;
    var mp = document.getElementById("mp").checked;
    var Vp = document.getElementById("Vp").checked;
    var nb = document.getElementById("numbers").checked;
    var znaky = document.getElementById("znaky").checked;
    let psg = "";
    let pismena = ["a", "b", "c", "d", "e", "f", "g", "h", "ch", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let velkapismena = ["A", "B", "C", "D", "E", "F", "G", "H", "CH", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let cisla = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var spznaky = ["!", "?", "-", "#", "&", "@", "_"];
    var nahoda = new Array;

    if (mp === true) {
        nahoda.push('1');
    }
    if (Vp === true) {
        nahoda.push('2');
    }
    if (nb === true) {
        nahoda.push('3');
    }
    if (znaky === true) {
        nahoda.push('4');
    }



    for (let i = 0; i < pocet; i++) {

        var vyber = nahoda[Math.floor(Math.random() * nahoda.length)];

        switch (vyber) {
            case '1': {
                let index = getRandom(0, pismena.length - 1);
                psg += pismena[index];
                break;
            }
            case '2': {
                let index = getRandom(0, velkapismena.length - 1);
                psg += velkapismena[index];
                break;
            }
            case "3": {
                let index = getRandom(0, cisla.length - 1);
                psg += cisla[index];
                break;
            }
            case '4': {
                let index = getRandom(0, spznaky.length - 1);
                psg += spznaky[index];
                break;
            }
        }
    }

    return psg;


    function getRandom(min, max) {
        let step1 = max - min + 1;
        let step2 = Math.random() * step1;
        let result = Math.floor(step2) + min;
        return result;
    }
}
function copy() {

    var copyText = document.getElementById("vystup");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    if (copyText.value.length > 0) {
        document.getElementById("control").innerHTML = "Heslo bylo úspěšně skopírováno";
    }

}
function count(x) {
    document.getElementById("count").innerHTML = x;
}
var d = new Date();
document.getElementById("rok").innerHTML = "© Jiří Navrátil" + " " + d.getFullYear();
