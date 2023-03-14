$(document).ready(()=>{
    $(".calculate-btn").click(function(){
        $(".calculate-menu").css({"position": "relative!important" , "display": "block"})
    })
    
});


$('.removeItems').click(function(){
    $(this).parent().remove();
 });

//  $(document).ready(function() {
//     $('.cartplusone').click(function() {
//       var input = $(this).siblings('.cartvalue');
//       var currentVal = parseInt(input.val());
//       if (!isNaN(currentVal)) {
//         input.val(currentVal + 1);
//       }
//     });
  
//     $('.cartminusone').click(function() {
//       var input = $(this).siblings('.cartvalue');
//       var currentVal = parseInt(input.val());
//       if (!isNaN(currentVal) && currentVal > 0) {
//         input.val(currentVal - 1);
//       }
//     });
//     var subtotal = currentVal * itemsPrice;
//     $('.subtotal').text('$' + subtotal.toFixed(2));
//     // subtotal=cartvalue*itemsprice



//   });
  

//   $(document).ready(function() {
//   $('.cartplusone').click(function() {
//     var input = $(this).siblings('.cartvalue');
//     var currentVal = parseInt(input.val());
//     if (!isNaN(currentVal)) {
//       input.val(currentVal + 1);
//       var itemsPrice = parseFloat($(this).closest('tr').find('.itemsprice').text().replace(/[^0-9.-]+/g,""));
//       var subtotal = (currentVal-1) * itemsPrice;
//       $('.subtotal').text('$' + subtotal.toFixed()); 
//     }
//   });

//   $('.cartminusone').click(function() {
//     var input = $(this).siblings('.cartvalue');
//     var currentVal = parseInt(input.val());
//     if (!isNaN(currentVal) && currentVal > 0) {
//       input.val(currentVal - 1);
//       var itemsPrice = ($(this).closest('tr').find('.itemsprice').text().replace(/[^0-9.-]+/g,""));
//       var subtotal = (currentVal-1) * itemsPrice;
//       $('.subtotal').text('$' + subtotal.toFixed()); 
//     }
//   });
// });




// var itemsPrice = parseFloat($(this).closest('tr').find('.itemsprice').text().replace(/[^0-9.-]+/g,"")); // get the price per item
// var currentVal = parseInt(input.val()); // get the current value of the cart item
// var subtotal = currentVal * itemsPrice; // calculate the subtotal for the cart item
// $(this).closest('tr').find('.subtotal').text('$' + subtotal.toFixed(2)); // update the subtotal element



   
// price range 
$(document).on('input' , '#customRange1' , function () {
    $('#customrangeValue').html($(this).val());
    
});



 
// $(document).ready(function(){
//       let curr = 0
//       $(".cartminusone").click(function(){
      
//         $(".cartvalue").val( curr <= 0 ? 0 : curr = curr - 1 )
//       })
    
//       $(".cartplusone").click(function(){
//         $(".cartvalue").val(curr = curr + 1)
//       })
//     })
 


  // $(document).ready(function() {
  //   $('.increment').click(function() {
  //     var input = $(this).siblings('.quantity-input');
  //     var currentVal = parseInt(input.val());
  //     if (!isNaN(currentVal)) {
  //       input.val(currentVal + 1);
  //     }
  //   });
  
  //   $('.decrement').click(function() {
  //     var input = $(this).siblings('.quantity-input');
  //     var currentVal = parseInt(input.val());
  //     if (!isNaN(currentVal) && currentVal > 1) {
  //       input.val(currentVal - 1);
  //     }
  //   });
  // });

