-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 24, 2018 at 02:42 AM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `console`
--

-- --------------------------------------------------------

--
-- Table structure for table `detail`
--

CREATE TABLE `detail` (
  `detail_name` varchar(25) NOT NULL,
  `detail_age` int(2) DEFAULT NULL,
  `detail_email` varchar(20) NOT NULL,
  `detail_phone` int(10) DEFAULT NULL,
  `detail_city` varchar(10) NOT NULL,
  `detail_dept` varchar(10) NOT NULL,
  `detail_nationality` varchar(10) NOT NULL,
  `detail_gender` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `detail`
--

INSERT INTO `detail` (`detail_name`, `detail_age`, `detail_email`, `detail_phone`, `detail_city`, `detail_dept`, `detail_nationality`, `detail_gender`) VALUES
('a', 1, 'a@b.c', 1, 'd', 'w', 'q', 't'),
('t', 1, 't@t.t', 1, 't', 't', 't', 't'),
('tharanes', 18, 'tharanes17@gmail.com', 92798489, 'salem', 'cse', 'indian', 'male');

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `console_email` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`console_email`) VALUES
('a@b.c'),
('t@t.t'),
('tharanes17@gmail.com'),
('rubagnaneswari.s@gmail.com');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
