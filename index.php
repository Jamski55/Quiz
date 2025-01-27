<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz Dynamique</title>
    <link rel="stylesheet" href="css/style.css">
</head>

<body>

    <div id="quiz-container">
    <p id="timer">Temps restant : 30s</p> <!-- Affiche le compte à rebours --> 
        <h2 id="question">Question ici</h2> <!-- Affiche la question actuelle -->
        <div id="choices">
            <button class="choice">Réponse 1</button>
            <button class="choice">Réponse 2</button>
            <button class="choice">Réponse 3</button>
            <button class="choice">Réponse 4</button>
        </div>
        <button id="next">Suivant</button> <!-- Bouton pour passer a la question suivante --> 
        <form id="scoreForm" method="POST" action="save_score.php">
            <input type="hidden" id="scoreInput" name="score" value="">
            <button type="submit">Sauvegarder le score</button>
        </form>
    </div>
    <script src="js/script.js"></script> <!-- Lié au fichier JavaScript pour gérer la logique du quiz --> 


</body>

</html>