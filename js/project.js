function hide_cv_bar() {
  // tmp solution
  var block = document.getElementsByClassName('experience-overlay-block');
  block[0].style.width = '8.333vw';
  var close = document.getElementsByClassName('close');
  close[0].style.display = 'none';
  var list_big = document.getElementsByClassName('cv-list-big');
  list_big[0].style.display = 'none';
  var list_small = document.getElementsByClassName('cv-list-small');
  list_small[0].style.display = 'block';
}

function send_email() {
  window.location.href = "mailto:paulhuisman88@gmail.com";
}