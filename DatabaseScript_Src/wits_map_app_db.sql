-- phpMyAdmin SQL Dump
-- version 4.0.4.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 01, 2013 at 09:09 AM
-- Server version: 5.5.32
-- PHP Version: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `wits_map_app_db`
--
CREATE DATABASE IF NOT EXISTS `wits_map_app_db` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `wits_map_app_db`;

-- --------------------------------------------------------

--
-- Table structure for table `locationdata`
--
-- Creation: Nov 26, 2013 at 12:35 PM
--

CREATE TABLE IF NOT EXISTS `locationdata` (
  `LocationID` int(11) NOT NULL AUTO_INCREMENT,
  `TypeOfPoint` text NOT NULL,
  `MapID` int(11) NOT NULL,
  `ImageCoordinateX` int(11) NOT NULL,
  `ImageCoordinateY` int(11) NOT NULL,
  `GPSLatitude` double NOT NULL,
  `GPSLongitude` double NOT NULL,
  `LocationInfo` mediumtext,
  `ImageOfLocation` mediumtext,
  `LocationName` char(255) DEFAULT NULL,
  `LocationPrefix` char(10) DEFAULT NULL,
  PRIMARY KEY (`LocationID`),
  KEY `LocationID` (`LocationID`),
  KEY `LocationID_2` (`LocationID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- RELATIONS FOR TABLE `locationdata`:
--   `MapID`
--       `map` -> `MapID`
--

-- --------------------------------------------------------

--
-- Table structure for table `map`
--
-- Creation: Nov 26, 2013 at 11:48 AM
--

CREATE TABLE IF NOT EXISTS `map` (
  `MapID` int(11) NOT NULL AUTO_INCREMENT,
  `ImgLocation` longtext NOT NULL,
  `Corner1GPSLatitude` double NOT NULL,
  `Corner1GPSLongitude` double NOT NULL,
  `Corner2GPSLatitude` double NOT NULL,
  `Corner2GPSLongitude` double NOT NULL,
  `Corner3GPSLatitude` double NOT NULL,
  `Corner3GPSLongitude` double NOT NULL,
  `Corner4GPSLatitude` double NOT NULL,
  `Corner4GPSLongitude` double NOT NULL,
  PRIMARY KEY (`MapID`),
  KEY `MapID` (`MapID`),
  KEY `MapID_2` (`MapID`),
  KEY `MapID_3` (`MapID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `path`
--
-- Creation: Nov 26, 2013 at 12:06 PM
--

CREATE TABLE IF NOT EXISTS `path` (
  `PathID` int(11) NOT NULL AUTO_INCREMENT,
  `CurrentNode` int(11) NOT NULL,
  `PreviousNode` int(11) NOT NULL,
  PRIMARY KEY (`PathID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- RELATIONS FOR TABLE `path`:
--   `CurrentNode`
--       `locationdata` -> `LocationID`
--   `PreviousNode`
--       `locationdata` -> `LocationID`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--
-- Creation: Nov 26, 2013 at 11:15 AM
--

CREATE TABLE IF NOT EXISTS `users` (
  `UserID` int(10) NOT NULL AUTO_INCREMENT,
  `UserName` varchar(100) NOT NULL,
  `UserPassword` varchar(100) NOT NULL,
  `UserEmailAddress` varchar(100) NOT NULL,
  PRIMARY KEY (`UserID`),
  UNIQUE KEY `UserName` (`UserName`),
  UNIQUE KEY `UserEmailAddress` (`UserEmailAddress`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
