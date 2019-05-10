$(document).ready(function () {
    toastr.info('Calculatrice, Calendar, TicTactoe and Puissance 4', 'Welcome to');

    var tabPosition = {
        col1: new Array(),
        col2: new Array(),
        col3: new Array(),
        col4: new Array(),
        col5: new Array(),
        col6: new Array(),
        col7: new Array(),
    }

    var tab = new Array();

    $(this).find('.puissance4').click(function () {
        if ($('input#player').val() == 'yellow') {
            $(this).nextAll().not('.locked').last().append('<span class="yellow"></span>');
            $(this).nextAll().not('.locked').last().addClass("locked");
            tab = $(this).parent().children();
            checkPosition(tab, $(this).parent()[0].className.substr(-4));
            $('input#player').val(' blue');
        } else {
            $(this).nextAll().not('.locked').last().append('<span class="blue"></span>');
            $(this).nextAll().not('.locked').last().addClass("locked");
            tab = $(this).parent().children();
            checkPosition(tab, $(this).parent()[0].className.substr(-4));
            $('input#player').val('yellow');
        }
        console.log(tabPosition.col1);
        console.log(tabPosition.col2);
        console.log(tabPosition.col3);
        console.log(tabPosition.col4);
        console.log(tabPosition.col5);
        console.log(tabPosition.col6);
        console.log(tabPosition.col7);
    });

    function checkPosition(tab, col) {
        for (i = 0; i < tab.length; i++) {
            //console.log(col);
            if (tab[i].className == 'puissance4 locked') {
                tabPosition[col][i] = $('input#player').val();
                break;
            }
        }
    }
});

