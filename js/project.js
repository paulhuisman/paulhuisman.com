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
const sendMailList = document.querySelectorAll('.send-email');
sendMailList.forEach(element => {
    element.addEventListener('click', function() {
        window.location.href = "mailto:paulhuisman88@gmail.com";
    })
});