$(document).ready(function(){
  $.supersized({
    fit_landscape: 0,
    autoplay: 1,
    random: 1,
    performance: 1,
    transition: 1,
    transition_speed: 1100,
    slide_interval: 6000,
    slide_links: 'blank',
    slides :[
      {image : 'work/australia.jpg'},
      {image : 'work/tdp3.jpg'},
      {image : 'work/argentina1.jpg'},
      {image : 'work/tdp1.jpg'},
      {image : 'work/valpa.jpg'},
      {image : 'work/isla.jpg'},
      {image : 'work/zakynthos-boats.jpg'},
      {image : 'work/thailand.jpg'},
      {image : 'work/indonesia.jpg'},
      {image : 'work/thailand2.jpg'},
    ]
  });

  $('a#email_me').click(function() {
    var _gaq = _gaq || [];
    _gaq.push(['_trackEvent', 'Outside link', 'E-mail']);
    document.location = 'mailto:paulhuisman88@gmail.com';
    return false;
  })

  $(".slide-0 img")
    .on('load', function() {
      $('.story-text').delay(300).animate({"top": '50%',"opacity": "1"}, 1000);
    })
  ;

  calcResolution();

  $(window).resize(function(){
    calcResolution();
  });

  function calcResolution(){
    windowWidth = $(window).width();
    windowHeight = $(window).height();

    if(windowWidth <= 360){
      $("#supersized").hide();
      $("#supersized-loader").hide();
    }
    else if ( windowWidth > 360) {
      $("#supersized").show();
      $("#supersized-loader").show();
    }

    $('#prevslide img').css({
      'max-width' : '65px',
      'width' :  (windowWidth / 100) * 6.5+'px'
    }),

    $('#nextslide img').css({
        'max-width' : '65px',
        'width' :  (windowWidth / 100) * 6.5+'px'
    });
  }
});