$(document).ready(function(){
    var trigger = false;
    $(".burger-icon").click(function(){
        if (trigger == false){
            $('.navpagelist').css("top","100px");
            $('.navpagelist').css("visibility","visible" );
            trigger = true;
        }
        else{
            $('.navpagelist').css("top","-1000px" );
            $('.navpagelist').css("visibility","hidden" );
            trigger = false;
        }
    });
    $(window).resize(function () { 
        var winw = $(window).width();
        if (winw > 600){
            $('.navpagelist').css("top","-1000px" );
            $('.navpagelist').css("visibility","hidden" );
            trigger = false;
        }
    });
});