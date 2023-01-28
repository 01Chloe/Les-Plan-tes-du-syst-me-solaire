const navLinks = document.querySelectorAll('.nav-link')
const planets = document.querySelectorAll('.planete')
let indexPlanet = 0;

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    indexPlanet = link.getAttribute('data-index');

    for(i = 0; i < planets.length; i++) {
      if(planets[i].getAttribute('data-index') == indexPlanet) {
        planets[i].classList.add('active');
      } else {
        planets[i].classList.remove('active');
      }
    }
  })
})