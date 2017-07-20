var TxtType = function(el, toRotate, period, speed) {
  this.toRotate   = toRotate;
  this.el         = el;
  this.loopNum    = 0;
  this.period     = parseInt(period, 10) || 9999999;
  this.speed      = parseInt(speed, 10) || 500;
  this.txt        = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    // dont delete for now
    //this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = this.speed;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');

  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { padding-right: 10ppx; border-right: 0.06em solid #fff}";
  document.body.appendChild(css);

  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period   = elements[i].getAttribute('data-period');
    var speed    = elements[i].getAttribute('data-speed');
    var delay    = elements[i].getAttribute('data-delay');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period, speed);
    }
  }

};