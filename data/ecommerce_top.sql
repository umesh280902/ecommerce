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
-- Table structure for table `top`
--

DROP TABLE IF EXISTS `top`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `top` (
  `productid` int NOT NULL,
  `stock` int NOT NULL,
  `brand_name` varchar(45) NOT NULL,
  `price` int NOT NULL,
  `description` varchar(255) NOT NULL,
  `type` varchar(45) NOT NULL,
  `color` varchar(45) NOT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `detail` varchar(45) NOT NULL,
  `image` varchar(255) NOT NULL,
  PRIMARY KEY (`productid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `top`
--

LOCK TABLES `top` WRITE;
/*!40000 ALTER TABLE `top` DISABLE KEYS */;
INSERT INTO `top` VALUES (1,150,'iVOC',1199,'formal shirt with full sleeves','top','black','men','shirt','topproduct11.jpg'),(2,130,'NETPLAY',899,'formal shirt with full sleeves','top','gray','men','shirt','topproduct21.jpg'),(3,120,'VAN HEUSEN',1999,'formal shirt with full sleeves','top','white','men','shirt','topproduct31.jpg'),(4,175,'LOUIS PHILLIPPE',2049,'formal shirt with full sleeves','top','pink','men','shirt','topproduct41.jpg'),(5,273,'JAINISH',1299,'formal shirt with full sleeves','top','navy blue','men','shirt','topproduct51.jpg'),(6,123,'JAINISH',1499,'formal shirt with full sleeves','top','grey','men','shirt','topproduct61.jpg'),(7,121,'JAINISH',1299,'formal shirt with full sleeves in checks pattern','top','green','men','shirt','topproduct71.jpg'),(8,87,'JAINISH',1399,'formal shirt with full sleeves','top','black','men','shirt','topproduct81.jpg'),(9,123,'tokyo talkies',1049,'casual regualr sleeves printed','top','pink','women','top','top11.jpg'),(10,321,'tokyo talkies',899,'party regular slees solid','top','black','women','top','top21.jpg'),(11,423,'sheel associates',1999,'casual puff solid','top','black','women','top','top31.jpg'),(12,100,'prettify',1997,'casual regular sleeves solid','top','yellow','women','top','top41.jpg'),(13,150,'dmp fashion',1499,'casual sleeves embroidered','top','maroon','women','top','top51.jpg'),(14,141,'dl fashion',999,'casual puff sleeves solid','top','purple','women','top','top61.jpg'),(15,183,'sassafras',1599,'casual bell sleeves','top','maroon','women','top','top71.jpg'),(16,142,'tokyo talkies',749,'casual regular solid','top','beige','women','top','top81.jpg'),(17,100,'john players',1049,'skinny jeans with insert pockets','bottom','gray','men','jeans','bottom11.jpg'),(18,150,'john players',1049,'skinnyfit mid-rise','bottom','blue','men','jeans','bottom21.jpg'),(19,175,'john players',1049,'skinny fit mid-rise','bottom','black','men','jeans','bottom31.jpg'),(20,200,'LEVI\'S',3199,'Slim mid Rise','bottom','blue','men','jeans','bottom41.jpg'),(21,183,'louis phillippe',2999,'slim fit mid-wash','bottom','dark blue','men','jeans','bottom51.jpg'),(22,271,'DNMX',999,'Mid-Rise slim Fit','bottom','black','men','jeans','bottom61.jpg'),(23,192,'john players',1299,'mid-rise skinny','bottom','black','men','jeans','bottom71.jpg'),(24,184,'Indian Garage',1999,'Mid wash Slim fit','bottom','dark blue','men','jeans','bottom81.jpg'),(25,150,'kotty',1999,'regular high rise','bottom','black','women','jeans','bottom11.jpg'),(26,210,'kotty',1999,'regular high rise','bottom','blue','women','jeans','bottom21.jpg'),(27,183,'guti',1699,'flared high rise','bottom','blue','women','jeans','bottom31.jpg'),(28,143,'tyffyn',1499,'slim high rise','bottom','beige','women','jeans','bottom41.jpg'),(29,212,'zayla',1199,'skinny mid rise','bottom','grey','women','jeans','bottom51.jpg'),(30,154,'vedant vastram',2999,'slim high rise','bottom','blue','women','jeans','bottom61.jpg'),(31,189,'roadster',2099,'boot-leg mid rise','bottom','dark blue','women','jeans','bottom71.jpg'),(32,215,'lee tex',1999,'flared high rise','bottom','black','women','jeans','bottom81.jpg');
/*!40000 ALTER TABLE `top` ENABLE KEYS */;
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
