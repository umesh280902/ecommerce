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
-- Table structure for table `topproduct`
--

DROP TABLE IF EXISTS `topproduct`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `topproduct` (
  `imageid` int NOT NULL,
  `productid` int NOT NULL,
  `size` varchar(100) DEFAULT NULL,
  `images` varchar(255) NOT NULL,
  PRIMARY KEY (`imageid`),
  KEY `productid_idx` (`productid`),
  CONSTRAINT `productid` FOREIGN KEY (`productid`) REFERENCES `top` (`productid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `topproduct`
--

LOCK TABLES `topproduct` WRITE;
/*!40000 ALTER TABLE `topproduct` DISABLE KEYS */;
INSERT INTO `topproduct` VALUES (11,1,'S','topproduct11.jpg'),(12,1,'M','topproduct12.jpg'),(13,1,'L','topproduct13.jpg'),(14,1,'XL','topproduct14.jpg'),(21,2,'S','topproduct21.jpg'),(22,2,'M','topproduct22.jpg'),(23,2,'L','topproduct23.jpg'),(24,2,'XL','topproduct24.jpg'),(31,3,'S','topproduct31.jpg'),(32,3,'M','topproduct32.jpg'),(33,3,'L','topproduct33.jpg'),(34,3,'XL','topproduct34.jpg'),(41,4,'S','topproduct41.jpg'),(42,4,'M','topproduct42.jpg'),(43,4,'L','topproduct43.jpg'),(44,4,'XL','topproduct44.jpg'),(51,5,'S','topproduct51.jpg'),(52,5,'M','topproduct52.jpg'),(53,5,'L','topproduct53.jpg'),(54,5,'XL','topproduct54.jpg'),(61,6,'S','topproduct61.jpg'),(62,6,'M','topproduct62.jpg'),(63,6,'L','topproduct63.jpg'),(64,6,'XL','topproduct64.jpg'),(71,7,'S','topproduct71.jpg'),(72,7,'M','topproduct72.jpg'),(73,7,'L','topproduct73.jpg'),(74,7,'XL','topproduct74.jpg'),(81,8,'S','topproduct81.jpg'),(82,8,'M','topproduct82.jpg'),(83,8,'L','topproduct83.jpg'),(84,8,'XL','topproduct84.jpg'),(91,9,'S','top11.jpg'),(92,9,'M','top12.jpg'),(93,9,'L','top13.jpg'),(94,9,'XL','top14.jpg'),(101,10,'S','top21.jpg'),(102,10,'M','top22.jpg'),(103,10,'L','top23.jpg'),(104,10,'XL','top24.jpg'),(111,11,'S','top31.jpg'),(112,11,'M','top32.jpg'),(113,11,'L','top33.jpg'),(114,11,'XL','top34.jpg'),(121,12,'S','top41.jpg'),(122,12,'M','top42.jpg'),(123,12,'L','top43.jpg'),(124,12,'XL','top44.jpg'),(131,13,'S','top51.jpg'),(132,13,'M','top52.jpg'),(133,13,'L','top53.jpg'),(134,13,'XL','top54.jpg'),(141,14,'S','top61.jpg'),(142,14,'M','top62.jpg'),(143,14,'L','top63.jpg'),(144,14,'XL','top64.jpg'),(151,15,'S','top71.jpg'),(152,15,'M','top72.jpg'),(153,15,'L','top73.jpg'),(154,15,'XL','top74.jpg'),(161,16,'S','top81.jpg'),(162,16,'M','top82.jpg'),(163,16,'L','top83.jpg'),(164,16,'XL','top84.jpg'),(171,17,'32','bottom11.jpg'),(172,17,'34','bottom12.jpg'),(173,17,'36','bottom13.jpg'),(174,17,'38','bottom14.jpg'),(181,18,'32','bottom21.jpg'),(182,18,'34','bottom22.jpg'),(183,18,'36','bottom23.jpg'),(184,18,'38','bottom24.jpg'),(191,19,'32','bottom31.jpg'),(192,19,'34','bottom32.jpg'),(193,19,'36','bottom33.jpg'),(194,19,'38','bottom34.jpg'),(201,20,'32','bottom41.jpg'),(202,20,'34','bottom42.jpg'),(203,20,'36','bottom43.jpg'),(204,20,'38','bottom44.jpg'),(211,21,'32','bottom51.jpg'),(212,21,'34','bottom52.jpg'),(213,21,'36','bottom53.jpg'),(214,21,'38','bottom54.jpg'),(221,22,'32','bottom61.jpg'),(222,22,'34','bottom62.jpg'),(223,22,'36','bottom63.jpg'),(224,22,'38','bottom64.jpg'),(231,23,'32','bottom71.jpg'),(232,23,'34','bottom72.jpg'),(233,23,'36','bottom73.jpg'),(234,23,'38','bottom74.jpg'),(241,24,'32','bottom81.jpg'),(242,24,'34','bottom82.jpg'),(243,24,'36','bottom83.jpg'),(244,24,'38','bottom84.jpg'),(251,25,'32','bottom11.jpg'),(252,25,'34','bottom12.jpg'),(253,25,'36','bottom13.jpg'),(254,25,'38','bottom14.jpg'),(261,26,'32','bottom21.jpg'),(262,26,'34','bottom22.jpg'),(263,26,'36','bottom23.jpg'),(264,26,'38','bottom24.jpg'),(271,27,'32','bottom31.jpg'),(272,27,'34','bottom32.jpg'),(273,27,'36','bottom33.jpg'),(274,27,'38','bottom34.jpg'),(281,28,'32','bottom41.jpg'),(282,28,'34','bottom42.jpg'),(283,28,'36','bottom43.jpg'),(284,28,'38','bottom44.jpg'),(291,29,'32','bottom51.jpg'),(292,29,'34','bottom52.jpg'),(293,29,'36','bottom53.jpg'),(294,29,'38','bottom54.jpg'),(301,30,'32','bottom61.jpg'),(302,30,'34','bottom62.jpg'),(303,30,'36','bottom63.jpg'),(304,30,'38','bottom64.jpg'),(311,31,'32','bottom71.jpg'),(312,31,'34','bottom72.jpg'),(313,31,'36','bottom73.jpg'),(314,31,'38','bottom74.jpg'),(321,32,'32','bottom81.jpg'),(322,32,'34','bottom82.jpg'),(323,32,'36','bottom83.jpg'),(324,32,'38','bottom84.jpg');
/*!40000 ALTER TABLE `topproduct` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-21 22:16:40
