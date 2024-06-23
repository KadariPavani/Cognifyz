const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const readMore = card.querySelector('.read-more');
  readMore.addEventListener('click', () => {
    card.classList.toggle('active');
  });
});

