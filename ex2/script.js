// Définition d'une fonction nommée displayElapsedTime
function displayElapsedTime() {
    let seconds = 0; // Initialisation d'une variable pour compter les secondes
    const timerElement = document.getElementById('temps'); // Récupération de l'élément HTML avec l'ID 'temps' et stockage dans la variable timerElement

    // Fonction interne pour formater le temps en fonction du nombre de secondes
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60); // Calcul du nombre de minutes
        if (minutes === 0) {
            return `${seconds} seconde(s) écoulée(s)`; // Retourne le texte si moins d'une minute est écoulée
        } else if (minutes === 1) {
            return `Une minute s'est écoulée`; // Retourne le texte pour une minute écoulée
        } else {
            return `${minutes} minutes se sont écoulées`; // Retourne le texte pour plus d'une minute écoulée
        }
    }

    // Définition d'un intervalle d'exécution toutes les 1000ms (1 seconde)
    const interval = setInterval(function() {
        seconds++; // Incrémentation du compteur de secondes
        timerElement.textContent = formatTime(seconds); // Mise à jour du contenu de l'élément HTML avec le temps écoulé
    }, 1000); // Répétition de cette fonction toutes les 1000ms (1 seconde)
}

// Appel de la fonction displayElapsedTime lorsque la page est chargée
displayElapsedTime();
