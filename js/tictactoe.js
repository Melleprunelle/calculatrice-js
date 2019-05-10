var app;

var tabTictactoe = {
    c0: '',
    c1: '',
    c2: '',
    c3: '',
    c4: '',
    c5: '',
    c6: '',
    c7: '',
    c8: '',
};

(function () {
    app = {
        play: function play(elt) {
            tabTictactoe[elt] = 'X';
            document.getElementById(elt).innerHTML = 'X';
            whoWins();
            moveOrdi();
            whoWins();
        }
    };
    document.getElementById('c0').addEventListener("click", function () {
        play("c0");
    });
})();

function play(elt) {
    document.getElementById(elt).style.backgroundColor = "goldenrod";
    mySpan = document.getElementById(elt);
    mySpan.innerHTML = 'X';
    tabTictactoe[elt] = 'X';
    moveOrdi();
    console.log(tabTictactoe);
}

function moveOrdi() {
    var tabFree = new Array()
    for (var key in tabTictactoe) {
        if (tabTictactoe[key] == '') {
            tabFree.unshift(key);
        }
    }

    if (tabFree.length != 0) {
        var play = parseInt(Math.random() * tabFree.length);
        tabTictactoe[tabFree[play]] = 'O';
        mySpan = document.getElementById(tabFree[play]);
        mySpan.innerHTML = 'O';
    } else {
        document.getElementById('affichage-tictactoe').innerHTML = "Pas de gagnant. Fin de partie";
    }

    //location.reload();
    whoWins();
    console.log(tabFree);
    console.log(tabTictactoe);
}

function whoWins() {
    if ((tabTictactoe.c0 == 'X' && tabTictactoe.c1 == 'X' && tabTictactoe.c2 == 'X') ||
        (tabTictactoe.c3 == 'X' && tabTictactoe.c4 == 'X' && tabTictactoe.c5 == 'X') ||
        (tabTictactoe.c6 == 'X' && tabTictactoe.c7 == 'X' && tabTictactoe.c8 == 'X') ||
        (tabTictactoe.c0 == 'X' && tabTictactoe.c3 == 'X' && tabTictactoe.c6 == 'X') ||
        (tabTictactoe.c1 == 'X' && tabTictactoe.c4 == 'X' && tabTictactoe.c7 == 'X') ||
        (tabTictactoe.c2 == 'X' && tabTictactoe.c5 == 'X' && tabTictactoe.c8 == 'X') ||
        (tabTictactoe.c0 == 'X' && tabTictactoe.c4 == 'X' && tabTictactoe.c8 == 'X') ||
        (tabTictactoe.c6 == 'X' && tabTictactoe.c4 == 'X' && tabTictactoe.c2 == 'X')) {
        document.getElementById('affichage-tictactoe').innerHTML = "Vous avez gagné. Fin de partie";
    } else if ((tabTictactoe.c0 == 'O' && tabTictactoe.c1 == 'O' && tabTictactoe.c2 == 'O') ||
        (tabTictactoe.c3 == 'O' && tabTictactoe.c4 == 'O' && tabTictactoe.c5 == 'O') ||
        (tabTictactoe.c6 == 'O' && tabTictactoe.c7 == 'O' && tabTictactoe.c8 == 'O') ||
        (tabTictactoe.c0 == 'O' && tabTictactoe.c3 == 'O' && tabTictactoe.c6 == 'O') ||
        (tabTictactoe.c1 == 'O' && tabTictactoe.c4 == 'O' && tabTictactoe.c7 == 'O') ||
        (tabTictactoe.c2 == 'O' && tabTictactoe.c5 == 'O' && tabTictactoe.c8 == 'O') ||
        (tabTictactoe.c0 == 'O' && tabTictactoe.c4 == 'O' && tabTictactoe.c8 == 'O') ||
        (tabTictactoe.c6 == 'O' && tabTictactoe.c4 == 'O' && tabTictactoe.c2 == 'O')) {
        document.getElementById('affichage-tictactoe').innerHTML = "Vous avez perdu. Fin de partie";
    }
}