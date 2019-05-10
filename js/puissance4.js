$(document).ready(function () {
    toastr.info('Calculatrice, Calendar, TicTactoe and Puissance 4', 'Welcome to');

    var player = 'yellow';

    if (player == 'yellow') {
        $(this).find('.puissance4').click(function () {
            //$(this).append('<span class="active"></span>');
            $(this).nextAll().not('.locked').last().append('<span class="yellow"></span>');
            $(this).nextAll().not('.locked').last().addClass("locked");
        });
    } else {
        $(this).find('.puissance4').click(function () {
            //$(this).append('<span class="active"></span>');
            $(this).nextAll().not('.locked').last().append('<span class="blue"></span>');
            $(this).nextAll().not('.locked').last().addClass("locked");
        });
    }


})

