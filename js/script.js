let timer;
let timeLeft = 30; // Durée initiale en secondes
let correctAnswer; // Variable pour stocker la réponse correcte
let score = 0; // Déclare et initialise la variable score
let questionsAsked = 0; // Compteur pour le nombre de questions posées
let askedQuestions = new Set(); // Ensemble pour stocker les questions déjà posées

function startTimer() {
    timer = setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(timer); // Arrête le timer quand il atteint 0
            alert("Temps écoulé !");
            // Logic pour passer à la question suivante automatiquement
            document.getElementById('result').innerText = "Temps écoulé !";
            document.getElementById('next').style.display = 'block';
        } else {
            document.getElementById('timer').innerHTML = "Temps restant : " + timeLeft + "s";
            timeLeft--; // Diminue le temps restant d'une seconde
        }
    }, 1000); // Le timer diminue toutes les secondes (1000ms)
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    timeLeft = 30;
    startTimer();
}

startTimer();

// Fonction pour récupérer une question via PHP
function fetchQuestion() {
    if (questionsAsked >= 20) {
        document.getElementById('result').innerText = "Quiz terminé ! Votre score final est : " + score;
        document.getElementById('save').style.display = 'block';
        disableChoices(); // Désactive les choix
        return;
    }

    fetch('./php/get_question.php') // Appelle le fichier PHP qui génère la question
    .then(response => response.json()) // Convertit la réponse en JSON
    .then(data => {
        if (data.error) {
            console.error(data.error);
            alert("Erreur lors de la récupération de la question.");
            return;
        }

        // Vérifie si la question a déjà été posée
        if (askedQuestions.has(data.question)) {
            fetchQuestion(); // Récupère une nouvelle question si celle-ci a déjà été posée
            return;
        }

        // Ajoute la question à l'ensemble des questions posées
        askedQuestions.add(data.question);
        questionsAsked++;

        // Affiche la question
        document.getElementById('question').innerText = data.question;

        // Stocke la réponse correcte
        correctAnswer = data.choices[data.correct];

        // Affiche les choix
        const choices = document.querySelectorAll('.choice');
        choices.forEach((choice, index) => {
            choice.innerText = data.choices[index]; // Remplit les boutons avec les choix
            choice.onclick = () => validateAnswer(choice.innerText); // Ajoute un gestionnaire d'événements pour valider la réponse
            choice.disabled = false; // Réactive les boutons de choix
        });

        // Cache le bouton suivant
        document.getElementById('next').style.display = 'none';

    })
    .catch(error => console.error('Erreur : ', error)); // Gère les erreurs
}

function validateAnswer(selectedChoice) {
    stopTimer();
    const result = document.getElementById('result');
    if (selectedChoice === correctAnswer) {
        score += 10; // Incrémente le score de 10 points
        result.innerText = "Bonne réponse !";
    } else {
        score -= 5; // Décrémente le score de 5 points
        result.innerText = "Mauvaise réponse.";
    }
    // Affiche le score actuel
    document.getElementById('current-score').innerText = "Score actuel : " + score;
    // Affiche le bouton suivant
    document.getElementById('next').style.display = 'block';
    disableChoices(); // Désactive les choix après la réponse
}

// Fonction pour désactiver les choix
function disableChoices() {
    const choices = document.querySelectorAll('.choice');
    choices.forEach(choice => {
        choice.disabled = true;
    });
}

// Fonction pour envoyer le score au serveur
function sendScore() {
    fetch('./php/save_score.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `score=${score}`
    })
    .then(response => response.text())
    .then(data => {
        console.log(data); // Affiche la réponse du serveur
    })
    .catch(error => console.error('Erreur : ', error));
}

// Appelle la fonction au démarrage pour charger la première question
fetchQuestion();

// Gestionnaire d'événements pour le bouton suivant
document.getElementById('next').onclick = function() {
    document.getElementById('result').innerText = '';
    resetTimer();
    fetchQuestion();
};

// Gestionnaire d'événements pour le bouton sauvegarder
document.getElementById('save').onclick = function() {
    sendScore();
};
