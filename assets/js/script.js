$(document).ready(function () {
    
    // Balayage du menu (actif)
    $('.nav-item').click(function (event) {
        // console.log(event);
        // event.currentTarget == this
        $('.nav-item').removeClass('active');
        $(this).addClass('active');
    });


});