-- MySQL dump 10.13  Distrib 8.0.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: wrf
-- ------------------------------------------------------
-- Server version	8.0.17

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

USE wrf;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(255) NOT NULL,
  `is_active` tinyint(4) NOT NULL,
  `created_on` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `created_by` varchar(255) NOT NULL,
  `updated_on` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_by` varchar(255) NOT NULL,
  `category_hierarchy` int(11) NOT NULL DEFAULT '1',
  `priority` int(11) NOT NULL DEFAULT '99',
  `belongs_to` int(11) DEFAULT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Color',1,'2019-05-31 15:30:39.886231','admin','2019-05-31 15:30:39.886231','admin',1,5,NULL),(2,'Features / Luxuries',1,'2019-05-31 15:30:39.886231','admin','2019-05-31 15:30:39.886231','admin',1,3,NULL),(3,'Size',1,'2019-05-31 15:30:39.886231','admin','2019-05-31 15:30:39.886231','admin',1,1,NULL),(4,'Style',1,'2019-05-31 15:30:39.886231','admin','2019-05-31 15:30:39.886231','admin',1,2,NULL),(5,'Top',1,'2019-05-31 15:30:39.886231','admin','2019-05-31 15:30:39.886231','admin',1,4,NULL),(6,'Drawer Fronts',1,'2019-05-31 15:30:39.886231','admin','2019-05-31 15:30:39.886231','admin',2,8,4),(7,'Baseboards',1,'2019-05-31 15:30:39.886231','admin','2019-05-31 15:30:39.886231','admin',2,7,4),(8,'Shelving',1,'2019-05-31 15:30:39.886231','admin','2019-05-31 15:30:39.886231','admin',2,6,4),(9,'Doors',1,'2019-05-31 15:30:39.886231','admin','2019-05-31 15:30:39.886231','admin',2,2,4),(10,'Cabinets',1,'2019-05-31 15:30:39.886231','admin','2019-05-31 15:30:39.886231','admin',2,1,3),(11,'Legs',1,'2019-05-31 15:30:39.886231','admin','2019-05-31 15:30:39.886231','admin',2,4,4),(12,'Drawers',1,'2019-05-31 15:30:39.886231','admin','2019-05-31 15:30:39.886231','admin',2,3,4),(13,'Hardware',1,'2019-05-31 15:30:39.886231','admin','2019-05-31 15:30:39.886231','admin',2,1,2),(14,'Rollout Drawers',1,'2019-06-25 13:38:12.322986','admin','2019-06-25 13:38:12.322986','admin',2,9,4);
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `customer_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `primary_email` varchar(255) NOT NULL,
  `secondary_email` varchar(255) NOT NULL DEFAULT '',
  `phone_number` varchar(255) NOT NULL DEFAULT '',
  `shipping_address` varchar(255) NOT NULL DEFAULT '',
  `created_on` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `created_by` varchar(255) NOT NULL,
  `updated_on` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `hardware_reference_data`
--

DROP TABLE IF EXISTS `hardware_reference_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hardware_reference_data` (
  `hw_id` int(11) NOT NULL AUTO_INCREMENT,
  `short_name` varchar(255) NOT NULL,
  `long_name` varchar(255) NOT NULL,
  `sku` varchar(255) NOT NULL,
  `is_active` tinyint(4) NOT NULL,
  `created_on` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `created_by` varchar(255) NOT NULL,
  `updated_on` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`hw_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hardware_reference_data`
--

LOCK TABLES `hardware_reference_data` WRITE;
/*!40000 ALTER TABLE `hardware_reference_data` DISABLE KEYS */;
INSERT INTO `hardware_reference_data` VALUES (1,'HARDWARE_6','HARDWARE #6','P50122H-SN-C5',1,'2019-05-21 13:58:45.968076','admin','2019-05-21 13:58:45.968076','admin'),(2,'HARDWARE_9','HARDWARE #9','9377-10VB-P',1,'2019-05-21 13:58:45.968076','admin','2019-05-21 13:58:45.968076','admin'),(3,'HARDWARE_10','HARDWARE #10','H9379-10WN-P',1,'2019-05-21 13:58:45.968076','admin','2019-05-21 13:58:45.968076','admin'),(4,'HARDWARE_14','HARDWARE #14','P010120-B3-C',1,'2019-05-21 13:58:45.968076','admin','2019-05-21 13:58:45.968076','admin'),(5,'HARDWARE_15','HARDWARE #15','P01025-VBC-C',1,'2019-05-21 13:58:45.968076','admin','2019-05-21 13:58:45.968076','admin'),(6,'HARDWARE_16','HARDWARE #16','PO1012-SS-C',1,'2019-05-21 13:58:45.968076','admin','2019-05-21 13:58:45.968076','admin'),(7,'HARDWARE_25','HARDWARE #25','9355-10VB-P',1,'2019-05-21 13:58:45.968076','admin','2019-05-21 13:58:45.968076','admin'),(8,'HARDWARE_26','HARDWARE #26','9351-10VB-P',1,'2019-05-21 13:58:45.968076','admin','2019-05-21 13:58:45.968076','admin'),(9,'HARDWARE_27','HARDWARE #27','9374-10VB-P',1,'2019-05-21 13:58:45.968076','admin','2019-05-21 13:58:45.968076','admin'),(10,'HARDWARE_31','HARDWARE #31','9352-10WN-P',1,'2019-05-21 13:58:45.968076','admin','2019-05-21 13:58:45.968076','admin'),(11,'HARDWARE_32','HARDWARE #32','PN2001-FB-C',1,'2019-05-21 13:58:45.968076','admin','2019-05-21 13:58:45.968076','admin'),(12,'HARDWARE_39','HARDWARE #39','P22781C-SN-C',1,'2019-05-21 13:58:45.968076','admin','2019-05-21 13:58:45.968076','admin'),(13,'HARDWARE_40','HARDWARE #40','P22781C-VBC-C',1,'2019-05-21 13:58:45.968076','admin','2019-05-21 13:58:45.968076','admin'),(14,'HARDWARE_50','HARDWARE #50','0967-155-P',1,'2019-05-21 13:58:45.968076','admin','2019-05-21 13:58:45.968076','admin'),(15,'HARDWARE_51','HARDWARE #51','7884-1BPN-P',1,'2019-05-21 13:58:45.968076','admin','2019-05-21 13:58:45.968076','admin'),(16,'HARDWARE_52','HARDWARE #52','7886-IVB-P',1,'2019-05-21 13:58:45.968076','admin','2019-05-21 13:58:45.968076','admin'),(17,'no_hardware','No Hardware','',1,'2019-05-21 13:58:45.968076','admin','2019-05-21 13:58:45.968076','admin');
/*!40000 ALTER TABLE `hardware_reference_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `timestamp` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `product_details`
--

DROP TABLE IF EXISTS `product_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_details` (
  `pd_id` int(11) NOT NULL AUTO_INCREMENT,
  `response` varchar(255) NOT NULL,
  `created_on` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `created_by` varchar(255) NOT NULL,
  `updated_on` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_by` varchar(255) NOT NULL,
  `ph_fk` int(11) DEFAULT NULL,
  `cat_fk` int(11) DEFAULT NULL,
  `q_fk` int(11) DEFAULT NULL,
  PRIMARY KEY (`pd_id`),
  KEY `FK_874e94b49901c2a53fe6f602ca0` (`ph_fk`),
  KEY `FK_010b35a1f9a968a5d08dd4645d5` (`cat_fk`),
  KEY `FK_d4c80a010b7d5bdd4c1ccefbe1b` (`q_fk`),
  CONSTRAINT `FK_010b35a1f9a968a5d08dd4645d5` FOREIGN KEY (`cat_fk`) REFERENCES `category` (`category_id`),
  CONSTRAINT `FK_874e94b49901c2a53fe6f602ca0` FOREIGN KEY (`ph_fk`) REFERENCES `product_header` (`ph_id`),
  CONSTRAINT `FK_d4c80a010b7d5bdd4c1ccefbe1b` FOREIGN KEY (`q_fk`) REFERENCES `question` (`q_id`)
) ENGINE=InnoDB AUTO_INCREMENT=265 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `product_header`
--

DROP TABLE IF EXISTS `product_header`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_header` (
  `ph_id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `order_num` int(11) NOT NULL,
  `status` varchar(255) NOT NULL,
  `crafting_required` tinyint(4) NOT NULL,
  `created_on` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `created_by` varchar(255) NOT NULL,
  `updated_on` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_by` varchar(255) NOT NULL,
  `customer_fk` int(11) DEFAULT NULL,
  `notes` varchar(2000) NOT NULL DEFAULT '',
  `reference_number` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`ph_id`),
  KEY `FK_40009ca519a9e0c7443848bb0d3` (`customer_fk`),
  CONSTRAINT `FK_40009ca519a9e0c7443848bb0d3` FOREIGN KEY (`customer_fk`) REFERENCES `customer` (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `product_price_component`
--

DROP TABLE IF EXISTS `product_price_component`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_price_component` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pd_id` int(11) DEFAULT NULL,
  `actual_price` double NOT NULL DEFAULT '0',
  `custom_price` double DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `question`
--

DROP TABLE IF EXISTS `question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `question` (
  `q_id` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(255) NOT NULL,
  `short_name` varchar(255) NOT NULL,
  `topic` varchar(255) NOT NULL DEFAULT '',
  `tooltip` varchar(255) NOT NULL DEFAULT '',
  `instructions` varchar(255) NOT NULL DEFAULT '',
  `datatype` varchar(255) NOT NULL,
  `is_active` tinyint(4) NOT NULL,
  `created_on` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `created_by` varchar(255) NOT NULL,
  `updated_on` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_by` varchar(255) NOT NULL,
  `cat_fk` int(11) NOT NULL,
  `grouping` int(11) NOT NULL DEFAULT '0',
  `unique_dim` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`q_id`),
  KEY `FK_e37199275c0b6bdef369e7fb1ad` (`cat_fk`),
  CONSTRAINT `FK_e37199275c0b6bdef369e7fb1ad` FOREIGN KEY (`cat_fk`) REFERENCES `category` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=262 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question`
--

LOCK TABLES `question` WRITE;
/*!40000 ALTER TABLE `question` DISABLE KEYS */;
INSERT INTO `question` VALUES (1,'Length','total_length','size','enter a length','','string',0,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',10,1,'custom_size'),(2,'Depth','total_depth','size','enter a depth','','string',0,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',10,1,'custom_size'),(3,'Height','total_height','size','enter a height','','string',0,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',10,1,'custom_size'),(4,'Quantity','cab_quantity','Cabinet Quantity','Select number of cabinets','','number',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',10,1,''),(5,'Length','cab_lngth','Cabinet Length','enter length for cabinet','','number',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',10,2,'cab_1'),(6,'Width','cab_wdth','Cabinet Width','enter width for cabinet','','number',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',10,2,'cab_1'),(7,'Height','cab_height','Cabinet Height','enter height for cabinet','','number',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',10,2,'cab_1'),(8,'Material Type','cab_mt','Cabinet Material Type','enter material type for cabinet','','string',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',10,1,''),(9,'Paint','pnt_clr','Paint','enter paint color','','string',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',1,0,''),(10,'Material Type','dr_mt','Doors Material Type','enter material type for doors','','string',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',9,0,''),(11,'Vendor','dr_vndr','Vendor','enter vendor for doors','','string',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',9,1,''),(12,'Vendor PO#','dr_vndr_po','Vendor PO#','enter vendor PO# for doors','','string',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',9,1,''),(13,'Quantity','dr_quantity','Door Quantity','enter number of doors','','number',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',9,2,''),(14,'Length','dr_lngth','Door Length','enter length for doors','','number',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',9,3,'dr_1'),(15,'Width','dr_wdth','Door Width','enter width for doors','','number',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',9,3,'dr_1'),(16,'Vendor','dwr_vndr','Vendor','enter vendor for drawers','','string',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',12,0,''),(17,'Vendor PO#','dwr_vndr_po','Vendor PO#','enter vendor PO# for drawers','','string',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',12,0,''),(18,'Quantity','dwr_quantity','Drawer Quantity','enter number of drawers','','number',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',12,1,''),(19,'Length','dwr_lngth','Drawer Length','enter length for drawers','','number',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',12,2,'dwr_1'),(20,'Width','dwr_wdth','Drawer Width','enter width for drawers','','number',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',12,2,'dwr_1'),(21,'Material Type','dwr_mt','Drawers Material Type','enter material type for drawers','','string',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',12,1,''),(22,'Vendor','legs_vndr','Vendor','enter vendor for legs','','string',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',11,0,''),(23,'Vendor PO#','legs_vndr_po','Vendor PO#','enter vendor PO# for legs','','string',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',11,0,''),(24,'Quantity','legs_quantity','Legs Quantity','enter number of legs','','number',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',11,1,''),(25,'Length','legs_lngth','Legs Length','enter length for legs','','number',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',11,2,'legs_1'),(26,'Width','legs_wdth','Legs Width','enter width for legs','','number',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',11,2,'legs_1'),(27,'Color','legs_clr','Legs Color','enter color for legs','','string',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',11,1,''),(28,'Total Quantity','shlv_qty','Shelving Quantity','enter total number of shelves','','number',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',8,0,''),(29,'Length','shlv_lngth','Shelving Length','enter length for shelves','','number',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',8,1,''),(30,'Width','shlv_wdth','Shelving Width','enter width for shelves','','number',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',8,1,''),(31,'Total Quantity','bb_qty','Baseboard Quantity','enter total number of baseboards','','number',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',7,0,''),(32,'Length','bb_lngth','Baseboard Length','enter length for baseboards','','number',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',7,1,''),(33,'Width','bb_wdth','Baseboard Width','enter width for baseboards','','number',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',7,1,''),(34,'Vendor','top_vndr','Top Vendor','enter vendor for top','','string',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',5,0,''),(35,'Vendor PO#','top_vndr_po','Top Vendor PO#','enter vendor PO# for top','','string',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',5,0,''),(36,'Length','top_lngth','Top Length','enter length for top','','number',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',5,2,'top_1'),(37,'Width','top_wdth','Top Width','enter width for top','','number',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',5,2,'top_1'),(38,'Vendor','dwrfrnts_vndr','Drawer Fronts Vendor','enter vendor for drawer fronts','','string',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',6,0,''),(39,'Vendor PO#','dwrfrnts_vndr_po','Drawer Fronts Vendor PO#','enter vendor PO# for drawer fronts','','string',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',6,0,''),(40,'Quantity','dwrfrnts_qty','Drawer Fronts Quantity','enter number of drawer fronts','','number',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',6,1,''),(41,'Length','dwrfrnts_lngth','Drawer Fronts Length','enter length for drawer fronts','','number',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',6,2,''),(42,'Width','dwrfrnts_wdth','Drawer Fronts Width','enter width for drawer fronts','','number',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',6,2,''),(43,'Drawer hardware','hrdwr_drwr','Drawer hardware','Select hardware for drawers','','string',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',13,0,''),(44,'Door hardware','hrdwr_dr','Door hardware','Select hardware for doors','','string',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',13,0,''),(46,'Wine Rack','ftr_wr','Wine Rack','include wine rack in this order?','','string',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',2,0,''),(47,'Pull Out Trash','ftr_pot','Pull Out Trash','include pull out trash in this order?','','string',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',2,1,''),(48,'Dovetail Drawers','ftr_dtd','Dovetail Drawers','include dovetail drawers in this order?','','boolean',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',2,2,''),(49,'Height','dr_height','height','enter a height','','number',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',9,3,'dr_1'),(50,'Height','dwr_height','height','enter a height','','number',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',12,2,'dwr_1'),(51,'Height','dwrfrnts_height','height','enter a height','','number',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',6,2,''),(52,'Height','legs_height','height','enter a height','','number',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',11,2,'legs_1'),(53,'Length','cab_lngth_2','length','enter a length','','number',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',10,3,'cab_2'),(54,'Width','cab_wdth_2','width','enter a width','','number',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',10,3,'cab_2'),(55,'Height','cab_height_2','height','enter a height','','number',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',10,3,'cab_2'),(56,'Length','cab_lngth_3','length','enter a length','','number',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',10,4,'cab_3'),(57,'Width','cab_wdth_3','width','enter a width','','number',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',10,4,'cab_3'),(58,'Height','cab_height_3','height','enter a height','','number',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',10,4,'cab_3'),(59,'Length','cab_lngth_4','length','enter a length','','number',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',10,5,'cab_4'),(60,'Width','cab_wdth_4','width','enter a width','','number',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',10,5,'cab_4'),(61,'Height','cab_height_4','height','enter a height','','number',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',10,5,'cab_4'),(62,'Length','top_lngth_2','length','enter a length','','number',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',5,3,'top_2'),(63,'Width','top_wdth_2','width','enter a width','','number',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',5,3,'top_2'),(64,'Quantity','top_quantity','quantity','enter a quantity','','number',1,'2019-06-20 13:28:56.298942','admin','2019-06-20 13:28:56.298942','admin',5,1,''),(86,'Length','dr_lngth_2','length','enter a length','','number',1,'2019-06-21 11:21:15.294332','admin','2019-06-21 11:21:15.294332','admin',9,4,'dr_2'),(87,'Width','dr_wdth_2','width','enter a width','','number',1,'2019-06-21 11:21:15.294332','admin','2019-06-21 11:21:15.294332','admin',9,4,'dr_2'),(88,'Height','dr_height_2','height','enter a height','','number',1,'2019-06-21 11:21:15.294332','admin','2019-06-21 11:21:15.294332','admin',9,4,'dr_2'),(89,'Length','dr_lngth_3','length','enter a length','','number',1,'2019-06-21 11:21:15.294332','admin','2019-06-21 11:21:15.294332','admin',9,5,'dr_3'),(90,'Width','dr_wdth_3','width','enter a width','','number',1,'2019-06-21 11:21:15.294332','admin','2019-06-21 11:21:15.294332','admin',9,5,'dr_3'),(91,'Height','dr_height_3','height','enter a height','','number',1,'2019-06-21 11:21:15.294332','admin','2019-06-21 11:21:15.294332','admin',9,5,'dr_3'),(92,'Length','dr_lngth_4','length','enter a length','','number',1,'2019-06-21 11:21:15.294332','admin','2019-06-21 11:21:15.294332','admin',9,6,'dr_4'),(93,'Width','dr_wdth_4','width','enter a width','','number',1,'2019-06-21 11:21:15.294332','admin','2019-06-21 11:21:15.294332','admin',9,6,'dr_4'),(94,'Height','dr_height_4','height','enter a height','','number',1,'2019-06-21 11:21:15.294332','admin','2019-06-21 11:21:15.294332','admin',9,6,'dr_4'),(95,'Length','dr_lngth_5','length','enter a length','','number',1,'2019-06-21 11:21:15.294332','admin','2019-06-21 11:21:15.294332','admin',9,7,'dr_5'),(96,'Width','dr_wdth_5','width','enter a width','','number',1,'2019-06-21 11:21:15.294332','admin','2019-06-21 11:21:15.294332','admin',9,7,'dr_5'),(97,'Height','dr_height_5','height','enter a height','','number',1,'2019-06-21 11:21:15.294332','admin','2019-06-21 11:21:15.294332','admin',9,7,'dr_5'),(98,'Length','dr_lngth_6','length','enter a length','','number',1,'2019-06-21 11:21:15.294332','admin','2019-06-21 11:21:15.294332','admin',9,8,'dr_6'),(99,'Width','dr_wdth_6','width','enter a width','','number',1,'2019-06-21 11:21:15.294332','admin','2019-06-21 11:21:15.294332','admin',9,8,'dr_6'),(100,'Height','dr_height_6','height','enter a height','','number',1,'2019-06-21 11:21:15.294332','admin','2019-06-21 11:21:15.294332','admin',9,8,'dr_6'),(101,'Length','dr_lngth_7','length','enter a length','','number',1,'2019-06-21 11:21:15.294332','admin','2019-06-21 11:21:15.294332','admin',9,9,'dr_7'),(102,'Width','dr_wdth_7','width','enter a width','','number',1,'2019-06-21 11:21:15.294332','admin','2019-06-21 11:21:15.294332','admin',9,9,'dr_7'),(103,'Height','dr_height_7','height','enter a height','','number',1,'2019-06-21 11:21:15.294332','admin','2019-06-21 11:21:15.294332','admin',9,9,'dr_7'),(104,'Length','dr_lngth_8','length','enter a length','','number',1,'2019-06-21 11:21:15.294332','admin','2019-06-21 11:21:15.294332','admin',9,10,'dr_8'),(105,'Width','dr_wdth_8','width','enter a width','','number',1,'2019-06-21 11:21:15.294332','admin','2019-06-21 11:21:15.294332','admin',9,10,'dr_8'),(106,'Height','dr_height_8','height','enter a height','','number',1,'2019-06-21 11:21:15.294332','admin','2019-06-21 11:21:15.294332','admin',9,10,'dr_8'),(155,'Length','legs_lngth_2','length','enter a length','','number',1,'2019-06-22 14:04:10.364727','admin','2019-06-22 14:04:10.364727','admin',11,3,'legs_2'),(156,'Width','legs_wdth_2','width','enter a width','','number',1,'2019-06-22 14:04:10.364727','admin','2019-06-22 14:04:10.364727','admin',11,3,'legs_2'),(157,'Height','legs_height_2','height','enter a height','','number',1,'2019-06-22 14:04:10.364727','admin','2019-06-22 14:04:10.364727','admin',11,3,'legs_2'),(158,'Length','legs_lngth_3','length','enter a length','','number',1,'2019-06-22 14:04:10.364727','admin','2019-06-22 14:04:10.364727','admin',11,4,'legs_3'),(159,'Width','legs_wdth_3','width','enter a width','','number',1,'2019-06-22 14:04:10.364727','admin','2019-06-22 14:04:10.364727','admin',11,4,'legs_3'),(160,'Height','legs_height_3','height','enter a height','','number',1,'2019-06-22 14:04:10.364727','admin','2019-06-22 14:04:10.364727','admin',11,4,'legs_3'),(161,'Length','legs_lngth_4','length','enter a length','','number',1,'2019-06-22 14:04:10.364727','admin','2019-06-22 14:04:10.364727','admin',11,5,'legs_4'),(162,'Width','legs_wdth_4','width','enter a width','','number',1,'2019-06-22 14:04:10.364727','admin','2019-06-22 14:04:10.364727','admin',11,5,'legs_4'),(163,'Height','legs_height_4','height','enter a height','','number',1,'2019-06-22 14:04:10.364727','admin','2019-06-22 14:04:10.364727','admin',11,5,'legs_4'),(164,'Length','legs_lngth_5','length','enter a length','','number',1,'2019-06-22 14:04:10.364727','admin','2019-06-22 14:04:10.364727','admin',11,6,'legs_5'),(165,'Width','legs_wdth_5','width','enter a width','','number',1,'2019-06-22 14:04:10.364727','admin','2019-06-22 14:04:10.364727','admin',11,6,'legs_5'),(166,'Height','legs_height_5','height','enter a height','','number',1,'2019-06-22 14:04:10.364727','admin','2019-06-22 14:04:10.364727','admin',11,6,'legs_5'),(167,'Length','dwr_lngth_2','length','enter a length','','number',1,'2019-06-22 19:51:33.731077','admin','2019-06-22 19:51:33.731077','admin',12,3,'dwr_2'),(168,'Width','dwr_wdth_2','width','enter a width','','number',1,'2019-06-22 19:51:33.731077','admin','2019-06-22 19:51:33.731077','admin',12,3,'dwr_2'),(169,'Height','dwr_height_2','height','enter a height','','number',1,'2019-06-22 19:51:33.731077','admin','2019-06-22 19:51:33.731077','admin',12,3,'dwr_2'),(170,'Length','dwr_lngth_3','length','enter a length','','number',1,'2019-06-22 19:51:33.731077','admin','2019-06-22 19:51:33.731077','admin',12,4,'dwr_3'),(171,'Width','dwr_wdth_3','width','enter a width','','number',1,'2019-06-22 19:51:33.731077','admin','2019-06-22 19:51:33.731077','admin',12,4,'dwr_3'),(172,'Height','dwr_height_3','height','enter a height','','number',1,'2019-06-22 19:51:33.731077','admin','2019-06-22 19:51:33.731077','admin',12,4,'dwr_3'),(173,'Length','dwr_lngth_4','length','enter a length','','number',1,'2019-06-22 19:51:33.731077','admin','2019-06-22 19:51:33.731077','admin',12,5,'dwr_4'),(174,'Width','dwr_wdth_4','width','enter a width','','number',1,'2019-06-22 19:51:33.731077','admin','2019-06-22 19:51:33.731077','admin',12,5,'dwr_4'),(175,'Height','dwr_height_4','height','enter a height','','number',1,'2019-06-22 19:51:33.731077','admin','2019-06-22 19:51:33.731077','admin',12,5,'dwr_4'),(200,'Open end shelf + 2 legs','ftr_os2l','','open end shelf and 2 legs','','boolean',1,'2019-06-24 13:25:56.986564','admin','2019-06-24 13:25:56.986564','admin',2,9,''),(201,'Open end shelf + 3 legs','ftr_os3l','','open end shelf and 3 legs','','boolean',1,'2019-06-24 13:25:56.986564','admin','2019-06-24 13:25:56.986564','admin',2,10,''),(203,'Utensil','ftr_utn','','utensils','','string',1,'2019-06-24 13:43:15.784117','admin','2019-06-24 13:43:15.784117','admin',2,3,''),(204,'Outlet Cut Out','ftr_oco','','outlet cut out','','boolean',1,'2019-06-24 13:43:15.784117','admin','2019-06-24 13:43:15.784117','admin',2,4,''),(205,'3\" Spice Rack','ftr_spr','','spice rack','','string',1,'2019-06-24 13:43:15.784117','admin','2019-06-24 13:43:15.784117','admin',2,5,''),(208,'Appliance Lift','ftr_applft','','appliance lift','','boolean',1,'2019-06-24 13:43:15.784117','admin','2019-06-24 13:43:15.784117','admin',2,8,''),(211,'Table legs + skirt','ftr_tls','','table legs and skirt','','boolean',1,'2019-06-24 13:43:15.784117','admin','2019-06-24 13:43:15.784117','admin',2,11,''),(215,'Knife','ftr_knf','','knife block','','string',1,'2019-06-24 13:44:54.409843','admin','2019-06-24 13:44:54.409843','admin',2,6,''),(216,'Cutlery','ftr_cly','','cutlery','','string',1,'2019-06-24 13:44:54.409843','admin','2019-06-24 13:44:54.409843','admin',2,7,''),(221,'Vendor','rodwr_vndr','vendor','enter the vendor','','string',1,'2019-06-25 13:45:02.974577','admin','2019-06-25 13:45:02.974577','admin',14,0,''),(222,'Vendor PO#','rodwr_vndr_po','vendor PO #','enter the vendor PO #','','string',1,'2019-06-25 13:45:02.974577','admin','2019-06-25 13:45:02.974577','admin',14,0,''),(223,'Quantity','rodwr_quantity','quantity','','','number',1,'2019-06-25 13:45:02.974577','admin','2019-06-25 13:45:02.974577','admin',14,1,''),(224,'Material Type','rodwr_mt','material type','enter the material type','','string',1,'2019-06-25 13:45:02.974577','admin','2019-06-25 13:45:02.974577','admin',14,1,''),(225,'Length','rodwr_lngth','length','enter a length','','number',1,'2019-06-25 13:45:02.974577','admin','2019-06-25 13:45:02.974577','admin',14,2,'rodwr_1'),(226,'Width','rodwr_wdth','width','enter a width','','number',1,'2019-06-25 13:45:02.974577','admin','2019-06-25 13:45:02.974577','admin',14,2,'rodwr_1'),(227,'Height','rodwr_height','height','enter a height','','number',1,'2019-06-25 13:45:02.974577','admin','2019-06-25 13:45:02.974577','admin',14,2,'rodwr_1'),(228,'Length','rodwr_lngth_2','length','enter a length','','number',1,'2019-06-25 13:45:02.974577','admin','2019-06-25 13:45:02.974577','admin',14,3,'rodwr_2'),(229,'Width','rodwr_wdth_2','width','enter a width','','number',1,'2019-06-25 13:45:02.974577','admin','2019-06-25 13:45:02.974577','admin',14,3,'rodwr_2'),(230,'Height','rodwr_height_2','height','enter a height','','number',1,'2019-06-25 13:45:02.974577','admin','2019-06-25 13:45:02.974577','admin',14,3,'rodwr_2'),(231,'Length','rodwr_lngth_3','length','enter a length','','number',1,'2019-06-25 13:45:02.974577','admin','2019-06-25 13:45:02.974577','admin',14,4,'rodwr_3'),(232,'Width','rodwr_wdth_3','width','enter a width','','number',1,'2019-06-25 13:45:02.974577','admin','2019-06-25 13:45:02.974577','admin',14,4,'rodwr_3'),(233,'Height','rodwr_height_3','height','enter a height','','number',1,'2019-06-25 13:45:02.974577','admin','2019-06-25 13:45:02.974577','admin',14,4,'rodwr_3'),(234,'Length','rodwr_lngth_4','length','enter a length','','number',1,'2019-06-25 13:45:02.974577','admin','2019-06-25 13:45:02.974577','admin',14,5,'rodwr_4'),(235,'Width','rodwr_wdth_4','width','enter a width','','number',1,'2019-06-25 13:45:02.974577','admin','2019-06-25 13:45:02.974577','admin',14,5,'rodwr_4'),(236,'Height','rodwr_height_4','height','enter a height','','number',1,'2019-06-25 13:45:02.974577','admin','2019-06-25 13:45:02.974577','admin',14,5,'rodwr_4'),(237,'Length','rodwr_lngth_5','length','enter a length','','number',1,'2019-06-25 13:45:02.974577','admin','2019-06-25 13:45:02.974577','admin',14,6,'rodwr_5'),(238,'Width','rodwr_wdth_5','width','enter a width','','number',1,'2019-06-25 13:45:02.974577','admin','2019-06-25 13:45:02.974577','admin',14,6,'rodwr_5'),(239,'Height','rodwr_height_5','height','enter a height','','number',1,'2019-06-25 13:45:02.974577','admin','2019-06-25 13:45:02.974577','admin',14,6,'rodwr_5'),(240,'Length','rodwr_lngth_6','length','enter a length','','number',1,'2019-06-25 13:45:02.974577','admin','2019-06-25 13:45:02.974577','admin',14,7,'rodwr_6'),(241,'Width','rodwr_wdth_6','width','enter a width','','number',1,'2019-06-25 13:45:02.974577','admin','2019-06-25 13:45:02.974577','admin',14,7,'rodwr_6'),(242,'Height','rodwr_height_6','height','enter a height','','number',1,'2019-06-25 13:45:02.974577','admin','2019-06-25 13:45:02.974577','admin',14,7,'rodwr_6'),(255,'Is Custom?','pnt_isc','is custom','','','boolean',1,'2019-06-25 14:42:26.162477','admin','2019-06-25 14:42:26.162477','admin',1,0,''),(256,'Company Name','pnt_ccn','company name','','','string',1,'2019-06-25 14:42:26.162477','admin','2019-06-25 14:42:26.162477','admin',1,1,'pnt_cus_1'),(257,'Color Name','pnt_cccr','color name','','','string',1,'2019-06-25 14:42:26.162477','admin','2019-06-25 14:42:26.162477','admin',1,2,'pnt_cus_2'),(258,'Color Code','pnt_cccd','color code','','','string',1,'2019-06-25 14:42:26.162477','admin','2019-06-25 14:42:26.162477','admin',1,2,'pnt_cus_2'),(259,'Cabinet Size','cab_size','cabinet size','','','string',1,'2019-07-01 16:01:44.815482','admin','2019-07-01 16:01:44.815482','admin',10,0,''),(261,'Top Selection','top_size','top size','','','string',1,'2019-07-15 22:23:22.169675','admin','2019-07-15 22:23:22.169675','admin',5,1,'');
/*!40000 ALTER TABLE `question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question_options`
--

DROP TABLE IF EXISTS `question_options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `question_options` (
  `qo_id` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(255) NOT NULL,
  `sequence` int(11) NOT NULL,
  `is_active` tinyint(4) NOT NULL,
  `created_on` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `created_by` varchar(255) NOT NULL,
  `updated_on` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_by` varchar(255) NOT NULL,
  `q_fk` int(11) DEFAULT NULL,
  PRIMARY KEY (`qo_id`),
  KEY `FK_1eebbac5f100bfb469339272859` (`q_fk`),
  CONSTRAINT `FK_1eebbac5f100bfb469339272859` FOREIGN KEY (`q_fk`) REFERENCES `question` (`q_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question_options`
--

LOCK TABLES `question_options` WRITE;
/*!40000 ALTER TABLE `question_options` DISABLE KEYS */;
/*!40000 ALTER TABLE `question_options` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ref_pricing_matrix`
--

DROP TABLE IF EXISTS `ref_pricing_matrix`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ref_pricing_matrix` (
  `pm_id` int(11) NOT NULL AUTO_INCREMENT,
  `short_name` varchar(255) DEFAULT NULL,
  `sku` varchar(255) DEFAULT NULL,
  `price` double(11,2) NOT NULL DEFAULT '0.00',
  `sell_price` double(11,2) NOT NULL DEFAULT '0.00',
  `is_active` tinyint(4) NOT NULL,
  `created_on` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `created_by` varchar(255) NOT NULL,
  `updated_on` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_by` varchar(255) NOT NULL,
  `special_door_sell_price` double(11,2) DEFAULT '0.00',
  `special_drawer_sell_price` double(11,2) DEFAULT '0.00',
  PRIMARY KEY (`pm_id`)
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ref_pricing_matrix`
--

LOCK TABLES `ref_pricing_matrix` WRITE;
/*!40000 ALTER TABLE `ref_pricing_matrix` DISABLE KEYS */;
INSERT INTO `ref_pricing_matrix` VALUES (1,'cab_length_4_kanban',NULL,623.00,997.00,1,'2019-07-01 15:50:32.293699','admin','2019-07-01 15:50:32.293699','admin',0.00,0.00),(2,'cab_length_4_kanban_c',NULL,780.00,1287.00,1,'2019-07-01 15:50:32.302788','admin','2019-07-01 15:50:32.302788','admin',0.00,0.00),(3,'cab_length_5_kanban',NULL,680.00,1088.00,1,'2019-07-01 15:50:32.309823','admin','2019-07-01 15:50:32.309823','admin',0.00,0.00),(4,'cab_length_5_kanban_c',NULL,837.00,1381.00,1,'2019-07-01 15:50:32.316556','admin','2019-07-01 15:50:32.316556','admin',0.00,0.00),(5,'cab_length_6_kanban_c',NULL,1172.00,1934.00,1,'2019-07-01 15:50:32.323801','admin','2019-07-01 15:50:32.323801','admin',0.00,0.00),(6,'cab_length_option',NULL,27.00,27.00,1,'2019-07-01 15:50:32.331514','admin','2019-07-01 15:50:32.331514','admin',0.00,0.00),(7,'cab_length_7_kanban_c',NULL,1244.00,2053.00,1,'2019-07-01 15:50:32.338952','admin','2019-07-01 15:50:32.338952','admin',0.00,0.00),(8,'dr_option',NULL,1.00,1.10,1,'2019-07-10 12:40:25.670915','admin','2019-07-10 12:40:25.670915','admin',0.00,0.00),(9,'dwr_option',NULL,0.50,1.00,1,'2019-07-10 15:12:04.389794','admin','2019-07-10 15:12:04.389794','admin',0.00,0.00),(10,'rodwr_option',NULL,1.00,1.50,1,'2019-07-10 15:12:04.389794','admin','2019-07-10 15:12:04.389794','admin',0.00,0.00),(11,'legs_option',NULL,1.00,1.50,1,'2019-07-10 15:12:04.389794','admin','2019-07-10 15:12:04.389794','admin',0.00,0.00),(12,'top_standard_1',NULL,352.00,352.00,1,'2019-07-10 15:12:04.389794','admin','2019-07-10 15:12:04.389794','admin',0.00,0.00),(13,'top_standard_2',NULL,488.00,488.00,1,'2019-07-15 22:18:03.453399','admin','2019-07-15 22:18:03.453399','admin',0.00,0.00),(14,'top_standard_3',NULL,437.00,437.00,1,'2019-07-15 22:18:03.469950','admin','2019-07-15 22:18:03.469950','admin',0.00,0.00),(15,'top_standard_4',NULL,605.00,605.00,1,'2019-07-15 22:18:03.486595','admin','2019-07-15 22:18:03.486595','admin',0.00,0.00),(16,'top_option_custom',NULL,45.00,45.00,1,'2019-07-15 22:18:03.503626','admin','2019-07-15 22:18:03.503626','admin',0.00,0.00),(17,'top_standard_1_multi',NULL,39.00,39.00,1,'2019-07-15 22:18:03.514812','admin','2019-07-15 22:18:03.514812','admin',0.00,0.00),(18,'top_custom_multi',NULL,50.00,50.00,1,'2019-07-15 22:18:03.526057','admin','2019-07-15 22:18:03.526057','admin',0.00,0.00),(19,'top_standard_2_multi',NULL,39.00,39.00,1,'2019-07-15 22:18:03.514812','admin','2019-07-15 22:18:03.514812','admin',0.00,0.00),(20,'top_standard_3_multi',NULL,39.00,39.00,1,'2019-07-15 22:18:03.514812','admin','2019-07-15 22:18:03.514812','admin',0.00,0.00),(21,'top_standard_4_multi',NULL,39.00,39.00,1,'2019-07-15 22:18:03.514812','admin','2019-07-15 22:18:03.514812','admin',0.00,0.00),(22,'4WCTM18INDM2','4WCTM18INDM2',95.11,250.00,1,'2019-07-15 22:18:03.514812','admin','2019-07-15 22:18:03.514812','admin',0.00,0.00),(23,'4WCTM2150DM2','4WCTM2150DM2',74.11,250.00,1,'2019-07-15 22:18:03.514812','admin','2019-07-15 22:18:03.514812','admin',0.00,0.00),(24,'4WCTM24DM2162','4WCTM24DM2162',90.79,250.00,1,'2019-07-15 22:18:03.514812','admin','2019-07-15 22:18:03.514812','admin',0.00,0.00),(25,'4WCTM1816DM1','4WCTM1816DM1',58.63,250.00,1,'2019-07-15 22:18:03.514812','admin','2019-07-15 22:18:03.514812','admin',0.00,0.00),(26,'4WCTM18DM2','4WCTM18DM2',66.04,250.00,1,'2019-07-15 22:18:03.514812','admin','2019-07-15 22:18:03.514812','admin',0.00,0.00),(27,'RV35LID1','RV35LID1',8.40,250.00,1,'2019-07-15 22:18:03.514812','admin','2019-07-15 22:18:03.514812','admin',0.00,0.00),(28,'RV35LIDG1','RV35LIDG1',9.48,250.00,1,'2019-07-15 22:18:03.514812','admin','2019-07-15 22:18:03.514812','admin',0.00,0.00),(29,'RV508','RV508',12.40,250.00,1,'2019-07-15 22:18:03.514812','admin','2019-07-15 22:18:03.514812','admin',0.00,0.00),(30,'4WCTM12DM1','4WCTM12DM1',59.09,250.00,1,'2019-07-15 22:18:03.514812','admin','2019-07-15 22:18:03.514812','admin',0.00,0.00),(31,'4WCTM1850DM1','4WCTM1850DM1',88.05,250.00,1,'2019-07-15 22:18:03.514812','admin','2019-07-15 22:18:03.514812','admin',0.00,0.00),(32,'4WKB1','4WKB1',35.56,100.00,1,'2019-07-16 20:05:35.572737','admin','2019-07-16 20:05:35.572737','admin',0.00,0.00),(33,'4WLS4723252','4WLS4723252',162.48,200.00,1,'2019-07-16 20:05:35.582616','admin','2019-07-16 20:05:35.582616','admin',0.00,0.00),(34,'6572141152','6572141152',13.02,150.00,1,'2019-07-16 20:05:35.592815','admin','2019-07-16 20:05:35.592815','admin',0.00,0.00),(35,'L3340MUF9','L3340MUF9',95.17,600.00,1,'2019-07-16 20:05:35.603314','admin','2019-07-16 20:05:35.603314','admin',0.00,0.00),(36,'L3380MUF9','L3380MUF9',67.76,600.00,1,'2019-07-16 20:05:35.612979','admin','2019-07-16 20:05:35.612979','admin',0.00,0.00),(37,'WRL1736MA','WRL1736MA',60.23,600.00,1,'2019-07-16 20:05:35.622692','admin','2019-07-16 20:05:35.622692','admin',0.00,0.00),(38,'WRL2443MA','WRL2443MA',88.61,600.00,1,'2019-07-16 20:05:35.632567','admin','2019-07-16 20:05:35.632567','admin',0.00,0.00),(39,'4WCT1','4WCT1',20.08,100.00,1,'2019-07-16 20:05:35.643488','admin','2019-07-16 20:05:35.643488','admin',0.00,0.00),(40,'4WCT3','4WCT3',30.15,100.00,1,'2019-07-16 20:05:35.654055','admin','2019-07-16 20:05:35.654055','admin',0.00,0.00),(41,'P01011OB3C','P01011OB3C',1.38,1.38,1,'2019-07-16 20:10:12.313043','admin','2019-07-16 20:10:12.313043','admin',9.00,14.00),(42,'P0256BALC','P0256BALC',0.88,0.88,1,'2019-07-16 20:10:12.321476','admin','2019-07-16 20:10:12.321476','admin',9.00,14.00),(43,'PN2001ALC','PN2001ALC',0.64,0.64,1,'2019-07-16 20:10:12.329248','admin','2019-07-16 20:10:12.329248','admin',9.00,14.00),(44,'H935110VB','H935110VB',1.27,1.27,1,'2019-07-16 20:10:12.336198','admin','2019-07-16 20:10:12.336198','admin',9.00,14.00),(45,'H09451BPN','H09451BPN',1.64,1.64,1,'2019-07-16 20:10:12.344056','admin','2019-07-16 20:10:12.344056','admin',9.00,14.00),(46,'PN2001FBC','PN2001FBC',0.64,0.64,1,'2019-07-16 20:10:12.352105','admin','2019-07-16 20:10:12.352105','admin',9.00,14.00),(47,'H09731BPN','H09731BPN',0.98,0.98,1,'2019-07-16 20:10:12.361211','admin','2019-07-16 20:10:12.361211','admin',9.00,14.00),(48,'P01011SSC','P01011SSC',0.93,0.93,1,'2019-07-16 20:10:12.369073','admin','2019-07-16 20:10:12.369073','admin',9.00,14.00),(49,'H61302SC','H61302SC',0.47,0.47,1,'2019-07-16 20:10:12.377212','admin','2019-07-16 20:10:12.377212','admin',9.00,14.00),(50,'P50122VVBRC','P50122VVBRC',2.07,2.07,1,'2019-07-16 20:10:12.385204','admin','2019-07-16 20:10:12.385204','admin',9.00,14.00),(51,'H78751ORB','H78751ORB',5.00,5.00,1,'2019-07-16 20:10:12.394291','admin','2019-07-16 20:10:12.394291','admin',9.00,14.00),(52,'H937410VB','H937410VB',1.93,1.93,1,'2019-07-16 20:10:12.402725','admin','2019-07-16 20:10:12.402725','admin',9.00,14.00),(53,'H937910WN','H937910WN',1.99,1.99,1,'2019-07-16 20:10:12.413926','admin','2019-07-16 20:10:12.413926','admin',9.00,14.00),(54,'P01012VBCC','P01012VBCC',3.50,3.50,1,'2019-07-16 20:10:12.422120','admin','2019-07-16 20:10:12.422120','admin',9.00,14.00),(55,'P0256BSNC','P0256BSNC',0.87,0.87,1,'2019-07-16 20:10:12.431985','admin','2019-07-16 20:10:12.431985','admin',9.00,14.00),(56,'P50122HSNC5','P50122HSNC5',2.07,2.07,1,'2019-07-16 20:10:12.441796','admin','2019-07-16 20:10:12.441796','admin',9.00,14.00),(57,'P01025OB3C','P01025OB3C',1.03,1.03,1,'2019-07-16 20:10:12.452084','admin','2019-07-16 20:10:12.452084','admin',9.00,14.00),(58,'P01025SSC','P01025SSC',0.59,0.59,1,'2019-07-16 20:10:12.465635','admin','2019-07-16 20:10:12.465635','admin',9.00,14.00),(59,'PN2001OB3C','PN2001OB3C',0.65,0.65,1,'2019-07-16 20:10:12.475484','admin','2019-07-16 20:10:12.475484','admin',9.00,14.00),(60,'H935510VB','H935510VB',0.98,0.98,1,'2019-07-16 20:10:12.484324','admin','2019-07-16 20:10:12.484324','admin',9.00,14.00),(61,'P01025VBCC','P01025VBCC',1.02,1.02,1,'2019-07-16 20:10:12.493516','admin','2019-07-16 20:10:12.493516','admin',9.00,14.00),(62,'P01012OB3C','P01012OB3C',1.95,1.95,1,'2019-07-16 20:10:12.502278','admin','2019-07-16 20:10:12.502278','admin',9.00,14.00),(63,'BP53012G10','BP53012G10',1.47,1.47,1,'2019-07-16 20:10:12.511157','admin','2019-07-16 20:10:12.511157','admin',9.00,14.00),(64,'H0935155','H0935155',1.27,1.27,1,'2019-07-16 20:10:12.527645','admin','2019-07-16 20:10:12.527645','admin',9.00,14.00),(65,'H0967155','H0967155',1.27,1.27,1,'2019-07-16 20:10:12.541781','admin','2019-07-16 20:10:12.541781','admin',9.00,14.00),(66,'H78841BPN','H78841BPN',3.50,3.50,1,'2019-07-16 20:10:12.555406','admin','2019-07-16 20:10:12.555406','admin',9.00,14.00),(67,'H78911BPN','H78911BPN',3.13,3.13,1,'2019-07-16 20:10:12.566248','admin','2019-07-16 20:10:12.566248','admin',9.00,14.00),(68,'H79091ORB','H79091ORB',2.85,2.85,1,'2019-07-16 20:10:12.574802','admin','2019-07-16 20:10:12.574802','admin',9.00,14.00),(69,'H937710VB','H937710VB',1.99,1.99,1,'2019-07-16 20:10:12.582462','admin','2019-07-16 20:10:12.582462','admin',9.00,14.00),(70,'P22781CSNC','P22781CSNC',2.73,2.73,1,'2019-07-16 20:10:12.591433','admin','2019-07-16 20:10:12.591433','admin',9.00,14.00),(71,'H78861VB','H78861VB',4.42,4.42,1,'2019-07-16 20:10:12.600295','admin','2019-07-16 20:10:12.600295','admin',9.00,14.00),(72,'H09131BPN','H09131BPN',0.84,0.84,1,'2019-07-16 20:10:12.607859','admin','2019-07-16 20:10:12.607859','admin',9.00,14.00),(73,'H935210WN','H935210WN',1.27,1.27,1,'2019-07-16 20:10:12.615513','admin','2019-07-16 20:10:12.615513','admin',9.00,14.00),(74,'H93781BPN','H93781BPN',1.99,1.99,1,'2019-07-16 20:10:12.623925','admin','2019-07-16 20:10:12.623925','admin',9.00,14.00),(75,'P01012SSC','P01012SSC',1.02,1.02,1,'2019-07-16 20:10:12.632713','admin','2019-07-16 20:10:12.632713','admin',9.00,14.00),(76,'P22669CVBCC','P22669CVBCC',2.04,2.04,1,'2019-07-16 20:10:12.640598','admin','2019-07-16 20:10:12.640598','admin',9.00,14.00),(77,'PROSS215MMNI','PROSS215MMNI',0.03,0.03,1,'2019-07-16 20:10:12.648107','admin','2019-07-16 20:10:12.648107','admin',9.00,14.00),(78,'pnt_clr','',50.00,100.00,1,'2019-07-18 09:21:16.148442','admin','2019-07-18 09:21:16.148442','admin',0.00,0.00),(79,'ftr_dtd','',4.00,10.00,1,'2019-07-18 09:34:02.006991','admin','2019-07-18 09:34:02.006991','admin',0.00,0.00),(80,'ftr_oco','',4.00,100.00,1,'2019-07-18 09:34:02.026186','admin','2019-07-18 09:34:02.026186','admin',0.00,0.00),(81,'ftr_applft','',4.00,250.00,1,'2019-07-18 09:34:02.041915','admin','2019-07-18 09:34:02.041915','admin',0.00,0.00),(82,'ftr_os2l','',4.00,300.00,1,'2019-07-18 09:34:02.060514','admin','2019-07-18 09:34:02.060514','admin',0.00,0.00),(83,'ftr_os3l','',4.00,250.00,1,'2019-07-18 09:34:02.085463','admin','2019-07-18 09:34:02.085463','admin',0.00,0.00),(84,'ftr_tls','',4.00,487.00,1,'2019-07-18 09:34:02.102239','admin','2019-07-18 09:34:02.102239','admin',0.00,0.00);
/*!40000 ALTER TABLE `ref_pricing_matrix` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reference_data`
--

DROP TABLE IF EXISTS `reference_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reference_data` (
  `rd_id` int(11) NOT NULL AUTO_INCREMENT,
  `value` varchar(255) NOT NULL,
  `is_active` tinyint(4) NOT NULL,
  `created_on` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `created_by` varchar(255) NOT NULL,
  `updated_on` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_by` varchar(255) NOT NULL,
  `rk_fk` int(11) DEFAULT NULL,
  PRIMARY KEY (`rd_id`),
  KEY `FK_926971cfc718687a650574cbc28` (`rk_fk`),
  CONSTRAINT `FK_926971cfc718687a650574cbc28` FOREIGN KEY (`rk_fk`) REFERENCES `reference_keys` (`rk_id`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reference_data`
--

LOCK TABLES `reference_data` WRITE;
/*!40000 ALTER TABLE `reference_data` DISABLE KEYS */;
INSERT INTO `reference_data` VALUES (1,'Worthy\'s Run',1,'2019-05-21 13:58:45.941302','admin','2019-05-21 13:58:45.941302','admin',1),(2,'Wurth',1,'2019-05-21 13:58:45.941302','admin','2019-05-21 13:58:45.941302','admin',1),(3,'Abella Stone',1,'2019-05-21 13:58:45.941302','admin','2019-05-21 13:58:45.941302','admin',1),(4,'Lawrence Crouse',1,'2019-05-21 13:58:45.941302','admin','2019-05-21 13:58:45.941302','admin',1),(5,'Brandt',1,'2019-05-21 13:58:45.941302','admin','2019-05-21 13:58:45.941302','admin',1),(6,'Hicksville Planning Mill',1,'2019-05-21 13:58:45.941302','admin','2019-05-21 13:58:45.941302','admin',1),(7,'O\'Shea Lumber Company',1,'2019-05-21 13:58:45.941302','admin','2019-05-21 13:58:45.941302','admin',1),(8,'Don\'s Wood Village',1,'2019-05-21 13:58:45.941302','admin','2019-05-21 13:58:45.941302','admin',1),(9,'Nova Design',1,'2019-05-21 13:58:45.941302','admin','2019-05-21 13:58:45.941302','admin',1),(10,'Precision Wood',1,'2019-05-21 13:58:45.941302','admin','2019-05-21 13:58:45.941302','admin',1),(11,'No Vendor',1,'2019-05-21 13:58:45.941302','admin','2019-05-21 13:58:45.941302','admin',1),(12,'0',1,'2019-05-21 13:58:45.947024','admin','2019-05-21 13:58:45.947024','admin',2),(13,'1/8',1,'2019-05-21 13:58:45.947024','admin','2019-05-21 13:58:45.947024','admin',2),(14,'1/4',1,'2019-05-21 13:58:45.947024','admin','2019-05-21 13:58:45.947024','admin',2),(15,'3/8',1,'2019-05-21 13:58:45.947024','admin','2019-05-21 13:58:45.947024','admin',2),(16,'1/2',1,'2019-05-21 13:58:45.947024','admin','2019-05-21 13:58:45.947024','admin',2),(17,'5/8',1,'2019-05-21 13:58:45.947024','admin','2019-05-21 13:58:45.947024','admin',2),(18,'3/4',1,'2019-05-21 13:58:45.947024','admin','2019-05-21 13:58:45.947024','admin',2),(19,'7/8',1,'2019-05-21 13:58:45.947024','admin','2019-05-21 13:58:45.947024','admin',2),(20,'Wood',1,'2019-05-21 13:58:45.948967','admin','2019-05-21 13:58:45.948967','admin',3),(21,'Stone',1,'2019-05-21 13:58:45.948967','admin','2019-05-21 13:58:45.948967','admin',3),(22,'No Top',1,'2019-05-21 13:58:45.948967','admin','2019-05-21 13:58:45.948967','admin',3),(23,'Special',1,'2019-05-21 13:58:45.950585','admin','2019-05-21 13:58:45.950585','admin',4),(24,'Standard',1,'2019-05-21 13:58:45.950585','admin','2019-05-21 13:58:45.950585','admin',4),(25,'Milk Paint - Snow White',1,'2019-05-21 13:58:45.959934','admin','2019-05-21 13:58:45.959934','admin',5),(26,'Milk Paint - Antique White',1,'2019-05-21 13:58:45.959934','admin','2019-05-21 13:58:45.959934','admin',5),(27,'Milk Paint - Linen',1,'2019-05-21 13:58:45.959934','admin','2019-05-21 13:58:45.959934','admin',5),(28,'Milk Paint - Millstone',1,'2019-05-21 13:58:45.959934','admin','2019-05-21 13:58:45.959934','admin',5),(29,'Milk Paint - Dark Chocolate',1,'2019-05-21 13:58:45.959934','admin','2019-05-21 13:58:45.959934','admin',5),(30,'Milk Paint - Buttermilk Yellow',1,'2019-05-21 13:58:45.959934','admin','2019-05-21 13:58:45.959934','admin',5),(31,'Milk Paint - Basil Green',1,'2019-05-21 13:58:45.959934','admin','2019-05-21 13:58:45.959934','admin',5),(32,'Milk Paint - Emerald',1,'2019-05-21 13:58:45.959934','admin','2019-05-21 13:58:45.959934','admin',5),(33,'Milk Paint - Persimmon',1,'2019-05-21 13:58:45.959934','admin','2019-05-21 13:58:45.959934','admin',5),(34,'Milk Paint - Brick Red',1,'2019-05-21 13:58:45.959934','admin','2019-05-21 13:58:45.959934','admin',5),(35,'Milk Paint - Persian Blue',1,'2019-05-21 13:58:45.959934','admin','2019-05-21 13:58:45.959934','admin',5),(36,'Milk Paint - Halcyon Blue',1,'2019-05-21 13:58:45.959934','admin','2019-05-21 13:58:45.959934','admin',5),(37,'Milk Paint - Klein Blue',1,'2019-05-21 13:58:45.959934','admin','2019-05-21 13:58:45.959934','admin',5),(38,'Milk Paint - Coastal Blue',1,'2019-05-21 13:58:45.959934','admin','2019-05-21 13:58:45.959934','admin',5),(39,'Milk Paint - Seagul Gray',1,'2019-05-21 13:58:45.959934','admin','2019-05-21 13:58:45.959934','admin',5),(40,'Milk Paint - Drift wood',1,'2019-05-21 13:58:45.959934','admin','2019-05-21 13:58:45.959934','admin',5),(41,'Milk Paint - Queenstown Gray',1,'2019-05-21 13:58:45.959934','admin','2019-05-21 13:58:45.959934','admin',5),(42,'Milk Paint - Lamp Black',1,'2019-05-21 13:58:45.959934','admin','2019-05-21 13:58:45.959934','admin',5),(43,'Chalk Paint - Chalk White',1,'2019-05-21 13:58:45.959934','admin','2019-05-21 13:58:45.959934','admin',5),(44,'Chalk Paint - Bone White',1,'2019-05-21 13:58:45.959934','admin','2019-05-21 13:58:45.959934','admin',5),(45,'Chalk Paint - French Vanilla',1,'2019-05-21 13:58:45.959934','admin','2019-05-21 13:58:45.959934','admin',5),(46,'Chalk Paint - Chapin Gray',1,'2019-05-21 13:58:45.959934','admin','2019-05-21 13:58:45.959934','admin',5),(47,'Chalk Paint - Limestone',1,'2019-05-21 13:58:45.959934','admin','2019-05-21 13:58:45.959934','admin',5),(48,'Chalk Paint - Empire Gray',1,'2019-05-21 13:58:45.959934','admin','2019-05-21 13:58:45.959934','admin',5),(49,'Chalk Paint - Slate Gray',1,'2019-05-21 13:58:45.959934','admin','2019-05-21 13:58:45.959934','admin',5),(50,'Chalk Paint - Black Pepper',1,'2019-05-21 13:58:45.959934','admin','2019-05-21 13:58:45.959934','admin',5),(51,'Chalk Paint - Bayberry Green',1,'2019-05-21 13:58:45.959934','admin','2019-05-21 13:58:45.959934','admin',5),(52,'Chalk Paint - Nantucket Green',1,'2019-05-21 13:58:45.959934','admin','2019-05-21 13:58:45.959934','admin',5),(53,'Chalk Paint - Key West Blue',1,'2019-05-21 13:58:45.959934','admin','2019-05-21 13:58:45.959934','admin',5),(54,'Chalk Paint - Summertime Blue',1,'2019-05-21 13:58:45.959934','admin','2019-05-21 13:58:45.959934','admin',5),(55,'Chalk Paint - Stillwater Blue',1,'2019-05-21 13:58:45.959934','admin','2019-05-21 13:58:45.959934','admin',5),(56,'Chalk Paint - Charleton Blue',1,'2019-05-21 13:58:45.959934','admin','2019-05-21 13:58:45.959934','admin',5),(57,'Chalk Paint - Fjord Blue',1,'2019-05-21 13:58:45.959934','admin','2019-05-21 13:58:45.959934','admin',5),(58,'Chalk Paint - Midnight Blue',1,'2019-05-21 13:58:45.959934','admin','2019-05-21 13:58:45.959934','admin',5);
/*!40000 ALTER TABLE `reference_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reference_keys`
--

DROP TABLE IF EXISTS `reference_keys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reference_keys` (
  `rk_id` int(11) NOT NULL AUTO_INCREMENT,
  `short_name` varchar(255) NOT NULL,
  `long_name` varchar(255) NOT NULL,
  `is_active` tinyint(4) NOT NULL,
  `created_on` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `created_by` varchar(255) NOT NULL,
  `updated_on` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_by` varchar(255) NOT NULL,
  PRIMARY KEY (`rk_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reference_keys`
--

LOCK TABLES `reference_keys` WRITE;
/*!40000 ALTER TABLE `reference_keys` DISABLE KEYS */;
INSERT INTO `reference_keys` VALUES (1,'vendors','Vendors',1,'2019-05-21 13:58:45.000000','admin','2019-05-21 13:58:45.000000','admin'),(2,'measurement_secondary','Measurement (secondary)',1,'2019-05-21 13:58:45.000000','admin','2019-05-21 13:58:45.000000','admin'),(3,'top_type','Top Type',1,'2019-05-21 13:58:45.000000','admin','2019-05-21 13:58:45.000000','admin'),(4,'paint_order_type','Paint Order Type',1,'2019-05-21 13:58:45.000000','admin','2019-05-21 13:58:45.000000','admin'),(5,'paint_color','Paint Color',1,'2019-05-21 13:58:45.000000','admin','2019-05-21 13:58:45.000000','admin'),(6,'hardware_label','Hardware Label',1,'2019-05-21 13:58:45.000000','admin','2019-05-21 13:58:45.000000','admin'),(7,'hardware_sku','Hardware SKU',1,'2019-05-21 13:58:45.000000','admin','2019-05-21 13:58:45.000000','admin');
/*!40000 ALTER TABLE `reference_keys` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-08-21 14:17:22
