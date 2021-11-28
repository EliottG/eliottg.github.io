function updateAnimations() {
  let anim = document.querySelector('header > h1');
  let animBorder = document.querySelector('section > div.about-me');
  if (anim.classList.contains('opacity-anim')) {
    document.getElementById('animations-disable').innerText =
      'Enable animations';
    anim.classList.remove('opacity-anim');
    animBorder.classList.remove('light-border');
  } else {
    anim.classList.add('opacity-anim');
    animBorder.classList.add('light-border');
    document.getElementById('animations-disable').innerText =
      'Disable animations';
  }
}
