let timer;
let timeLeft = 30; // Durée initiale en secondes
let correctAnswer; // Variable pour stocker la réponse correcte
let score = 0; // Déclare et initialise la variable score

function startTimer() {
    timer = setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(timer); // Arrête le timer quand il atteint 0
            alert("Temps écoulé !");
            // Logic pour passer à la question suivante automatiquement
        } else {
            document.getElementById('timer').innerHTML = "Temps restant : " + timeLeft + "s";
            timeLeft--; // Diminue le temps restant d'une seconde
        }
    }, 1000); // Le timer diminue toutes les secondes (1000ms)
}

startTimer();

// Fonction pour récupérer une question via PHP
function fetchQuestion() {

    fetch('./php/get_question.php') // Appelle le fichier PHP qui génère la question
    .then(response => response.json()) // Convertit la réponse en JSON
    .then(data => {
        if (data.error) {
            console.error(data.error);
            alert("Erreur lors de la récupération de la question.");
            return;
        }

        // Affiche la question
        document.getElementById('question').innerText = data.question;

        // Stocke la réponse correcte
        correctAnswer = data.choices[data.correct];

        // Affiche les choix
        const choices = document.querySelectorAll('.choice');
        choices.forEach((choice, index) => {
            choice.innerText = data.choices[index]; // Remplit les boutons avec les choix
            choice.onclick = () => validateAnswer(choice.innerText); // Ajoute un gestionnaire d'événements pour valider la réponse
        });
    })
    .catch(error => console.error('Erreur : ', error)); // Gère les erreurs
}

// Fonction pour valider la réponse
function validateAnswer(selectedChoice) {
    if (selectedChoice === correctAnswer) {
        score += 10; // Incrémente le score de 10 points
    } else {
        score -= 5; // Décrémente le score de 5 points
    }
    // Logique pour passer à la question suivante
    fetchQuestion(); // Charge une nouvelle question
}

// Appelle la fonction au démarrage pour charger la première question
fetchQuestion();