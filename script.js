// Je séléctionne et je stock
const projets = document.querySelector('.projets');
const competences = document.querySelector('.competences');

window.onload = function() {
    competences.style.opacity = "1";
}
// Au scroll de la page
// On ajoute une fonction onscroll à la fenêtre pour surveiller les événements de défilement 
// de la page et on appelle la fonction "scrollFunction"
window.addEventListener('scroll', scrollFunction);

// Quand l'utilisateur scroll de 20px vers le bas le bouton s'affiche 
// avec le "display: block" sinon il reste invisible avec le "display: none"
function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    projets.style.opacity = "1";
  } else {
    projets.style.opacity = "0";
  }
};

scrollFunction();


// Fonction pour vérifier si l'élément est visible dans la fenêtre de visualisation
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Fonction de gestion du défilement
function handleScroll() {
    const element = document.querySelector('.projets');
    
    // Si l'élément est visible, ajouter la classe 'visible'
    if (isElementInViewport(element)) {
        element.classList.add('visible');
    }
}

// Écouter l'événement scroll pour appliquer l'animation
window.addEventListener('scroll', handleScroll);

// Appeler handleScroll immédiatement au cas où l'élément est déjà visible au chargement de la page
handleScroll();
