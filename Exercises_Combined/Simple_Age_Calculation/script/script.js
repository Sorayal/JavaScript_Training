$("#buttonAlter").click(function(){

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    //Eingabe empfangen------------------------------------------
    var eingabeAlter = $("#datumsEingabe").val().split('-');

    var year = eingabeAlter[0];
    var month = eingabeAlter[1];
    var day = eingabeAlter[2];

    //Prüft, ob Selektor überhaupt vorhanden ist-----------------
    if(!$("#ergebnis").length){
        $("main").append("<p id='ergebnis'></p>");
        $("main").append("<p id='currentDate'></p>");
    }

    //Prüfung-----------------------------------------------------
    if (eingabeAlter == "") {
        $("#ergebnis").html("<p>Bitte Datum eingeben!</p>");
        return;
    }
    else if (day > currentDay && month == currentMonth && year == currentYear) {
        $("#ergebnis").html("<p>Bitte gültigen Tag eingeben!</p>");
        return;
    }
    else if (month > currentMonth && year == currentYear) {
        $("#ergebnis").html("<p>Bitte gültigen Monat eingeben!</p>");
        return;
    }
    else if (year > currentYear) {
        $("#ergebnis").html("<p>Bitte gültiges Jahr eingeben!</p>");
        return;
    }

    //Berechnung-------------------------------------------------
    result = currentYear - year;
    if(month>currentMonth){
        result--;
    }
    if(month == currentMonth && day > currentDay){
        result--;
    }

    //Ausgabe-----------------------------------------------------
    const textAlter = $("<p></p>").text(`Sie sind ${result} Jahre alt.`);
    const textDatum = $("<p></p>").text(`Heutiges Datum: ${currentDay}.${currentMonth}.${currentYear}`);
    $("#ergebnis").html(textAlter);
    $("#currentDate").html(textDatum);



    // Es soll nur einmal das Element angehängt werden, nicht bei jedem Click.
    //$("main").append(textAlter, textDatum);

});