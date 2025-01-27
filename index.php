<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Quiz</title>
    <link rel="stylesheet" href="./css/style.css">
    <script src="./js/script.js" defer></script>
</head>
<body>
    <div id="quiz">
        <div id="timer">Temps restant : 30s</div>
        <div id="question"></div>
        <div class="choices">
            <button class="choice"></button>
            <button class="choice"></button>
            <button class="choice"></button>
            <button class="choice"></button>
        </div>
        <div id="result"></div>
        <div id="current-score">Score actuel : 0</div>
        <button id="next" style="display:none;">Suivant</button>
        <button id="save" style="display:none;">Sauvegarder</button>
    </div>
</body>
</html>