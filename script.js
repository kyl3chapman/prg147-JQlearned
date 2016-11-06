$(function () {
    "use strict";
    $("#jack").draggable();
});
$(function () {
    "use strict";
    $("#moon").resizable();
});
$(document).ready(function () {
    "use strict";
    $("#tree").fadeIn(3000);
    $("#santa").fadeIn(5000);
    $("#elf").fadeIn(3000);
    $("#snowman").fadeIn(3000);
    $("#star").fadeIn(3000);
    $("#santa").click(function () {
        $(this).animate({
            left: '-=900px'
            , width: "30%"
            , height: "50%"
            , opacity: '0'
        }, 3000);
    });
    $("#star").click(function () {
        $(this).animate({
            left: '+=1000px'
            , top: '-=200px'
            , width: "-50%"
            , height: "-50%"
            , opacity: '0'
        }, 5000);
    });
    $("#elf").click(function () {
        $("p").prepend("<b>I hate Christmas!</b>. ");
    });
   
    $("#snowman").click(function(){
        $("#snowman").hide();
    });
});