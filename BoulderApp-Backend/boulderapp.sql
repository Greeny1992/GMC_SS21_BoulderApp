-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 16, 2021 at 06:39 PM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `boulderapp`
--
CREATE DATABASE IF NOT EXISTS `boulderapp` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `boulderapp`;

-- --------------------------------------------------------

--
-- Table structure for table `boulder`
--

CREATE TABLE `boulder` (
  `ID` int(6) UNSIGNED NOT NULL,
  `ID_Location` int(6) UNSIGNED DEFAULT NULL,
  `ID_Ersteller` int(6) UNSIGNED DEFAULT NULL,
  `Bezeichnung` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Farbe` int(3) UNSIGNED DEFAULT NULL,
  `Schwierigkeit` int(3) UNSIGNED DEFAULT NULL,
  `Foto` blob,
  `Erstellt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `bouldereditor_user_assigned`
--

CREATE TABLE `bouldereditor_user_assigned` (
  `ID` int(6) UNSIGNED NOT NULL,
  `ID_Boulder` int(6) UNSIGNED DEFAULT NULL,
  `ID_User` int(6) UNSIGNED DEFAULT NULL,
  `Erstellt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `boulderinteraction_user_assigned`
--

CREATE TABLE `boulderinteraction_user_assigned` (
  `ID` int(6) UNSIGNED NOT NULL,
  `ID_Boulder` int(6) UNSIGNED DEFAULT NULL,
  `ID_User` int(6) UNSIGNED DEFAULT NULL,
  `Kommentar` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Status` int(3) UNSIGNED DEFAULT NULL,
  `Erstellt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `boulderlike_user_assigned`
--

CREATE TABLE `boulderlike_user_assigned` (
  `ID` int(6) UNSIGNED NOT NULL,
  `ID_Boulder` int(6) UNSIGNED DEFAULT NULL,
  `ID_User` int(6) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `ID` int(6) UNSIGNED NOT NULL,
  `Land` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Region` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Stadt` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `ID` int(6) UNSIGNED NOT NULL,
  `Name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `boulder`
--
ALTER TABLE `boulder`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_BoulderLocation` (`ID_Location`),
  ADD KEY `FK_BoulderErsteller` (`ID_Ersteller`);

--
-- Indexes for table `bouldereditor_user_assigned`
--
ALTER TABLE `bouldereditor_user_assigned`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_BoulderEditorBoulder` (`ID_Boulder`),
  ADD KEY `FK_BoulderEditorUser` (`ID_User`);

--
-- Indexes for table `boulderinteraction_user_assigned`
--
ALTER TABLE `boulderinteraction_user_assigned`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_BoulderInteractionBoulder` (`ID_Boulder`),
  ADD KEY `FK_BoulderInteractionUser` (`ID_User`);

--
-- Indexes for table `boulderlike_user_assigned`
--
ALTER TABLE `boulderlike_user_assigned`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_BoulderLikeBoulder` (`ID_Boulder`),
  ADD KEY `FK_BoulderLikeUser` (`ID_User`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `boulder`
--
ALTER TABLE `boulder`
  MODIFY `ID` int(6) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bouldereditor_user_assigned`
--
ALTER TABLE `bouldereditor_user_assigned`
  MODIFY `ID` int(6) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `boulderinteraction_user_assigned`
--
ALTER TABLE `boulderinteraction_user_assigned`
  MODIFY `ID` int(6) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `boulderlike_user_assigned`
--
ALTER TABLE `boulderlike_user_assigned`
  MODIFY `ID` int(6) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `ID` int(6) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `ID` int(6) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `boulder`
--
ALTER TABLE `boulder`
  ADD CONSTRAINT `FK_BoulderErsteller` FOREIGN KEY (`ID_Ersteller`) REFERENCES `user` (`ID`),
  ADD CONSTRAINT `FK_BoulderLocation` FOREIGN KEY (`ID_Location`) REFERENCES `location` (`ID`);

--
-- Constraints for table `bouldereditor_user_assigned`
--
ALTER TABLE `bouldereditor_user_assigned`
  ADD CONSTRAINT `FK_BoulderEditorBoulder` FOREIGN KEY (`ID_Boulder`) REFERENCES `boulder` (`ID`),
  ADD CONSTRAINT `FK_BoulderEditorUser` FOREIGN KEY (`ID_User`) REFERENCES `user` (`ID`);

--
-- Constraints for table `boulderinteraction_user_assigned`
--
ALTER TABLE `boulderinteraction_user_assigned`
  ADD CONSTRAINT `FK_BoulderInteractionBoulder` FOREIGN KEY (`ID_Boulder`) REFERENCES `boulder` (`ID`),
  ADD CONSTRAINT `FK_BoulderInteractionUser` FOREIGN KEY (`ID_User`) REFERENCES `user` (`ID`);

--
-- Constraints for table `boulderlike_user_assigned`
--
ALTER TABLE `boulderlike_user_assigned`
  ADD CONSTRAINT `FK_BoulderLikeBoulder` FOREIGN KEY (`ID_Boulder`) REFERENCES `boulder` (`ID`),
  ADD CONSTRAINT `FK_BoulderLikeUser` FOREIGN KEY (`ID_User`) REFERENCES `user` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
