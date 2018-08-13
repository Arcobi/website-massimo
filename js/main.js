$(document).ready(function() {
  
  var Sheight = $(window).height();
  document.getElementById('meta').style.height = Sheight * 1.01 + 'px';


  $(window).scroll(function() {
    if($(document).scrollTop() > 350) {
      $('#nav').addClass('shrink');
      $('#title').addClass('shrinken');
    } else {
      $('#nav').removeClass('shrink');
      $('#title').removeClass('shrinken');
    }
  });
});
$(window).on('resize', function(){
  var Sheight = $(window).height();
  document.getElementById('meta').style.height = Sheight * 1.01 + 'px';
});
