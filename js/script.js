// Accordian 
var action = "click";
var speed = "500";

$(document).ready(function() {
  $('li.q').on(action, function() {
    $(this).next()
        .slideToggle(speed)
          .siblings('li.a')
            .slideUp();
  });
});