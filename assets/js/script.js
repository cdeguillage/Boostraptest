$(document).ready(function () {
    
    // Balayage du menu (actif)
    $('.nav-item').click(function (event) {
        // console.log(event);
        // event.currentTarget == this
        $('.nav-item').removeClass('active');
        $(this).addClass('active');
    });

});


var maChaine = document.getElementById("maChaine").getAttribute("data-affiche");
var maChaineDecompose = maChaine.split("");
var ChaineAAfficher = "";
var timeBoucle;

function boucle() {

    if (maChaineDecompose.length > 0)
    {
        ChaineAAfficher += maChaineDecompose.shift();
        document.getElementById("maChaine").innerHTML = ChaineAAfficher;
    }
    else
    {
        clearTimeout(timeBoucle);
    }

    timeBoucle = setTimeout('boucle(ChaineAAfficher)', 170);
}

boucle(ChaineAAfficher);
