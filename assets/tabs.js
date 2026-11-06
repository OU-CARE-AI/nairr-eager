// Sticky section tabs: highlight the section in view and fill the progress line.
(function () {
  var nav = document.querySelector('.tabs');
  if (!nav) return;
  var links = Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]'));
  var bar = nav.querySelector('.progress');
  var secs = links.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); });
  function update() {
    var y = window.scrollY + nav.offsetHeight + 24, cur = 0;
    secs.forEach(function (s, i) { if (s && s.offsetTop <= y) cur = i; });
    links.forEach(function (a, i) { a.classList.toggle('on', i === cur); });
    var max = document.documentElement.scrollHeight - window.innerHeight;
    if (bar) bar.style.width = (max > 0 ? 100 * window.scrollY / max : 0) + '%';
  }
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
