-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : sam. 03 déc. 2022 à 16:06
-- Version du serveur : 5.7.24
-- Version de PHP : 8.0.1

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
-- Index pour la table `objet`
--
ALTER TABLE `objet`
  ADD PRIMARY KEY (`id_objet`),
  ADD KEY `foreign_key` (`id_icone`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `objet`
--
ALTER TABLE `objet`
  MODIFY `id_objet` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `objet`
--
ALTER TABLE `objet`
  ADD CONSTRAINT `objet_ibfk_1` FOREIGN KEY (`id_icone`) REFERENCES `icone` (`id_icone`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
