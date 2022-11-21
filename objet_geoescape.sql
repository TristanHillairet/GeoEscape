-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : dim. 20 nov. 2022 à 10:13
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
  `lon` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `objet`
--

INSERT INTO `objet` (`id_objet`, `id_icone`, `nom`, `zoom_min`, `lat`, `lon`) VALUES
(1, 2, 'corps', 10, 48.853381, 2.348262),
(2, 3, 'ticket d\'avion', 10, 48.853352, 2.348155),
(3, 4, 'directeur de l\'aéroport', 10, 49.007671, 2.543412),
(4, 5, 'lettre cryptée par un mot clé', 10, 52.37644, 4.894098),
(5, 6, 'lettre décryptée', 10, 52.37644, 4.894098),
(6, 1, 'statue de la liberté miniature', 14, 52.36674, 4.92621),
(7, 7, 'ordinateur de police NY', 10, 40.712292, -74.002207),
(8, 8, 'big ben miniature', 10, 40.6893286, -74.0447762),
(9, 7, 'ordinateur de police LN', 10, 51.5027761, -0.1243976),
(10, 9, 'empreinte digitale', 10, 51.5117899, -0.1195466),
(11, 10, 'fichier criminel', 10, 51.5027761, -0.1243976),
(12, 11, 'criminel', 10, 48.900951, 2.091257);

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
