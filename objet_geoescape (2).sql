-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : ven. 25 nov. 2022 à 17:03
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
(4, 'image_icon/directeur.png', 56, 56),
(5, 'image_icon/lettre_cryptee.png', 56, 56),
(6, 'image_icon/lettre_decryptee.png', 56, 56),
(7, 'image_icon/ordinateur.png', 56, 56),
(8, 'image_icon/big_ben.png', 56, 56),
(9, 'image_icon/empreinte_digitale.png', 56, 56),
(10, 'image_icon/fichier.png', 56, 56),
(11, 'image_icon/criminel.png', 56, 56);

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
  `open_status` tinyint(1) NOT NULL,
  `popup` text NOT NULL,
  `takable` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `objet`
--

INSERT INTO `objet` (`id_objet`, `id_icone`, `nom`, `zoom_min`, `lat`, `lon`, `debut`, `open_status`, `popup`, `takable`) VALUES
(1, 2, 'corps', 10, 48.853381, 2.348262, 1, 1, 'Le cadavre montre la direction nord-est avec son bras ', 0),
(2, 3, 'ticket d\'avion', 10, 48.853352, 2.348155, 1, 1, 'un ticket d\'avion illisible ', 1),
(3, 4, 'directeur de l\'aéroport', 14, 49.007671, 2.543412, 1, 0, '\"Que puis-je faire pour vous aider?\"', 0),
(4, 5, 'lettre cryptée par un mot clé', 10, 52.37644, 4.894098, 1, 1, 'La lettre est crypté. Un indice est cependant présent, il dit : \"Je suis un capitaine de fiction mais aussi le nom d\'un musée scientifique de cette ville\".', 0),
(5, 6, 'lettre décryptée', 10, 52.37644, 4.894098, 0, 0, 'Aller au moulin d\'Amsterdam', 0),
(6, 1, 'statue de la liberté miniature', 16, 52.36674, 4.92621, 1, 1, 'Une longitude y est affiché, mais pas la latitude. Gardez-le, vous risquez d\'en avoir besoin.\r\n\"Longitude = xxxxx\"', 1),
(7, 7, 'ordinateur de police NY', 10, 40.712292, -74.002207, 1, 1, 'Un ordinateur de police', 0),
(8, 8, 'big ben miniature', 14, 40.6893286, -74.0447762, 1, 1, 'Une latitude y est affichée \r\n\"latitude : xxxx\"', 1),
(9, 7, 'ordinateur de police LN', 10, 51.5027761, -0.1243976, 1, 1, 'Un ordinateur de police', 0),
(10, 9, 'empreinte digitale', 10, 51.5117899, -0.1195466, 1, 0, 'Une empreinte sur la tasse de café ', 1),
(11, 10, 'fichier criminel', 10, 51.5027761, -0.1243976, 0, 1, 'Fichier personne trouvée :  \r\nNom : Monier // Prénom : Tom // Sexe : H // Age : 45 ans // Adresse : xxxxxx  ', 0),
(12, 11, 'criminel', 16, 48.900951, 2.091257, 1, 0, 'Personne à cette adresse', 0);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `icone`
--
ALTER TABLE `icone`
  ADD PRIMARY KEY (`id_icone`);

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
  MODIFY `id_icone` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `objet`
--
ALTER TABLE `objet`
  MODIFY `id_objet` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

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
