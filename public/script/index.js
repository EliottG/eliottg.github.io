function updateAnimations() {
  let anim = document.querySelector('header > h1');
  if (anim.classList.contains('opacity-anim')) {
    document.getElementById('animations-disable').innerText =
      'Enable animations';
    anim.classList.remove('opacity-anim');
  } else {
    anim.classList.add('opacity-anim');
    document.getElementById('animations-disable').innerText =
      'Disable animations';
  }
}
