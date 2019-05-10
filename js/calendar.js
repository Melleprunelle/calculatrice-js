var day = new Date();
var day2 = day.getDate();
document.getElementById("day").innerHTML = day2;

var month = new Date();
var month2 = month.getMonth();

var tabMonth = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

for (i = 0; i < tabMonth.length; i++) {
    if (i == day.getMonth()) {
        document.getElementById("month").innerHTML = tabMonth[i];
    }
}

var year = new Date();
var year2 = year.getFullYear();
document.getElementById("year").innerHTML = year2;

