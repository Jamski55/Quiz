
CREATE DATABASE quiz;

USE quiz;

CREATE TABLE questions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    question TEXT NOT NULL,
    choice1 VARCHAR(255) NOT NULL,
    choice2 VARCHAR(255) NOT NULL,
    choice3 VARCHAR(255) NOT NULL,
    choice4 VARCHAR(255) NOT NULL,
    correct INT NOT NULL
);

INSERT INTO questions (question, choice1, choice2, choice3, choice4, correct)
VALUES 
('Quelle est la capitale de la France ?', 'Paris', 'Lyon', 'Marseille', 'Nice', 0),
('Qui a peint la Joconde ?', 'Van Gogh', 'Michel-Ange', 'Léonard de Vinci', 'Picasso', 2),
('Quelle est la planète la plus proche du Soleil ?', 'Vénus', 'Terre', 'Mars', 'Mercure', 3),
('En quelle année a eu lieu la Révolution française ?', '1776', '1789', '1804', '1815', 1),
('Quel est le plus grand océan du monde ?', 'Océan Atlantique', 'Océan Pacifique', 'Océan Indien', 'Océan Arctique', 1),
('Quelle est la monnaie officielle du Japon ?', 'Won', 'Yen', 'Yuan', 'Ringgit', 1),
('Combien de continents y a-t-il dans le monde ?', '5', '6', '7', '8', 2),
('Quelle est la capitale du Canada ?', 'Toronto', 'Ottawa', 'Vancouver', 'Montréal', 1),
('Qui a écrit "Les Misérables" ?', 'Victor Hugo', 'Émile Zola', 'Charles Baudelaire', 'Alfred de Musset', 0),
('Quelle est la formule chimique de l’eau ?', 'CO2', 'O2', 'H2O', 'NaCl', 2),
('Quel est le symbole chimique du fer ?', 'Fe', 'F', 'Ir', 'Fr', 0),
('Quel pays est connu pour la Tour Eiffel ?', 'Allemagne', 'Espagne', 'Italie', 'France', 3),
('Combien de joueurs y a-t-il dans une équipe de football ?', '10', '11', '12', '13', 1),
('Quel est le plus grand désert du monde ?', 'Sahara', 'Gobi', 'Antarctique', 'Kalahari', 2),
('Qui est l’auteur de la théorie de la relativité ?', 'Isaac Newton', 'Galilée', 'Albert Einstein', 'Marie Curie', 2),
('Quel animal est le symbole national de l’Australie ?', 'Koala', 'Kangourou', 'Émeu', 'Wallaby', 1),
('Dans quelle ville se trouve le Colisée ?', 'Athènes', 'Rome', 'Istanbul', 'Pompéi', 1),
('Quelle est la langue la plus parlée dans le monde ?', 'Anglais', 'Mandarin', 'Espagnol', 'Hindou', 1),
('Quel est le plus haut sommet du monde ?', 'Mont Blanc', 'K2', 'Mont Everest', 'Kilimandjaro', 2),
('Quelle est la plus longue rivière du monde ?', 'Nil', 'Amazone', 'Yangtsé', 'Mississippi', 1);

CREATE TABLE scores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    score INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

