//recuperation des boutons
const mercure = document.getElementById('mercure');
const venus = document.getElementById('venus');
const terre = document.getElementById('terre');
const mars = document.getElementById('mars');
const jupiter = document.getElementById('jupiter');
const saturne = document.getElementById('saturne');
const uranus = document.getElementById('uranus');
const neptune = document.getElementById('neptune');

//recuperation des pages
const me = document.querySelector('.mercure');
const ve = document.querySelector('.venus');
const te = document.querySelector('.terre');
const ma = document.querySelector('.mars');
const ju = document.querySelector('.jupiter');
const sa = document.querySelector('.saturne');
const ur = document.querySelector('.uranus');
const ne = document.querySelector('.neptune');


//changement des planetes au click
mercure.addEventListener('click', () => {
     me.classList.toggle('active');
     ve.classList.remove('active');
     te.classList.remove('active');
     ma.classList.remove('active');
     ju.classList.remove('active');
     sa.classList.remove('active');
     ur.classList.remove('active');
     ne.classList.remove('active');
});

venus.addEventListener('click', () => {
     ve.classList.toggle('active');
     me.classList.remove('active');
     te.classList.remove('active');
     ma.classList.remove('active');
     ju.classList.remove('active');
     sa.classList.remove('active');
     ur.classList.remove('active');
     ne.classList.remove('active');
});

terre.addEventListener('click', () => {
     te.classList.toggle('active');
     me.classList.remove('active');
     ve.classList.remove('active');
     ma.classList.remove('active');
     ju.classList.remove('active');
     sa.classList.remove('active');
     ur.classList.remove('active');
     ne.classList.remove('active');
});

mars.addEventListener('click', () => {
     ma.classList.toggle('active');
     me.classList.remove('active');
     ve.classList.remove('active');
     te.classList.remove('active');
     ju.classList.remove('active');
     sa.classList.remove('active');
     ur.classList.remove('active');
     ne.classList.remove('active');
});

jupiter.addEventListener('click', () => {
     ju.classList.toggle('active');
     me.classList.remove('active');
     ve.classList.remove('active');
     te.classList.remove('active');
     ma.classList.remove('active');
     sa.classList.remove('active');
     ur.classList.remove('active');
     ne.classList.remove('active');
});

saturne.addEventListener('click', () => {
     sa.classList.toggle('active');
     me.classList.remove('active');
     ve.classList.remove('active');
     te.classList.remove('active');
     ma.classList.remove('active');
     ju.classList.remove('active');
     ur.classList.remove('active');
     ne.classList.remove('active');
});

uranus.addEventListener('click', () => {
     ur.classList.toggle('active');
     me.classList.remove('active');
     ve.classList.remove('active');
     te.classList.remove('active');
     ma.classList.remove('active');
     ju.classList.remove('active');
     sa.classList.remove('active');
     ne.classList.remove('active');
});

neptune.addEventListener('click', () => {
     ne.classList.toggle('active');
     me.classList.remove('active');
     ve.classList.remove('active');
     te.classList.remove('active');
     ma.classList.remove('active');
     ju.classList.remove('active');
     sa.classList.remove('active');
     ur.classList.remove('active');
});




// test avec un switch
const btnPlanets = document.querySelectorAll('.nav-link')
const displayInfoPlanets = document.querySelectorAll('.planete')

let planetIndex;

//ecouter le click sur chaque bouton des planetes et stocker les data-index dans un tableau
btnPlanets.forEach(planet => {
     planet.addEventListener('click', () => {
          planetIndex = planet.getAttribute('data-index');
                    
          switch (planetIndex) {
               case '0': 
                 displayInfoPlanets[0].classList.add('active');
                 displayInfoPlanets[1].classList.remove('active');
                 displayInfoPlanets[2].classList.remove('active');
                 displayInfoPlanets[3].classList.remove('active');
                 displayInfoPlanets[4].classList.remove('active');
                 displayInfoPlanets[5].classList.remove('active');
                 displayInfoPlanets[6].classList.remove('active');
                 displayInfoPlanets[7].classList.remove('active');
                 break;
               case '1': 
                 displayInfoPlanets[1].classList.add('active');
                 displayInfoPlanets[0].classList.remove('active');
                 displayInfoPlanets[2].classList.remove('active');
                 displayInfoPlanets[3].classList.remove('active');
                 displayInfoPlanets[4].classList.remove('active');
                 displayInfoPlanets[5].classList.remove('active');
                 displayInfoPlanets[6].classList.remove('active');
                 displayInfoPlanets[7].classList.remove('active');
                 break;
               case '2': 
                 displayInfoPlanets[2].classList.add('active');
                 displayInfoPlanets[0].classList.remove('active');
                 displayInfoPlanets[1].classList.remove('active');
                 displayInfoPlanets[3].classList.remove('active');
                 displayInfoPlanets[4].classList.remove('active');
                 displayInfoPlanets[5].classList.remove('active');
                 displayInfoPlanets[6].classList.remove('active');
                 displayInfoPlanets[7].classList.remove('active');
                 break;
               case '3': 
                 displayInfoPlanets[3].classList.add('active');
                 displayInfoPlanets[0].classList.remove('active');
                 displayInfoPlanets[1].classList.remove('active');
                 displayInfoPlanets[2].classList.remove('active');
                 displayInfoPlanets[4].classList.remove('active');
                 displayInfoPlanets[5].classList.remove('active');
                 displayInfoPlanets[6].classList.remove('active');
                 displayInfoPlanets[7].classList.remove('active');
                 break;
               case '4': 
                 displayInfoPlanets[4].classList.add('active');
                 displayInfoPlanets[0].classList.remove('active');
                 displayInfoPlanets[1].classList.remove('active');
                 displayInfoPlanets[2].classList.remove('active');
                 displayInfoPlanets[3].classList.remove('active');
                 displayInfoPlanets[5].classList.remove('active');
                 displayInfoPlanets[6].classList.remove('active');
                 displayInfoPlanets[7].classList.remove('active');
                 break;
               case '5': 
                 displayInfoPlanets[5].classList.add('active');
                 displayInfoPlanets[0].classList.remove('active');
                 displayInfoPlanets[1].classList.remove('active');
                 displayInfoPlanets[2].classList.remove('active');
                 displayInfoPlanets[3].classList.remove('active');
                 displayInfoPlanets[4].classList.remove('active');
                 displayInfoPlanets[6].classList.remove('active');
                 displayInfoPlanets[7].classList.remove('active');
                 break;
               case '6': 
                 displayInfoPlanets[6].classList.add('active');
                 displayInfoPlanets[0].classList.remove('active');
                 displayInfoPlanets[1].classList.remove('active');
                 displayInfoPlanets[2].classList.remove('active');
                 displayInfoPlanets[3].classList.remove('active');
                 displayInfoPlanets[4].classList.remove('active');
                 displayInfoPlanets[5].classList.remove('active');
                 displayInfoPlanets[7].classList.remove('active');
                 break;
               case '7': 
                 displayInfoPlanets[7].classList.add('active');
                 displayInfoPlanets[0].classList.remove('active');
                 displayInfoPlanets[1].classList.remove('active');
                 displayInfoPlanets[2].classList.remove('active');
                 displayInfoPlanets[3].classList.remove('active');
                 displayInfoPlanets[4].classList.remove('active');
                 displayInfoPlanets[5].classList.remove('active');
                 displayInfoPlanets[6].classList.remove('active');
                 break;
               default: 
                 console.log('error');
          }
     })
})






// let displayPlanetIndex = []

// //stocker dans un tableau tous les data-index des pages des planetes
// displayInfoPlanets.forEach(displayPlanet => {
//      displayPlanetIndex.push(displayPlanet.getAttribute('data-index'));
// })
// console.log(displayPlanetIndex)





// const btnPlanets = document.querySelectorAll('.nav-link')
// const displayInfoPlanets = document.querySelectorAll('.planete')

// let planetIndex = []
// let displayPlanetIndex = []

// //ecouter le click sur chaque bouton des planetes et stocker les data-index dans un tableau
// btnPlanets.forEach(planet => {
//      planet.addEventListener('click', () => {
//           planetIndex.push = planet.getAttribute('data-index')
//           console.log(planetIndex)

//           showPlanet(planetIndex);
//      })
// })

// function showPlanet(planetIndex) {
//      for(let i = 0; i <= displayInfoPlanets.length; i++) {
//           for(let j = 0; j <= planetIndex.length; j++) {
//                if(displayPlanetIndex[i] === planetIndex[j]) {
//                     displayInfoPlanets[i].classList.toggle('active')
//                }
//           }
//      }
// }

// //stocker dans un tableau tous les data-index des pages des planetes
// displayInfoPlanets.forEach(displayPlanet => {
//      displayPlanetIndex.push = displayPlanet.getAttribute('data-index');
//      console.log(displayPlanetIndex)
// })