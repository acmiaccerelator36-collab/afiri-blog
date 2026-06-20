// ハンバーガーメニュー
function toggleNav() {
  const nav = document.getElementById('mobileNav');
  nav.classList.toggle('open');
}
document.addEventListener('click', function(e) {
  const nav = document.getElementById('mobileNav');
  const toggle = document.querySelector('.nav-toggle');
  if (nav && toggle && !nav.contains(e.target) && !toggle.contains(e.target)) {
    nav.classList.remove('open');
  }
});
