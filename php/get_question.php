<?php
// Informations de connexion à la base de données
$host = 'localhost';
$db = 'quiz';
$user = 'root';
$pass = '';

try {
    // Connexion à la base de données
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Récupérer une question aléatoire avec les choix de réponse et la réponse correcte
    $stmt = $pdo->query("SELECT question, choice1, choice2, choice3, choice4, correct FROM questions ORDER BY RAND() LIMIT 1");
    $question = $stmt->fetch(PDO::FETCH_ASSOC);

    // Préparer les réponses sous forme de tableau
    $response = [
        'question' => $question['question'],
        'choices' => [
            $question['choice1'],
            $question['choice2'],
            $question['choice3'],
            $question['choice4']
        ],
        'correct' => $question['correct']
    ];

    // Renvoie la réponse sous forme de JSON
    header('Content-Type: application/json');
    echo json_encode($response);
} catch (PDOException $e) {
    // Renvoie une réponse JSON en cas d'erreur
    header('Content-Type: application/json');
    echo json_encode(['error' => 'Erreur : ' . $e->getMessage()]);
}
?>