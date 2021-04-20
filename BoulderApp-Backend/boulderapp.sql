-- phpMyAdmin SQL Dump
-- version 4.7.1
-- https://www.phpmyadmin.net/
--
-- Host: sql11.freemysqlhosting.net
-- Erstellungszeit: 20. Apr 2021 um 20:07
-- Server-Version: 5.5.62-0ubuntu0.14.04.1
-- PHP-Version: 7.0.33-0ubuntu0.16.04.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `sql11407083`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `boulder`
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
-- Tabellenstruktur für Tabelle `bouldereditor_user_assigned`
--

CREATE TABLE `bouldereditor_user_assigned` (
  `ID` int(6) UNSIGNED NOT NULL,
  `ID_Boulder` int(6) UNSIGNED DEFAULT NULL,
  `ID_User` int(6) UNSIGNED DEFAULT NULL,
  `Erstellt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `boulderinteraction_user_assigned`
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
-- Tabellenstruktur für Tabelle `boulderlike_user_assigned`
--

CREATE TABLE `boulderlike_user_assigned` (
  `ID` int(6) UNSIGNED NOT NULL,
  `ID_Boulder` int(6) UNSIGNED DEFAULT NULL,
  `ID_User` int(6) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `location`
--

CREATE TABLE `location` (
  `ID` int(6) UNSIGNED NOT NULL,
  `Land` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Region` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Stadt` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `user`
--

CREATE TABLE `user` (
  `ID` int(6) UNSIGNED NOT NULL,
  `Name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Password` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `boulder`
--
ALTER TABLE `boulder`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_BoulderLocation` (`ID_Location`),
  ADD KEY `FK_BoulderErsteller` (`ID_Ersteller`);

--
-- Indizes für die Tabelle `bouldereditor_user_assigned`
--
ALTER TABLE `bouldereditor_user_assigned`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_BoulderEditorBoulder` (`ID_Boulder`),
  ADD KEY `FK_BoulderEditorUser` (`ID_User`);

--
-- Indizes für die Tabelle `boulderinteraction_user_assigned`
--
ALTER TABLE `boulderinteraction_user_assigned`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_BoulderInteractionBoulder` (`ID_Boulder`),
  ADD KEY `FK_BoulderInteractionUser` (`ID_User`);

--
-- Indizes für die Tabelle `boulderlike_user_assigned`
--
ALTER TABLE `boulderlike_user_assigned`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_BoulderLikeBoulder` (`ID_Boulder`),
  ADD KEY `FK_BoulderLikeUser` (`ID_User`);

--
-- Indizes für die Tabelle `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`ID`);

--
-- Indizes für die Tabelle `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `boulder`
--
ALTER TABLE `boulder`
  MODIFY `ID` int(6) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT für Tabelle `bouldereditor_user_assigned`
--
ALTER TABLE `bouldereditor_user_assigned`
  MODIFY `ID` int(6) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT für Tabelle `boulderinteraction_user_assigned`
--
ALTER TABLE `boulderinteraction_user_assigned`
  MODIFY `ID` int(6) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT für Tabelle `boulderlike_user_assigned`
--
ALTER TABLE `boulderlike_user_assigned`
  MODIFY `ID` int(6) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT für Tabelle `location`
--
ALTER TABLE `location`
  MODIFY `ID` int(6) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT für Tabelle `user`
--
ALTER TABLE `user`
  MODIFY `ID` int(6) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `boulder`
--
ALTER TABLE `boulder`
  ADD CONSTRAINT `FK_BoulderErsteller` FOREIGN KEY (`ID_Ersteller`) REFERENCES `user` (`ID`),
  ADD CONSTRAINT `FK_BoulderLocation` FOREIGN KEY (`ID_Location`) REFERENCES `location` (`ID`);

--
-- Constraints der Tabelle `bouldereditor_user_assigned`
--
ALTER TABLE `bouldereditor_user_assigned`
  ADD CONSTRAINT `FK_BoulderEditorBoulder` FOREIGN KEY (`ID_Boulder`) REFERENCES `boulder` (`ID`),
  ADD CONSTRAINT `FK_BoulderEditorUser` FOREIGN KEY (`ID_User`) REFERENCES `user` (`ID`);

--
-- Constraints der Tabelle `boulderinteraction_user_assigned`
--
ALTER TABLE `boulderinteraction_user_assigned`
  ADD CONSTRAINT `FK_BoulderInteractionBoulder` FOREIGN KEY (`ID_Boulder`) REFERENCES `boulder` (`ID`),
  ADD CONSTRAINT `FK_BoulderInteractionUser` FOREIGN KEY (`ID_User`) REFERENCES `user` (`ID`);

--
-- Constraints der Tabelle `boulderlike_user_assigned`
--
ALTER TABLE `boulderlike_user_assigned`
  ADD CONSTRAINT `FK_BoulderLikeBoulder` FOREIGN KEY (`ID_Boulder`) REFERENCES `boulder` (`ID`),
  ADD CONSTRAINT `FK_BoulderLikeUser` FOREIGN KEY (`ID_User`) REFERENCES `user` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
