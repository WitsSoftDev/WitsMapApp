-- phpMyAdmin SQL Dump
-- version 4.0.9
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 31, 2014 at 04:53 AM
-- Server version: 5.6.14
-- PHP Version: 5.5.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `wits_map_app_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `building`
--

CREATE TABLE IF NOT EXISTS `building` (
  `BuildingID` int(11) NOT NULL AUTO_INCREMENT,
  `CampusID` int(11) NOT NULL,
  `GPSLat` double NOT NULL,
  `GPSLong` double NOT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `ImageLocation` varchar(255) DEFAULT NULL,
  `BuildingAbbreviations` varchar(255) NOT NULL,
  PRIMARY KEY (`BuildingID`),
  KEY `CampusID` (`CampusID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `campus`
--

CREATE TABLE IF NOT EXISTS `campus` (
  `CampusID` int(11) NOT NULL AUTO_INCREMENT,
  `GPSLat1` double NOT NULL,
  `GPSLong1` double NOT NULL,
  `GPSLat2` double NOT NULL,
  `GPSLong2` double NOT NULL,
  `GPSLat3` double NOT NULL,
  `GPSLong3` double NOT NULL,
  `GPSLat4` double NOT NULL,
  `GPSLong4` double NOT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `ImageLocation` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`CampusID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `UserID` int(20) NOT NULL AUTO_INCREMENT,
  `UserName` varchar(30) NOT NULL,
  `UserPassword` varchar(32) NOT NULL,
  `UserEmailAddress` varchar(30) NOT NULL,
  PRIMARY KEY (`UserID`),
  UNIQUE KEY `UserName` (`UserName`),
  UNIQUE KEY `UserEmailAddress` (`UserEmailAddress`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`UserID`, `UserName`, `UserPassword`, `UserEmailAddress`) VALUES
(1, 'ick_seshoka', '32250170a0dca92d53ec9624f336ca24', 'ick.seshoka@gmail.com'),
(2, 'jason', '73a054cc528f91ca1bbdda3589b6a22d', 'jasonchalom@yahoo.co.uk');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `building`
--
ALTER TABLE `building`
  ADD CONSTRAINT `building_ibfk_1` FOREIGN KEY (`CampusID`) REFERENCES `campus` (`CampusID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
