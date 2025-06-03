window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {    // change 50 to whatever scroll distance you want
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

document.getElementById('show-all-ungraduate-btn').onclick = function(e) {
  e.preventDefault();
  document.querySelectorAll('.event-card.hidden').forEach(el => {
    el.classList.remove('hidden');
    el.classList.add('event-card');
  });
  this.style.display = 'none';
};

document.getElementById('show-all-graduate-btn').onclick = function(e) {
  e.preventDefault();
  document.querySelectorAll('.event-card.graduate.hidden-g').forEach(el => {
    el.classList.remove('hidden-g');
    el.classList.add('.event-card.graduate');
  });
  this.style.display = 'none';
};
