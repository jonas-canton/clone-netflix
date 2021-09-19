function animateScroll() {
  const mainMovie = document.querySelector('.main-movie');
  const header = document.querySelector('header');

  if (mainMovie.getBoundingClientRect().top < 0) {
    header.classList.remove('scrolling-off');
    header.classList.add('scrolling-on');
  } else {
    header.classList.remove('scrolling-on');
    header.classList.add('scrolling-off');
  }
}

window.addEventListener('scroll', animateScroll);