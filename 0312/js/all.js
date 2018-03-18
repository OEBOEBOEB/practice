// main-slider START

var n = 1;
$("#next-btn").click(function(){
    for (var i = 1; i < 2; i++){
        n = n + 1;   
        var m = n - 1;
        $("#main" + m).hide();
        if (n > 3){
            n = 1;
        }   
    }     
    $("#main" + n).fadeIn("slow");
});

$("#prev-btn").click(function(){
    for (var i = 1; i < 2; i++){
        n = n - 1;   
        var m = n + 1;
        $("#main" + m).hide();
        if (n < 1){
            n = 3;
        }   
    }     
    $("#main" + n).fadeIn("slow");
});

// main-slider END

// loading...

jQuery(document).ready(function() {
    setTimeout(function() {
        $(".cover").fadeToggle('slow');
    },2000);
});