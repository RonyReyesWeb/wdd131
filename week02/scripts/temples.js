// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  if(navMenu.classList.contains('open')) {
    hamburger.textContent = 'X';
  } else {
    hamburger.textContent = '☰';
  }
});

// Dynamic footer
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;
