//------------------------------------------------------------------------------------

//Les types de variables
var maChaineDeCaractere = "Ma chaîne de caractère !";
var monEntier = 50;
var monBooleen = true;
var x = y = z = 10; //C'est à lire de droite à gauche, je donne 10 à z, je donne z à y, je donne y à x. J'ai au final déclaré trois variables.

console.log("Exemple d'affichage de différentes variables :");
console.log(maChaineDeCaractere);
console.log(monEntier);
console.log(monBooleen);

//Permet de connaitre que le type de notre variable.
console.log("Exemple d'affichage des types de mes différentes variables :");
console.log(typeof maChaineDeCaractere);
console.log(typeof monEntier);
console.log(typeof monBooleen);

//Quand on concaténise avec une chaîne de caractère on obtient une chaîne de caractère.
console.log(maChaineDeCaractere + ' ' + monEntier + ' ' + monBooleen);

//Exemple de concaténation
var a = 4 + 3 + 'cinq';
var b = 4 * 3 + 'cinq';
var c = 'cinq' + 4 * 3;
var d = 'cinq' + 4 + 3;
var e = 'cinq' + (4 + 3);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

//------------------------------------------------------------------------------------

//Les opérations en js
var number1 = 10;
var number2 = 8;

number1 += number2;
console.log(number1);
number1 -= number2;
console.log(number1);
number1 *= number2;
console.log(number1);
number1 /= number2;
console.log(number1);
number1 %= number2;
console.log(number1);

//------------------------------------------------------------------------------------

//Les opérateurs ( https://www.pierre-giraud.com/javascript/cours-complet/javascript-conditions.php )
/* 
    ==	Est égal à (en valeur)
    !=	Est différent de (en valeur)
    ===	Est égal à (en valeur et en type)
    !==	Est différent de (en valeur ou en type)
    <	Est strictement inférieur à
    <=	Est inférieur ou égal à
    >	Est strictement supérieur à
    >=	Est supérieur ou égal à
*/

var f = 10;
var g = 5;

var fCompagerAvecg = f < g;
console.log(fCompagerAvecg);
var fCompagerAvecg = f > g;
console.log(fCompagerAvecg);
var fCompagerAvecg = f == g;
console.log(fCompagerAvecg);
var fCompagerAvecg = f === g;
console.log(fCompagerAvecg);
var fCompagerAvecg = f != g;
console.log(fCompagerAvecg);
var fCompagerAvecg = f <= g;
console.log(fCompagerAvecg);
var fCompagerAvecg = f >= g;
console.log(fCompagerAvecg);

//------------------------------------------------------------------------------------

//Les condtions
if (f > g) {
    console.log("F est bien supérieur à g")
} else if (f == g) {
    console.log("F est égal à G");
} else {
    console.log("Je ne rentre dans aucune des conditions");
}

// et avec un switch 
var h = 0;

switch (h) {
    case 0:
        console.log("h est 0");
        break;
    case 1:
        console.log("h est 1");
        break;
    default:
        console.log("h n'est ni 0, ni 1");
}

//Opérateur ténaire /!\
testEmail = false;
var emailOk = (testEmail) ? 'Valide' : "Invalide";

//------------------------------------------------------------------------------------

//Les fonctions
function multiplication(x, y) {
    console.log(x * y);
}

multiplication(5, 10);
multiplication(-4, 60);
multiplication(3.14, 3.14);


function milliseconds(x) {
    if (isNaN(x)) {
        return 'Not a Number!';
    }
    return x * 1000;
}

console.log(milliseconds('100fffdd'));
console.log(milliseconds('0.0314E+2'));

//------------------------------------------------------------------------------------



/* function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

    document.body.style.background = bgColor;
}

random_bg_color(); */