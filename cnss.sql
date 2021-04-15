-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  jeu. 15 avr. 2021 à 22:52
-- Version du serveur :  10.1.36-MariaDB
-- Version de PHP :  7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `cnss`
--

-- --------------------------------------------------------

--
-- Structure de la table `agents`
--

CREATE TABLE `agents` (
  `id` int(11) NOT NULL,
  `email` varchar(500) NOT NULL,
  `password` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `agents`
--

INSERT INTO `agents` (`id`, `email`, `password`) VALUES
(1, 'elhadkimariem3@gmail.com', '$2a$10$/IPwtJUZhUNsSjcgDpYuWuCwhchE0jwC3sMEJ/JJfF14SBZqv/cQ.');

-- --------------------------------------------------------

--
-- Structure de la table `employees`
--

CREATE TABLE `employees` (
  `id` int(11) NOT NULL,
  `name` varchar(500) NOT NULL,
  `email` varchar(500) NOT NULL,
  `phone` varchar(500) NOT NULL,
  `mat` varchar(500) NOT NULL,
  `password` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `employees`
--

INSERT INTO `employees` (`id`, `name`, `email`, `phone`, `mat`, `password`) VALUES
(1, 'Salima Elhamdi', 'Salima@gmail.com', '0543345676', '124GRB', '$2a$10$6mEaN3bXWRySaOi89ylON.b/kpgTNcRevkR/88dJcJS6M8HTh2Ugi'),
(3, 'Dounia', 'Dounia@gmail.com', '0543345676', '124GRB', '$2a$10$YUSNGQ7HyMqDL7yICkVCXeZqu0rHJpaUtBy/T04v/NS1yjggvAjf6'),
(10, 'Zakaria', 'Zakaria@gmail.com', '0654567687', 'H646466', '$2a$10$CLAXJjh3vX3ELhKXjpR7xOgM9OsKFi2uyf/4t6sR0XQaQdsTURVhG'),
(11, 'Imane', 'Imane@gmail.com', '0565342234', 'AZ8769977', '$2a$10$0jXpYPNBiJmowy2ZJA0en.WXE6CPP3Gan0DJVCu8HGUR9XsLF0fca'),
(12, 'Ahmed', 'Ahmed@gmail.com', '0676789866', 'HZE64566', '$2a$10$0.ecKD6N2QRZrMA6rajUUu8RJSauodz0qFLcf2Z1KiWHFi.f66Q8a'),
(13, 'Ali ', 'Ali@gmail.com', '0676898767', 'P765755', '$2a$10$psR5U7fFB3xfAiHbMGT3MeW7f6VBwljQL2eeEYnSgTnwDXGwtokv6');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `agents`
--
ALTER TABLE `agents`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `agents`
--
ALTER TABLE `agents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
