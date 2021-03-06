
$(function() {

  // Slider
  $('#coin-slider').coinslider({width:1320,height:360,opacity:1});

  // Radius Box
  //$('a.com, a.rm, img.fl, .menu_nav ul, .menu_nav ul li a').css({"border-radius":"6px", "-moz-border-radius":"6px", "-webkit-border-radius":"6px"});
  $('div.img a.com').css({"border-bottom-left-radius":"6px", "border-bottom-right-radius":"6px", "-moz-border-radius-bottomleft":"6px", "-moz-border-radius-bottomright":"6px", "-webkit-border-bottom-left-radius":"6px", "-webkit-border-bottom-right-radius":"6px"});
  $('div.img img.fl').css({"border-top-left-radius":"6px", "border-top-right-radius":"6px", "-moz-border-radius-topleft":"6px", "-moz-border-radius-topright":"6px", "-webkit-border-top-left-radius":"6px", "-webkit-border-top-right-radius":"6px"});

  $('.sidebar').find('.newsLink').each((i, e)=>{
    let link = $(e);
    let target_id = link.attr('target');
    link.click(function() {
      $([document.documentElement, document.body]).animate({
          scrollTop: $(`#${target_id}`).offset().top - 30
      }, 800);
    });
  });

});