// Définition d'une fonction nommée botMachine prenant un argument 'mots'
function botMachine(mots) {
    let i = 0; // Initialisation d'une variable pour garder une trace de l'index actuel de la lettre
    const container = document.getElementById('mots'); // Récupération de l'élément HTML avec l'ID 'mots' et stockage dans la variable container
    const outputElement = document.createElement('h1'); // Création d'un nouvel élément HTML <h1> et stockage dans outputElement
    container.appendChild(outputElement); // Ajout de l'élément <h1> au conteneur récupéré précédemment

    // Définition d'un intervalle d'exécution toutes les 1000ms (1 seconde)
    const inter = setInterval(function () {
        // Vérifie si l'index 'i' est égal à la longueur de la chaîne 'mots'
        if (i === mots.length) {
            clearInterval(inter); // Arrête l'intervalle si toutes les lettres ont été affichées
            // Commence l'effacement après 1 seconde
            setTimeout(function () {
                eraseText(); // Appel de la fonction pour effacer le texte
            }, 1000);
        } else {
            outputElement.textContent += mots[i]; // Ajoute la lettre correspondant à l'index 'i' de 'mots' à l'élément <h1>
            i++; // Incrémente l'index 'i' pour passer à la lettre suivante dans 'mots'
        }
    }, 1000); // Répétition de cette fonction toutes les 1000ms (1 seconde)

    function eraseText() {
        // Efface le texte un par un à partir de la fin
        const eraseInterval = setInterval(function () {
            const currentText = outputElement.textContent; // Récupération du texte actuel de l'élément <h1>
            if (currentText.length === 0) {
                clearInterval(eraseInterval); // Arrête l'effacement si tout le texte a été effacé
            } else {
                outputElement.textContent = currentText.slice(0, -1); // Supprime le dernier caractère du texte
            }
        }, 300); // Répétition de cette fonction toutes les 300ms pour effacer progressivement le texte
    }
}

// Appel de la fonction botMachine avec l'argument "WILSON-2" au moment où le script est exécuté
botMachine("WILSON-3");
