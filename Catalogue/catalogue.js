$(document).ready(function(){
    $("#catalogue").hover(function(){
        $(".categoury_section").removeAttr("style").css({ "transition":"20s"});
    })
   
});
$(document).ready(function(){
    $(".main").hover(function(){
        $(".categoury_section").css({"display": "none", "transition":"20s"});
    })
   
});

$(document).ready(()=>{
    $(window).scroll(()=>{
        if ($(document).scrollTop()>10) {
             $(".categoury_section").css({"display": "none", "transition":"20s"});
            
        }
    })
})


$(document).ready(function(){
    $("#catalogue , .categoury_section").click(function(){
        $(".categoury_section").removeAttr("style");
    })
});
// price range 
$(document).on('input' , '#customRange1' , function () {
    $('#customrangeValue').html($(this).val());
    
});