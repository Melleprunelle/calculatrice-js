//----------------------
// Fonction de calcul
//----------------------

function addition(x, y) {
    resultat = valideXY(x, y) ? (x + y) : 'erreur';
    return resultat;
}

function soustraction(x, y) {
    resultat = valideXY(x, y) ? (x - y) : 'erreur';
    return resultat;
}

function multiplier(x, y) {
    resultat = valideXY(x, y) ? (x * y) : 'erreur';
    return resultat;
}

function diviser(x, y) {
    resultat = valideXY(x, y, 1) ? (x / y) : 'erreur';
    return resultat;
}

function valideXY(x, y, d = 0) {
    if (d == 1 && y == 0) {
        return false;
    }

    if ((typeof x != 'number') || (typeof y != 'number')) {
        return false;
    } else {
        return true;
    }
}

//----------------------
// Fonction d'interface
//----------------------

function cleanupTab(tab) {
    for (i = 0; i < tab.length; i++) {
        if (tab[i].indexOf("=") != -1) {
            tab[i] = tab[i].slice(0, tab[i].indexOf('='));
        }
    }
    return tab;
}

function calculTab(tab) {
    for (i = 0; i < tab.length; i++) {
        var res = eval(tab[i]);
        tab[i] = tab[i] + '=' + res.toFixed(2);
    }
    return tab;
}


function afficher(val) {
    var myDiv = document.getElementById("affichage");
    myDiv.appendChild(document.createTextNode(val));
}

function valider() {
    var myDiv = document.getElementById("affichage");
    var operation = myDiv.innerHTML;
    var tabResultat = operation.split('<br>');

    console.log(tabResultat);
    tabResultat = cleanupTab(tabResultat);
    console.log(tabResultat);
    console.log(stringResultat);

    var stringResultat = calculTab(tabResultat);

    for (i = 0; i < stringResultat.length; i++) {
        if (i == 0) {
            myDiv.innerHTML = stringResultat[0];
        } else {
            myDiv.appendChild(document.createTextNode(stringResultat[i]));
        }
        var br = document.createElement('br');
        myDiv.appendChild(br);
    }
}

function retour() {
    var myDiv = document.getElementById("affichage");
    var operation = myDiv.innerHTML;
    if (operation.indexOf('=') == -1) {
        var effacerString = operation.slice(0, operation.length - 1);
    } else {
        var effacerString = operation.slice(0, operation.indexOf('='));
    }
    myDiv.innerHTML = effacerString;
}

function effacer() {
    var myDiv = document.getElementById("affichage");
    myDiv.appendChild(document.createTextNode(''));
    document.getElementById("affichage").innerHTML = '';
}