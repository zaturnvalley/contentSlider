// Accordian 
var action = "click";
var speed = "500";

$(document).ready(function() {
  // Question handler
  $('li.q').on(action, function() {
    // Gets next element
    $(this).next()
        .slideToggle(speed)
          // Select all other answers
          .siblings('li.a')
            .slideUp();
  // Get active arrow quesetion
  var img = $(this).children('img');
  // This will remove the 'rotate' class
  // for all images except active
  $('img').not(img).removeClass('rotate');
  // Toggle 'rotate' class
  img.toggleClass('rotate');
  });
});