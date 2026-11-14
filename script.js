(function () {
  var $ = function (s) { return document.querySelector(s); };

  $('#year').textContent = new Date().getFullYear();

  function tick() {
    var t = new Date().toLocaleTimeString('en-PH', { timeZone: 'Asia/Manila', hour: '2-digit', minute: '2-digit', hour12: false });
    $('#clock').textContent = 'Quezon City ' + t + ' PHT';
  }
  tick(); setInterval(tick, 30000);

  var links = document.querySelectorAll('nav a');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      links.forEach(function (a) {
        a.toggleAttribute('aria-current', a.getAttribute('href') === '#' + e.target.id);
        if (a.hasAttribute('aria-current')) a.setAttribute('aria-current', 'true');
      });
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  document.querySelectorAll('main section').forEach(function (s) { io.observe(s); });

  var email = $('#mail').textContent;
  $('#copy').addEventListener('click', function () {
    var done = function (m) { $('#copied').textContent = m; setTimeout(function () { $('#copied').textContent = ''; }, 2500); };
    if (navigator.clipboard) navigator.clipboard.writeText(email).then(function () { done('Copied'); }, function () { done('Copy failed. Select the email above.'); });
    else done('Copy failed. Select the email above.');
  });

  $('#mailform').addEventListener('submit', function (e) {
    e.preventDefault();
    var n = $('#name').value, m = $('#msg').value;
    window.location.href = 'mailto:' + email + '?subject=' + encodeURIComponent('Hello from ' + n) + '&body=' + encodeURIComponent(m);
  });
})();
