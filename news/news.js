if ($(window).width()<=575){
    // $(".appendinheter").append($(".myshopingcarts"));
    $("#sectionInformation").append($("#sectionInformationmobile"));
    $(".sidebar").css({"display": "none"})
    $(".main").css({"display": "flex"})
    $(".appendinheter").css({"right": "1em"})
    $("#newsSection").children().children().css({"margin":"3em 0"})
    $("#newsSection").children().children().children().css({"height":"8em" ,  "backgroundSize":"100%"}).children('h1').css({"fontSize":"1.5em","padding":".5em"});
    $("#stopOnHeading").children().css({"width": "90%"});
    $("body").css({"overflowX":"hidden"})
}
