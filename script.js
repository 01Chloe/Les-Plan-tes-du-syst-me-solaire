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