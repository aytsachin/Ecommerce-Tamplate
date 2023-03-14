
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
$(".collapse").css({"display":"none"});
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
}); 

// ================== User/Register for responsive =========
$(document).ready(function(){
  $("#userRegisterbtn").click(function(){
    // console.log("hello");
    
    $("#userRegisterbtnChild").removeClass("d-flex , d-none")
    $("#userRegisterbtnChild").css({ "display": "grid",
      "justifyContent": "spaceAround" });
    $(".helplinebtn").css({
      "margin": "0 1.6em"
    });
    $(" #usercrossbtn , .helplinebtn").removeClass("d-none")
    // $(".menubarBtnUser").removeClass("fa-bars").addClass("d-none");
  });
  
 
});

$(document).ready(function(){
  $(".CrossMark").click(function(){
    // console.log("hello");
    $("#userRegisterbtnChild").addClass(" d-none")
    $("#userRegisterbtnChild").removeAttr("style");
    // $("#userRegisterbtnChild").removeClass("d-flex");
    $(" #usercrossbtn , .helplinebtn").addClass("d-none")
  });
});

$(document).ready(function(){
  $(".navbar-toggler-btn").click(function(){
    // $(".collapse").addClass("show");
    $(".collapse").toggle("show"); 
    

  })
})




// ( $( this ).text() )

// $(document).ready(function(){
// //   let existing = [ "q9anz4", "avd83n", "i2r37d", "jk3eum"]
// // let newId = randomId();
// // existing.find(function(id) {
// //   return id === newId;
// // });
//   let curr = 0
//   $(".itomscount").children(".cartminusone").click(function(){
//     // $(".cartminusone").randomId("Id")= $(".cartvalue");
//     $(".itomscount").children("button").val( curr <= 0 ? 0 : curr = curr - 1 )
//   })

//   $(".itomscount").children(".cartplusone").click(function(){
//     $(".itomscount").children(".cartvalue").val(curr = curr + 1)
//   })
// })


$(document).ready(function() {
  $('.cartplusone').click(function() {
    var input = $(this).siblings('.cartvalue');
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
      input.val(currentVal + 1);
      var itemsPrice = parseFloat($(this).closest('tr').find('.itemsprice').text());
      var subtotal = (currentVal+1) * itemsPrice;
      $(this).closest('tr').find('.subtotal').text(subtotal); 
    }
  });

  $('.cartminusone').click(function() {
    var input = $(this).siblings('.cartvalue');
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal) && currentVal > 0) {
      input.val(currentVal-1);
      var itemsPrice = parseFloat($(this).closest('tr').find('.itemsprice').text());
      var subtotal = currentVal * itemsPrice - itemsPrice;
      $(this).closest('tr').find('.subtotal').text( subtotal); 
    }
  });
});








$(".cartvalue").keyup(function(){
  if (/\D/g.test(this.value))
  {
   
    this.value = this.value.replace(/\D/g, '');
  }
})


// $(document).ready(function(){
//   // Initialize cart values for each product
//   let cartValues = [0, 0, 0, 0, 0];
  
//   // Add click event for minus button for each product
//   $(".cartminusone").click(function(){
//     let index = $(this).data("index");
//     cartValues[index] = cartValues[index] <= 0 ? 0 : cartValues[index] - 1;
//     $("#cartvalue" + index).val(cartValues[index]);
//   })

//   // Add click event for plus button for each product
//   $(".cartplusone").click(function(){
//     let index = $(this).data("index");
//     cartValues[index] = cartValues[index] + 1;
//     $("#cartvalue" + index).val(cartValues[index]);
//   })

//   // Add keyup event for each product's cart value input field
//   $(".cartvalue").keyup(function(){
//     let index = $(this).data("index");
//     if (/\D/g.test(this.value))
//     {
//       // Filter non-digits from input value.
//       this.value = this.value.replace(/\D/g, '');
//     }
//     cartValues[index] = parseInt($(this).val());
//   })
// })



// =================advance css
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
  
// }
// $(".card-img-top").hover(
// function(){
//   $(".card-img-top").toggle("src", "https://the7.io/elementor-shop/wp-content/uploads/sites/79/2022/08/2023-001-600x800.jpg");
// }
// );

$(function(){
  $("#header").load("header.html"); 
});
// $("#header").append("header.html#appendheader"); 




//=========== media query 

  if ($(window).width()<=575) {
    // console.log("hello bhaijan")
    $("#userRegisterbtnChild").removeClass("d-flex").css({"display":"none"})
    $(" #usercrossbtn , .helplinebtn").addClass("d-none");
    $(".menuSideImage").css({
      "height":"5em",
      "margin":"1em 0"

    });
   
    $(".menuSideImage2").css({
      "position":"relative",
      "right":"-2.8em"

    })
    $(".slider_discription").css({"top":"0" , "padding": "0 3em"});
    $(".slider_discription").children("h1").css({"fontSize":"1.5em"});
    $(".myshopingcarts").children("i").children("span").css({"right":"auto"});
    // $(".myshopingcarts").remove();
    $(".appendinheter").append($(".myshopingcarts"));
    $(".appendinheter").css({"position":"fixed" , "bottom":"0" , "right":"0" , "zIndex":"999"})
  }
  if ($(window).width()>575) {
    $("#userRegisterbtn , .CrossMark , .navbar-toggler-btn").css({
      "display": "none"
    });
    $(".menuSideImage").css({
      "height":"18em",

    });
    $(".menuSideImage").parent().parent().removeClass("d-flex");
    $(".cartvalue").css({"background":"transparent"});
    $(".cartplusone").css({
      "right": "13px",
      "position": "relative",
      "top": "-0.1em",
      "cursor": "pointer"
  })
  $(".cartminusone").css({
    "right": "0",
    "position": "relative",
    "top": "-0.1em",
    "cursor": "pointer"
})
 
// $("#header").append($("#appendheader"));
  }
  else{

  }
  


  function includeHTML(header) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("header").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", header.html, true);
    xhttp.send();
  }
  

  (function($){
    $.fn.disableSelection = function() {
        return this
        .attr('unselectable', 'on')
        .css('user-select', 'none')
        .on('selectstart dragstart', false);
    };
})(jQuery);