function toggle() {
  let blur = document.getElementById('blur'); // main-container
  blur.classList.toggle('active');

  let body = document.getElementById('body'); // hide scrolling on body
  body.classList.toggle('active');

  let popup = document.getElementById('popup'); // registration-form
  popup.classList.toggle('active');
}

function about_toggle() {
  let blur = document.getElementById('blur'); // main-container
  blur.classList.toggle('active');

  let body = document.getElementById('body'); // hide scrolling on body
  body.classList.toggle('active');

  let aboutUs = document.getElementById('about');
  aboutUs.classList.toggle('active');
}
