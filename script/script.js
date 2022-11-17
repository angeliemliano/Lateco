var btn = $('#back-to-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

var onReCaptcha = function () {
      if (grecaptcha.getResponse().length !== 0) {
        var btSubmit = document.getElementById("bt-submit");
        btSubmit.disabled = false;
      }
    };