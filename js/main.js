function openSpoiler() {
  let spoilers = document.querySelectorAll('.accordion');
  spoilers.forEach((spoiler) => {
    let spoilerBtn = spoiler.querySelector('.accordion-open');
    let spoilerBody = spoiler.querySelector('.accordion__content')
    spoilerBtn.addEventListener('click', () => {

      if (!spoilerBtn.classList.contains('open')) {
        spoilerBody.style.maxHeight = spoilerBody.scrollHeight + 'px';
        spoilerBtn.classList.add('open')

      } else {
        spoilerBody.style.maxHeight = null;
        spoilerBtn.classList.remove('open')

      }
      document.addEventListener('click', (e) => {
        if (e.target !== spoilerBtn) {
          spoilerBody.style.maxHeight = null;
          spoilerBtn.classList.remove('open')
        }
      })

    })
    document.addEventListener('keydown', (e) => {
      if (e.key == 'Escape') {
        spoilerBody.style.maxHeight = null;
        spoilerBtn.classList.remove('open')
      }
    })
  })

}
openSpoiler()

$('.dropdown-wrapper').hover(function () {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(200);
}, function () {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(200);
});

/* const anim = () => {
  const blocks = document.querySelectorAll('section')
  blocks.forEach(el => {
    el.style.opacity = 0
    el.style.transform = 'translateY(200px)'
    let elTop = el.getBoundingClientRect().top
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > elTop - document.documentElement.clientHeight / 1.5) {
        el.style.opacity = 1;
        el.style.transition = '.5s';
        el.style.transform = null;
      }
    })
  })
}
anim() */