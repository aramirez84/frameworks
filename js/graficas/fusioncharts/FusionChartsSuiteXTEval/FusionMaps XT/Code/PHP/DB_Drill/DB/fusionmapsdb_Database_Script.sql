/*
SQLyog Community Edition- MySQL GUI v5.22a
Host - 4.1.22-community-nt : Database - fusionmapsdb
*********************************************************************
Server version : 4.1.22-community-nt
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

create database if not exists `fusionmapsdb`;

USE `fusionmapsdb`;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

/*Table structure for table `fcmap_distribution` */

DROP TABLE IF EXISTS `fcmap_distribution`;

CREATE TABLE `fcmap_distribution` (
  `Internal_Id` varchar(10) default NULL,
  `entity_id` varchar(10) default NULL,
  `group_id` int(10) default NULL,
  `subgroup_id` int(10) default NULL,
  `data` int(10) default NULL,
  KEY `FK_fcmap_distribution` (`Internal_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `fcmap_distribution` */


/*Table structure for table `fcmap_group_master` */

DROP TABLE IF EXISTS `fcmap_group_master`;

CREATE TABLE `fcmap_group_master` (
  `group_id` int(10) NOT NULL auto_increment,
  `group_name` varchar(50) default NULL,
  UNIQUE KEY `group_id` (`group_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `fcmap_group_master` */

insert  into `fcmap_group_master`(`group_id`,`group_name`) values (1,'Business'),(2,'Service'),(3,'Unemployed');

/*Table structure for table `fcmap_master` */

DROP TABLE IF EXISTS `fcmap_master`;

CREATE TABLE `fcmap_master` (
  `Internal_Id` varchar(10) default NULL,
  `s_name` varchar(10) default NULL,
  `l_name` varchar(50) default NULL,
  `map_swf` varchar(50) default NULL,
  UNIQUE KEY `Internal_Id` (`Internal_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `fcmap_master` */

insert  into `fcmap_master`(`Internal_Id`,`s_name`,`l_name`,`map_swf`) values ('AL','AL','Alabama','FCMap_Alabama.swf'),('AK','AK','Alaska','FCMap_Alaska.swf'),('AZ','AZ','Arizona','FCMap_Arizona.swf'),('AR','AR','Arkansas','FCMap_Arkansas.swf'),('CA','CA','California','FCMap_California.swf'),('CO','CO','Colorado','FCMap_Colorado.swf'),('CT','CT','Connecticut','FCMap_Connecticut.swf'),('DC','DC','District of Columbia',''),('DE','DE','Delaware','FCMap_Delaware.swf'),('FL','FL','Florida','FCMap_Florida.swf'),('GA','GA','Georgia','FCMap_Georgia.swf'),('HI','HI','Hawaii','FCMap_Hawaii.swf'),('ID','ID','Idaho','FCMap_Idaho.swf'),('IL','IL','Illinois','FCMap_Illinois.swf'),('IN','IN','Indiana','FCMap_Indiana.swf'),('IA','IA','Iowa','FCMap_Iowa.swf'),('KS','KS','Kansas','FCMap_Kansas.swf'),('KY','KY','Kentucky','FCMap_Kentucky.swf'),('LA','LA','Louisiana','FCMap_Louisiana.swf'),('ME','ME','Maine','FCMap_Maine.swf'),('MD','MD','Maryland','FCMap_Maryland.swf'),('MA','MA','Massachusetts','FCMap_Massachusetts.swf'),('MI','MI','Michigan','FCMap_Michigan.swf'),('MN','MN','Minnesota','FCMap_Minnesota.swf'),('MS','MS','Mississippi','FCMap_Mississippi.swf'),('MO','MO','Missouri','FCMap_Missouri.swf'),('MT','MT','Montana','FCMap_Montana.swf'),('NE','NE','Nebraska','FCMap_Nebraska.swf'),('NV','NV','Nevada','FCMap_Nevada.swf'),('NH','NH','New Hampshire','FCMap_NewHampshire.swf'),('NJ','NJ','New Jersey','FCMap_NewJersey.swf'),('NM','NM','New Mexico','FCMap_NewMexico.swf'),('NY','NY','New York','FCMap_NewYork.swf'),('NC','NC','North Carolina','FCMap_NorthCarolina.swf'),('ND','ND','North Dakota','FCMap_NorthDakota.swf'),('OH','OH','Ohio','FCMap_Ohio.swf'),('OK','OK','Oklahoma','FCMap_Oklahoma.swf'),('OR','OR','Oregon','FCMap_Oregon.swf'),('PA','PA','Pennsylvania','FCMap_Pennsylvania.swf'),('RI','RI','Rhode Island','FCMap_RhodeIsland.swf'),('SC','SC','South Carolina','FCMap_SouthCarolina.swf'),('SD','SD','South Dakota','FCMap_SouthDakota.swf'),('TN','TN','Tennessee','FCMap_Tennessee.swf'),('TX','TX','Texas','FCMap_Texas.swf'),('UT','UT','Utah','FCMap_Utah.swf'),('VT','VT','Vermont','FCMap_Vermont.swf'),('VA','VA','Virginia','FCMap_Virginia.swf'),('WA','WA','Washington','FCMap_Washington.swf'),('WV','WV','West Virginia','FCMap_WestVirginia.swf'),('WI','WI','Wisconsin','FCMap_Wisconsin.swf'),('WY','WY','Wyoming','FCMap_Wyoming.swf');

/*Table structure for table `fcmap_subgroup_master` */

DROP TABLE IF EXISTS `fcmap_subgroup_master`;

CREATE TABLE `fcmap_subgroup_master` (
  `group_id` int(10) default NULL,
  `subgroup_id` int(10) NOT NULL auto_increment,
  `subgroup_name` varchar(50) default NULL,
  UNIQUE KEY `subgroup_id` (`subgroup_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `fcmap_subgroup_master` */

insert  into `fcmap_subgroup_master`(`group_id`,`subgroup_id`,`subgroup_name`) values (1,1,'Software'),(1,2,'Automobile'),(1,3,'Finance'),(1,4,'Comunication'),(1,5,'Energy'),(2,6,'Security'),(2,7,'Law'),(2,8,'Education'),(2,9,'Administration'),(3,10,'20-30'),(3,11,'30-40'),(3,12,'40-50'),(3,13,'50-60'),(3,14,'Above 60'),(2,15,'Postal');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;