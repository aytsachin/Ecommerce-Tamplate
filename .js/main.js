
$(document).ready(() => {
    $(window).scroll(() => {

      if($(document).scrollTop()>47){
       
        $("#stopOnHeading").css({
"position": "fixed",
"width": "100%",
"zIndex": "999",
"top": "0"
});

      }
      if($(document).scrollTop()<=47){

        $("#stopOnHeading").removeAttr("style");
      }
      // else

    });
  });

  // Rating color

$(document).ready(()=>{
    $(window).scroll(()=>{
        if ($(document).scrollTop()>500) {
            $(".rating").css({
                "color":" gold"
            });
            
        }
        if ($(document).scrollTop()<500) {
            $(".rating").removeAttr("style");
        }
    })
})
