-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : sam. 03 déc. 2022 à 16:07
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

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `icone`
--
ALTER TABLE `icone`
  ADD PRIMARY KEY (`id_icone`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `icone`
--
ALTER TABLE `icone`
  MODIFY `id_icone` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
