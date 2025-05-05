document.addEventListener('DOMContentLoaded', () => {
  const ctoToggle = document.getElementById('ctoToggle');
  const ctoImages = document.getElementById('ctoImages');

  ctoToggle.addEventListener('click', (e) => {
    e.preventDefault();
    ctoImages.classList.toggle('hidden');
  });
});
