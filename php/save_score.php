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

    // Récupérer le score depuis le formulaire
    $score = $_POST['score'];

    // Insertion du score dans la base de données
    $stmt = $pdo->prepare("INSERT INTO scores (score) VALUES (:score)");
    $stmt->execute(['score' => $score]);

    // Renvoie la réponse sous forme de texte
    echo "Score sauvegardé avec succès !";

} catch (PDOException $e) {
    echo "Erreur : " . $e->getMessage();
}
?>