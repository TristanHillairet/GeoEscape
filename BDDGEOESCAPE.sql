-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : sam. 03 déc. 2022 à 21:58
-- Version du serveur :  5.7.34
-- Version de PHP : 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `objet_geoescape`
--

-- --------------------------------------------------------

--
-- Structure de la table `icone`
--

CREATE TABLE `icone` (
  `id_icone` int(11) NOT NULL,
  `url` text NOT NULL,
  `taille_x` int(11) NOT NULL,
  `taille_y` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `icone`
--

INSERT INTO `icone` (`id_icone`, `url`, `taille_x`, `taille_y`) VALUES
(1, 'image_icon/statue-of-liberty.png', 56, 56),
(2, 'image_icon/corps.png', 56, 56),
(3, 'image_icon/ticket_avion.png', 56, 56),
(4, 'image_icon/directeur.png', 56, 100),
(5, 'image_icon/lettre_cryptee.png', 56, 56),
(6, 'image_icon/lettre_decryptee.png', 56, 56),
(7, 'image_icon/ordinateur.png', 56, 56),
(8, 'image_icon/big_ben.png', 40, 120),
(9, 'image_icon/empreinte_digitale.png', 56, 56),
(10, 'image_icon/fichier.png', 56, 56),
(11, 'image_icon/criminel.png', 56, 56),
(12, 'image_icon/airplane.png', 56, 56),
(13, 'image_icon/carte_london.png', 350, 350);

-- --------------------------------------------------------

--
-- Structure de la table `joueurs`
--

CREATE TABLE `joueurs` (
  `id` int(11) NOT NULL,
  `nom` text NOT NULL,
  `time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `joueurs`
--

INSERT INTO `joueurs` (`id`, `nom`, `time`) VALUES
(1, 'Sherclock.H', '00:05:00'),
(2, 'Hercule.P', '00:10:00'),
(3, 'Mrs.Marple', '00:15:00'),
(4, 'Batman', '00:20:00'),
(5, 'Inspecteur Derrick', '00:30:00'),
(6, 'Scooby Doo', '00:35:00'),
(7, 'Inspecteur Gadget', '00:40:00'),
(8, 'Dora l\'Exploratrice', '00:45:00'),
(9, 'Tinkie Winkie ', '00:50:00'),
(10, 'Lilian Wecker', '00:25:00'),
(18, 'Tristan', '00:02:00');

-- --------------------------------------------------------

--
-- Structure de la table `objet`
--

CREATE TABLE `objet` (
  `id_objet` int(11) NOT NULL,
  `id_icone` int(11) NOT NULL,
  `nom` text NOT NULL,
  `zoom_min` int(11) NOT NULL,
  `lat` double NOT NULL,
  `lon` double NOT NULL,
  `debut` tinyint(1) NOT NULL,
  `popup` text NOT NULL,
  `type` int(11) NOT NULL,
  `id_objet_bloque` int(11) NOT NULL,
  `id_necessaire_pour_debloque` int(11) NOT NULL,
  `code` text NOT NULL,
  `indice` text NOT NULL,
  `bool_indice` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `objet`
--

INSERT INTO `objet` (`id_objet`, `id_icone`, `nom`, `zoom_min`, `lat`, `lon`, `debut`, `popup`, `type`, `id_objet_bloque`, `id_necessaire_pour_debloque`, `code`, `indice`, `bool_indice`) VALUES
(1, 2, 'corps', 10, 48.853381, 2.348262, 1, 'Le cadavre montre la direction nord-est avec son bras et tiens dans l\'autre main un plan d\'aéroport.', 4, 0, 0, '', '', 0),
(2, 3, 'ticket d\'avion', 10, 48.853584, 2.346917, 1, 'un ticket d\'avion illisible ', 1, 0, 0, '', '', 0),
(3, 4, 'directeur de l\'aéroport', 14, 49.007671, 2.543412, 1, '\"Que puis-je faire pour vous aider?\"', 3, 13, 2, '', '', 0),
(4, 5, 'lettre cryptée par un mot clé', 10, 52.37644, 4.894098, 1, 'La lettre est crypté. Un indice est cependant présent, il dit : \"Je suis le capitaine d\'une fiction de Jules Verne mais aussi le nom d\'un musée scientifique de cette ville\".\r\n\r\nCliquez sur l\'objet pour entrer le code.', 2, 5, 0, 'NEMO', '<strong> Indice </strong> : Le code est aussi le nom d\'un célèbre poisson clown de dessin animé.', 0),
(5, 6, 'lettre décryptée', 10, 52.37644, 4.894098, 0, 'Bravo, vous avez réussi mon énigme. Comme je suis sûr que vous ne me trouverez jamais, je peux vous dire qu\'avant de partir d\'ici, je suis allé visité le zoo de la ville. \r\nBonne chance inspecteur,\r\nLe Geo-killer', 4, 0, 0, '', '', 0),
(6, 1, 'statue de la liberté miniature', 16, 52.366638, 4.91572, 1, 'Une latitude est affiché sur cette figurine de la statue de la liberté, mais pas de longitude.\r\n\"Latitude = 51.5117899\"', 4, 0, 0, '', '', 0),
(7, 7, 'ordinateur de police NY', 10, 40.712292, -74.002207, 1, 'Un ordinateur du bureau de police de New York. Vous pouvez effectuer n\'importe quelle recherche dessus. (vous ne pouvez entrer que des nombres arrondit à l\'unité)', 2, 14, 0, '5100', '<strong> Indice </strong> : entrez deux chiffres pour la latitude et deux autres pour la longitude, tous deux étant l\'arrondit des coordonnées trouvées au degré près. ', 0),
(8, 8, 'big ben miniature', 14, 40.689941, -74.044817, 1, 'Une longitude est affichée sur cette figurine de big ben. \r\n\"longitude = -0.1195466\".\r\n', 4, 0, 0, '', '', 0),
(9, 7, 'ordinateur de police LN', 10, 51.5027761, -0.1243976, 1, 'Un ordinateur de police', 3, 11, 10, '', '<strong> Indice </strong>: vous pouvez par exemple utiliser cet ordinateur pour faire analyser une empreinte. ', 0),
(10, 9, 'empreinte digitale', 14, 51.5117899, -0.1195466, 1, 'Une empreinte sur la tasse de café ', 1, 0, 0, '', '', 0),
(11, 10, 'fichier criminel', 10, 51.5027761, -0.1243976, 0, 'Fichier personne trouvée :  \r\nNom : Monier // Prénom : Tom // Sexe : H // Age : 45 ans // Adresse : <strong> 16 Rue de Noailles, 78100 Saint-Germain-en-Laye </strong>     ', 4, 0, 0, '', '', 0),
(12, 11, 'criminel', 16, 48.900951, 2.091257, 1, 'Vous venez de trouvez le Geo-Killer, arrêtez-le', 5, 0, 0, '', '', 0),
(13, 12, 'avion vers amsterdam', 10, 49.007671, 2.543412, 0, 'Votre ticket vous permet de prendre le prochain vol vers Amsterdam ', 4, 0, 0, '', '', 0),
(14, 13, 'écran ordinateur', 10, 40.712292, -74.002207, 0, 'Voici l\'écran de l\'ordinateur après votre recherche.', 4, 0, 0, '', '', 0);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `icone`
--
ALTER TABLE `icone`
  ADD PRIMARY KEY (`id_icone`);

--
-- Index pour la table `joueurs`
--
ALTER TABLE `joueurs`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `objet`
--
ALTER TABLE `objet`
  ADD PRIMARY KEY (`id_objet`),
  ADD KEY `foreign_key` (`id_icone`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `icone`
--
ALTER TABLE `icone`
  MODIFY `id_icone` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT pour la table `joueurs`
--
ALTER TABLE `joueurs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT pour la table `objet`
--
ALTER TABLE `objet`
  MODIFY `id_objet` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
