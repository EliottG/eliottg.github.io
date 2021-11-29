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
let about = document.getElementById('about-me');
let skills = document.getElementById('skills');
let contact = document.getElementById('contact');
let buttonAbout = document.getElementById('btn-profil');
let buttonSkill = document.getElementById('skills-profil');
let buttonContact = document.getElementById('contact-profil');

function displayContent(category) {
  if (category == 'about-me') {
    skills.style.display = 'none';
    contact.style.display = 'none';
    buttonContact.classList.remove('background-contact');
    buttonSkill.classList.remove('background-skill');
    if (about.style.display == 'block') {
      about.style.display = 'none';
      buttonAbout.classList.remove('background-profil');
    } else {
      about.style.display = 'block';
      buttonAbout.classList.add('background-profil');
    }
  }
  if (category == 'skills') {
    contact.style.display = 'none';
    about.style.display = 'none';
    buttonContact.classList.remove('background-contact');
    buttonAbout.classList.remove('background-profil');
    if (skills.style.display == 'block') {
      skills.style.display = 'none';
      buttonSkill.classList.remove('background-skill');
    } else {
      skills.style.display = 'block';
      buttonSkill.classList.add('background-skill');
    }
  }
  if (category == 'contact') {
    skills.style.display = 'none';
    about.style.display = 'none';
    buttonSkill.classList.remove('background-skill');
    buttonAbout.classList.remove('background-profil');
    if (contact.style.display == 'block') {
      contact.style.display = 'none';
      buttonContact.classList.remove('background-contact');
    } else {
      contact.style.display = 'block';
      buttonContact.classList.add('background-contact');
    }
  }
}
