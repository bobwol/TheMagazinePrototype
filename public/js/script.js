$(document).ready(function() {
  script.init();
});

var script = {
  init: function() {
    console.log('script is loaded and ready...');

    $('body').addClass('js');

    $('.menu-icon').on('click', function() {
      $('.navContent').toggleClass('active');
      return false;
    });

  }
};