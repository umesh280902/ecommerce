-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: ecommerce
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `addtocart`
--

DROP TABLE IF EXISTS `addtocart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `addtocart` (
  `addtocartid` int NOT NULL AUTO_INCREMENT,
  `id` int NOT NULL,
  `title` varchar(45) DEFAULT NULL,
  `subtitle` varchar(45) DEFAULT NULL,
  `size` varchar(45) NOT NULL DEFAULT 'S',
  `price` varchar(45) DEFAULT NULL,
  `originalprice` varchar(45) DEFAULT NULL,
  `quantity` int DEFAULT '0',
  `type` varchar(45) DEFAULT NULL,
  `customer_id` int NOT NULL,
  PRIMARY KEY (`addtocartid`),
  KEY `customer_id_idx` (`customer_id`),
  CONSTRAINT `customer_id` FOREIGN KEY (`customer_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addtocart`
--

LOCK TABLES `addtocart` WRITE;
/*!40000 ALTER TABLE `addtocart` DISABLE KEYS */;
INSERT INTO `addtocart` VALUES (60,1,'iVOC','iVOC\'s black shirt','S','647.46','1199',3,'men',10055),(61,2,'NETPLAY','NETPLAY\'s gray shirt','S','485.46','899',1,'men',10055),(62,9,'tokyo talkies','tokyo talkies\'s pink top','S','566.46','1049',1,'women',10055),(68,2,'NETPLAY','NETPLAY\'s gray shirt','XL','485.46','899',1,'men',10055);
/*!40000 ALTER TABLE `addtocart` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-21 22:33:30
