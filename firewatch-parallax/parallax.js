$(document).ready(function() {
  $(window).on('scroll', function() {

    var winScroll = $(this).scrollTop();

    $('#two').css({
      "transform": "translate(0, -" + winScroll / 300 + "%)"
    })
    $('#three').css({
      "transform": "translate(0, -" + winScroll / 250 + "%)"
    })
    $('#four').css({
      "transform": "translate(0, -" + winScroll / 200 + "%)"
    })
    $('#five').css({
      "transform": "translate(0, -" + winScroll / 140 + "%)"
    })
    $('#six').css({
      "transform": "translate(0, -" + winScroll / 80 + "%)"
    })
    $('#seven').css({
      "transform": "translate(0, -" + winScroll / 40 + "%)"
    })
    $('#eight').css({
      "transform": "translate(0, -" + winScroll / 35 + "%)"
    })




  })
})
