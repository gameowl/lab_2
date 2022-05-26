mybutton = document.getElementById("top-scroll");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

jQuery(document).ready(function() {
    // pop-up close
    jQuery(".corner_x").click(function() {
       jQuery(this).parent(".sugestie").fadeOut();
    });

    //learn more
    jQuery("#learnmore").click(function() {
        jQuery(".learn-text").load("content.html");
        return false;
    });

});