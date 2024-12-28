// Je séléctionne et je stock
const projets = document.querySelector('.projets');
const competences = document.querySelector('.competences');
const menu = document.querySelector('.menu');
const nom = document.querySelector('.nom');

// Lorsque la page est chargee on ajoute la classe slideDroite au menu, slideGauche au nom et on fait apparaitre competences
window.onload = competences.style.opacity = "1"; 
                menu.classList.add('slideDroite'); 
                nom.classList.add('slideGauche');

// Au scroll de la page
// On ajoute une fonction scroll à la fenêtre pour surveiller les événements de défilement 
// de la page et on appelle la fonction "scrollFunction"
window.addEventListener('scroll', scrollFunction); 

// la fonction affiche la div projets si la hauteur de défilement de la fenêtre est supérieur à 400
function scrollFunction() {
    let hauteur = document.documentElement.scrollTop;
    // console.log(hauteur, "nombre de pixels de défilement de la fenêtre");
    if (hauteur > 400) {
        // console.log("modal affiché");
        projets.style.opacity = '1';
    }
};

// Écouter l'événement scroll pour appliquer l'animation
window.addEventListener('scroll', handleScroll);

// Fonction pour vérifier si l'élément est visible dans la fenêtre de visualisation
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Fonction de gestion du défilement
function handleScroll() {
    // Si l'élément est visible, appliquer l'animation
    if (isElementInViewport(projets)) {
      projets.style.transform = 'translateY(0)';;
    }
}

// Appeler handleScroll immédiatement au cas où l'élément est déjà visible au chargement de la page
handleScroll();