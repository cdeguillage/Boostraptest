$(document).ready(function () {
    
    // Balayage du menu (actif)
    $('.nav-item').click(function (event) {
        // console.log(event);
        // event.currentTarget == this
        $('.nav-item').removeClass('active');
        $(this).addClass('active');
    });

});

// ////////////////////////////////////////////////////
// JS
var maChaine = document.getElementById("maChaineJS").getAttribute("data-affiche");
var maChaineDecompose = maChaine.split("");
var ChaineAAfficher = "";
var timeBoucle;

function boucle() {

    if (maChaineDecompose.length > 0)
    {
        ChaineAAfficher += maChaineDecompose.shift();
        document.getElementById("maChaineJS").innerHTML = ChaineAAfficher;
    }
    else
    {
        clearTimeout(timeBoucle);
    }

    timeBoucle = setTimeout('boucle(ChaineAAfficher)', 170);
}

boucle(ChaineAAfficher);

// ////////////////////////////////////////////////////
// JQUERY
$('#maChaineJQUERY').empty();
var chaine = $('#maChaineJQUERY').data('affiche').trim();
for (let i = 0; i < chaine.length; i++) {
    setTimeout(function () {
        $('#maChaineJQUERY').append(chaine[i]);
    }, 300*i );
}