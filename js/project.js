// Add no touch class
if (!("ontouchstart" in document.documentElement)) {
  document.documentElement.className += "no-touch";
}

// Toggle CV bar
var el = document.querySelector('.experience-overlay-block');
el.onclick = function() {
  el.classList.toggle('experience-overlay-block-toggled-active');
}

// Send mail link
var send_mail = document.querySelector('.send-email');
send_mail.onclick = function() {
  window.location.href = "mailto:paulhuisman88@gmail.com";
}